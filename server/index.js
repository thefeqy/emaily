import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({message: 'This is a change!'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});