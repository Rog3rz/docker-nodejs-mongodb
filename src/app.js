import express from 'express';
import CONFIG_VARIABLES from './config.js';
import './database.js';

const { PORT } = CONFIG_VARIABLES;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log('Running on ', PORT);
});
