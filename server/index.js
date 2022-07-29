import dotenv from 'dotenv';
import express from  'express';
import { sequelize } from './db.js';
import * as model from './models/models.js';
import cors from 'cors';
import { router } from './routes/index.js';
import ErrorHandler from './middlewares/ErrorHandlerMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(ErrorHandler)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {console.log(`Server has been started on PORT ${PORT}...`);});
  } catch (e) {
    console.log(e);
  }
}

start();