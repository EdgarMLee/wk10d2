const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});
app.use((req, res, next)=> {
  const err = new Error("Sorry, the requested resource couldn't be found")
  next(err)
});

app.get((err, req, res, next) => {
  res.status(404).json(err)
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
