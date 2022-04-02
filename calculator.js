const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var sum = n1 + n2;
  res.send("Sum of these two numbers is "+sum);
})

app.listen(3000, function() {
  console.log("Server is running at 3000");
})
