const express = require('express');

const app = express();
const reload = require('reload');
const http = require('http');
const { list } = require('./contributors/index');

const { getUser } = require('./api/github');

const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  let countFetched = 0;
  list.forEach(async function(contributor) {
    await getUser(contributor.github_username).then(result => {
      countFetched += 1;
      contributor.githubInfo = result;
      if (list.length === countFetched) {
        console.log(list);
        res.render('index', { List: list });
      }
    });
  });
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

module.exports = app;
