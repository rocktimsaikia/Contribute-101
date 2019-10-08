const express = require("express");
const app = express();
const { list } = require("./contributors/index");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { List: list });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
