const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ogs = require('open-graph-scraper');

const app = express();
const jsonParser = bodyParser.json();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Available, use POST with payload {"url": [url]} to get information.')
})

/**
 *
 * Takes a url in jsonbody {url: [URL]} and returns opengraph encoded answers
 *
 */
app.post('/', jsonParser, (req, res) => {
  ogs(req.body).then((data) => {
    const { error, result } = data;
    if (error) {
      res.status(500)
      res.send()
    } else {
      res.send(result);
    }
  }).catch((error) => {
    res.status(500)
    res.send()
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
