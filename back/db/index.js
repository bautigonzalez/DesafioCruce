const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/desafiocruce",
  { useNewUrlParser: true },
  function (err) {
    {
      if (err) {
        console.log("Some problem with the connection " + err);
      } else {
        console.log("The Mongoose connection is ready");
      }
    }
  }
);
console.log("Arrancamos la DB");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Conectado a la DB");
});