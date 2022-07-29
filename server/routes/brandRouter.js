import { Router } from 'express';
import { brandController } from '../controllers/brandController.js';

export const brandRouter = new Router();

brandRouter.post('/create', brandController.create);
brandRouter.get('/getAll', brandController.getAll);

