const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const PORT = process.env.PORT || 3001;

const products  = require('./products')
const questions = require( './questions');


const app = express();
app.use(bodyParser.json());
app.use(cors());
const db = new sqlite3.Database("./database.db");


app.get('/quiz', (req, res) => {
  db.all("SELECT * FROM quiz ORDER BY RANDOM()", (err, rows) => {
    if (err) {
      console.error("Error getting questions:", err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  });
});

app.get("/populate", (req, res) => {

  try {
    createProducts(products, res)
    createQuiz(questions, res)
  } catch (error) {
    console.log(error.message);
  } 

  res.send("Dados populados com sucesso!")

});

function createProducts(products, res) {
  db.serialize(() => db.run("DROP TABLE IF EXISTS products"));

  // Cria a tabela de produtos
  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS products (id INTEGER, name TEXT, imageUrl TEXT, category TEXT, price REAL, rating REAL)"
    );

    // Inserção dos produtos na tabela
    const stmt = db.prepare(
      "INSERT INTO products (id, name, imageUrl, category, price, rating) VALUES (?, ?, ?, ?, ?, ?)"
    );
    products.forEach((product) => {
      stmt.run(
        product.id,
        product.name,
        product.imageUrl,
        product.category,
        product.price,
        product.rating
      );
    });

    stmt.finalize();

  });
}


function createQuiz(questions, res) {
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS quiz", (err) => {
      if (err) {
        console.error("Error dropping quiz table:", err.message);
        return;
      }
    });
  
    db.run(
      `
      CREATE TABLE quiz (
        id INTEGER PRIMARY KEY,
        question TEXT,
        answer BOOLEAN
      )
      `,
      (err) => {
        if (err) {
          console.error("Error creating quiz table:", err.message);
          return;
        }
        
        const sql = `INSERT INTO quiz (question, answer) VALUES (?, ?)`;
        questions.forEach((question) => {
          db.run(
            sql,
            [question.question, question.answer],
            function (err) {
              if (err) {
                console.error("Error inserting question:", err.message);
                return;
              }
            }
          );
        });

      }
    );
  });
}

app.get("/products", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Página padrão é 1
  const limit = 10;
  const offset = (page - 1) * limit;

  const {category, priceMin, priceMax, rating} = req.query

  let sql = "SELECT * FROM products WHERE 1=1";
  const params = [];

  // Aplicando filtros
  if (category) {
    sql += " AND category = ?";
    params.push(category);
  }
  if (priceMin && priceMax) {
    sql += " AND price BETWEEN ? AND ?";
    params.push(priceMin);
    params.push(priceMax);
  }
  if (rating) {
    sql += " AND rating >= ?";
    params.push(rating);
  }

  // Aplicando paginação
  sql += " LIMIT ? OFFSET ?";
  params.push(limit);
  params.push(offset);

  // Executando a consulta
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error("Error retrieving items:", err);
      res.status(500).json({ error: "Error retrieving items" });
    } else {
      res.json(rows);
    }
  });

  // Fechando o banco de dados após a consulta
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
