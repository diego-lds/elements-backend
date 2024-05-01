const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");
import products from './products'
import questions from './questions';

function createProducts(products){
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS products", (err) => {
      if (err) {
        console.error("Error dropping products table:", err.message);
        return;
      }
      console.log("Products table dropped");
    });
  
    db.run(
      `
          CREATE TABLE products (
              id INTEGER,
              name TEXT,
              imageUrl TEXT,
              category TEXT,
              price REAL,
              rating REAL
          )
      `,
      (err) => {
        if (err) {
          console.error("Error creating products table:", err.message);
          return;
        }
        console.log("Tabela populada com sucesso!");
      }
    );
  
    const sql = `INSERT INTO products (id, name, imageUrl, category, price, rating) VALUES (?, ?, ?, ?, ?, ?)`;
    products.forEach((product) => {
      db.run(
        sql,
        [
          product.id,
          product.name,
          product.imageUrl,
          product.category,
          product.price,
          product.rating,
        ],
        function (err) {
          if (err) {
            console.error("Error inserting product:", err.message);
            return;
          }
          console.log("Product inserted with ID:", product.id);
        }
      );
    });
  });
}


function createQuiz(questions) {
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS quiz", (err) => {
      if (err) {
        console.error("Error dropping quiz table:", err.message);
        return;
      }
      console.log("Quiz table dropped");
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
        console.log("Quiz table created");
        
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
              console.log("Question inserted with ID:", this.lastID);
            }
          );
        });
      }
    );
  });
}



createQuiz(questions);
createProducts(products)
db.close();
