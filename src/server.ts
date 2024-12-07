import express, { Application } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Application = express();

const test = 'test';
console.log(test);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
