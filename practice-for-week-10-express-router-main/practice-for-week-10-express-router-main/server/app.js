const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);

router.get('/', (req, res) => {
  res.json('GET /colors')
});

router.get("/:name", (req, res) => {
  res.json('GET /colors/:name')
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

