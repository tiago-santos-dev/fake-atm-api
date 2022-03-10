import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';
import './database/conect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () =>
  console.log('🔥 Server started at http://localhost:3333'),
);
