import { Router } from "express";
import {
  addOptions,
  deleteOptions,
  getOptions,
  updateOptions,
} from "../Controller/options.Controller.js";
import { tokenVerification } from "../Middlewares/auth.Middleware.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const optionsRoutes = new Router();

// Add optionsRoutes
optionsRoutes.get("/", tokenVerification, getOptions);
optionsRoutes.post("/", tokenVerification, addOptions);
optionsRoutes.put("/", updateOptions);
optionsRoutes.delete("/", deleteOptions);

export default optionsRoutes;
