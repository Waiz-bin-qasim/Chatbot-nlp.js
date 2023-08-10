import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../Controller/category.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const categroiesRoutes = new Router();

// Add categroiesRoutes
categroiesRoutes.get("/", getCategory);
categroiesRoutes.post("/", addCategory);
categroiesRoutes.put("/:category_id", updateCategory);
categroiesRoutes.delete("/:category_id", deleteCategory);

export default categroiesRoutes;
