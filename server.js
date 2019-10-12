const express = require('express');

const app = express();
const reload = require('reload');
const http = require('http');
const { list } = require('./contributors/index');

const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { List: list });
});

const port = process.env.PORT || 3000;

reload(app)
  .then(() => {
    server.listen(port, () => {
      console.log(`Server connected at port ${port}`);
    });
  })
  .catch(err => {
    console.err('Reload error occurred: ', err);
  });
