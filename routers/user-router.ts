import Router from "express";
import userController from '../controllers/userController'
const router = Router()

router.post('/registration', userController.register);

export default router;