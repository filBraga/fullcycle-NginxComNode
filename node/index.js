// index.js

const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// MySQL connection
const config = {
  host: "db",
  user: "root",
  password: "yourpassword",
  database: "testdb",
};

const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`;
connection.query(createTable);

const sql = `INSERT INTO people(name) values('Wesley')`;
connection.query(sql);

const getPeople = `SELECT name FROM people`;

app.get("/", (req, res) => {
  connection.query(getPeople, (err, results) => {
    if (err) throw err;

    let html = "<h1>Full Cycle</h1>";
    html += "<ul>";
    results.forEach((row) => {
      html += `<li>${row.name}</li>`;
    });
    html += "</ul>";

    res.send(html);
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
