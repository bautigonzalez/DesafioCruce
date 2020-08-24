require("./db")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const volleyball = require("volleyball");
const routes = require("./routes")

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + "/public"))

app.use(volleyball)

app.use("/api", routes);
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html")
})

app.use((err, req, res, next)=>{
    res.status(500).send("error")
  })

app.listen(port, function (){
    console.log(`DesafioCruce listening on PORT ${port}`)
})