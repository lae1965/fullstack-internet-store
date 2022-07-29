import { Router } from 'express';
import { typeController } from '../controllers/typeController.js';

export const typeRouter = new Router();

typeRouter.post('/create', typeController.create);
typeRouter.get('/getAll', typeController.getAll);