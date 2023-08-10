import { Router } from "express";
import {
  addSteps,
  deleteSteps,
  getSteps,
  updateSteps,
} from "../Controller/Steps.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const stepRoutes = new Router();

// Add stepRoutes
stepRoutes.get("/", getSteps);
stepRoutes.post("/", addSteps);
stepRoutes.put("/", updateSteps);
stepRoutes.delete("/", deleteSteps);

export default stepRoutes;
