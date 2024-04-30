const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

import products from './products'

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

// Fecha a conexão com o banco de dados
db.close();
