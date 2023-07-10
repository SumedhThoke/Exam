const express = require("express");
const bookRelatedRoutes =require("./routes/book");

const app = express();

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());

app.use("/book", bookRelatedRoutes);

app.listen(7576, () => {
  console.log("server started at 7576");
});