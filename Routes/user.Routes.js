import { Router } from "express";
import {
  loginUserValidation,
  signupUserValidation,
} from "../Middlewares/validation.Middleware.js";
import { signupUser, loginUser } from "../Controller/user.Controller.js";
// import all controllers
// import SessionController from './app/controllers/SessionController';

const userRoutes = new Router();

// Add userRoutes
userRoutes.post("/signup", signupUserValidation, signupUser);
userRoutes.post("/login", loginUserValidation, loginUser);
// userRoutes.get('/', SessionController.store);
// userRoutes.put('/', SessionController.store);
// userRoutes.delete('/', SessionController.store);

export default userRoutes;
