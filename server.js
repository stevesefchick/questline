const express = require('express');

const app = express();
const port = process.env.PORT || 5000;



app.get('/api/testheck', (req, res) => {
  res.send({express: 'aw nuts'});
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Test!' });
});

app.get('/api/landing/copyright', (req, res) => {
  res.send({ express: 'This is the footer. Copyrights and crap go here!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));