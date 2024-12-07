import express, { Application } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});

export default app;
