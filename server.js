const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
