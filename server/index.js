const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', route);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});