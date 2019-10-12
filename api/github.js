const https = require('https');

const getUser = username =>
  new Promise((resolve, reject) => {
    const options = {
      headers: {
        'user-agent': 'request',
      },
    };

    https
      .get(`https://api.github.com/users/${username}`, options, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', chunk => (body += chunk));
        res.on('end', () => resolve(JSON.parse(body)));
      })
      .on('error', reject);
  });

module.exports = { getUser };
