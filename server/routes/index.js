import { Router } from 'express';
import { brandRouter } from './brandRouter.js';
import { deviceRouter } from './deviceRouter.js';
import { typeRouter } from './typeRouter.js';
import { userRouter } from './userRouter.js';

export const router = new Router();

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);