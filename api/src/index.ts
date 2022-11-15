import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import path from 'node:path';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3002;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Não Conectado'));

