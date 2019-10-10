const { list } = require("./contributors/index");

const express = require("express");
const app = express();
const http = require("http");
const reload = require("reload");

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(express.static("public"));

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.render("index", { List: list });
});

reload(app)
  .then(() => {
    server.listen(app.get("port"), () => {
      console.log(`Server is connected to ${app.get("port")}`);
    });
  })
  .catch(err => {
    console.log("Reload could not start", err);
  });
