import { Router } from "express";
import {
  addOptions,
  deleteOptions,
  getOptions,
  updateOptions,
} from "../Controller/Options.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const optionsRoutes = new Router();

// Add optionsRoutes
optionsRoutes.get("/", getOptions);
optionsRoutes.post("/", addOptions);
optionsRoutes.put("/", updateOptions);
optionsRoutes.delete("/", deleteOptions);

export default optionsRoutes;
