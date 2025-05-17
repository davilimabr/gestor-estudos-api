import dotenv from 'dotenv';
import express, { json } from 'express';
import routes from './routes/index.js';
import errorHandler from './middlewares/error.middleware.js';
import authHandler from './middlewares/auth.middleware.js';
import cacheHandler from './middlewares/cache.middleware.js';
import validationHandler from './middlewares/validation.middleware.js';

dotenv.config(); 

const app = express();
app.use(json());

//app.use(authHandler);
//app.use(cacheHandler);
//app.use(validationHandler);

app.use('/api', routes);
app.get('/', (_,res)=>res.send('Gestor de Estudos API v1'));

app.use(errorHandler);

export default app;
