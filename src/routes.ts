import { Router } from 'express';
import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';

const router = Router();

router.post('/user', UserController.store);
router.post('/auth', AuthController.authenticate);

export default router;
