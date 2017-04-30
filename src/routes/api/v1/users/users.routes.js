import express from 'express';
import usersController from './users.controller';

const router = express.Router();

router.get('/get-all', usersController.getAll);

export default router;
