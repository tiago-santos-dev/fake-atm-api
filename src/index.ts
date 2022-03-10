import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import './database/conect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () =>
  // eslint-disable-next-line no-console
  console.log('🔥 Server started at http://localhost:3333'),
);
