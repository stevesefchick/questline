const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

//TODO - remove later
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Test!' });
});

//return copyright info
app.get('/api/landing/copyright', (req, res) => {
  res.send({ express: 'Copyright Steve Sefchick 2018 heck yeah' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));