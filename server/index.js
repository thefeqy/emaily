import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Worlds!!!!!!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});