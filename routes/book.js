const express = require("express");
const appForBook = express.Router();
const mysql = require("mysql2");
const config = require("config");
const connection = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "manager",
  database: "sdmExam",
});

appForBook.get("/", (request, response) => {
  var query = "select * from Book";
  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
    }
  });
});

appForBook.post("/", (request, response) => {
  var query = `insert into Book(id, b_name, author, book_type, price, publishedDate, language)values(${request.body.id},'${request.body.b_name}','${request.body.author}','${request.body.book_type}','${request.body.price}','${request.body.publishedDate}','${request.body.language}');`

  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
      response.setHeader("Content-Type", "application/json");
      response.send(error);
    }
  });
});


appForBook.put("/:id", (request, response) => {
  var query = `update Book set price='${request.body.price}', language='${request.body.lang}' where id=${request.params.id}`;
  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
      response.setHeader("Content-Type", "application/json");
      response.send(error);
    }
  });
});

module.exports = appForBook;



