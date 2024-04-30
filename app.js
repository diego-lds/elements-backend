const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const  products = require('./products') 
app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database("./database2.db");

app.get("/allProducts", (req, res) => {
  const sql = `SELECT * FROM products`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

app.get("/populate", (req, res) => {
  
  // Dropa a tabela se ela já existir
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS products");
  });

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

    res.send("Dados populados com sucesso na tabela.");
  });
});

app.get("/items", (req, res) => {
  const page = parseInt(req.query.page);
  const limit = 5;
  const offset = (page - 1) * limit;

  const sql = "SELECT * FROM products LIMIT ? OFFSET ?";
  db.all(sql, [limit, offset], (err, rows) => {
    if (err) {
      console.error("Error retrieving items:", err);
      res.status(500).json({ error: "Error retrieving items" });
    } else {
      res.json(rows);
    }
  });
});


app.get("/products", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Página padrão é 1
  const limit = 5;
  const offset = (page - 1) * limit;

  let sql = "SELECT * FROM products WHERE 1=1";
  const params = [];

  // Aplicando filtros
  if (req.query.category) {
    sql += " AND category = ?";
    params.push(req.query.category);
  }
  if (req.query.price_min && req.query.price_max) {
    sql += " AND price BETWEEN ? AND ?";
    params.push(req.query.price_min);
    params.push(req.query.price_max);
  }
  if (req.query.min_rating) {
    sql += " AND rating >= ?";
    params.push(req.query.min_rating);
  }

  // Aplicando paginação
  sql += " LIMIT ? OFFSET ?";
  params.push(limit);
  params.push(offset);

  // Executando a consulta
  const db = new sqlite3.Database('database2.db');
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error("Error retrieving items:", err);
      res.status(500).json({ error: "Error retrieving items" });
    } else {
      res.json(rows);
    }
  });

  // Fechando o banco de dados após a consulta
  db.close();
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
