import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../Controller/category.Controller.js";
import { tokenVerification } from "../Middlewares/auth.Middleware.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const categoriesRoutes = new Router();

// Add categoriesRoutes
categoriesRoutes.get("/", getCategory);
categoriesRoutes.post("/", addCategory);
categoriesRoutes.put("/:category_id", tokenVerification, updateCategory);
categoriesRoutes.delete("/:category_id", tokenVerification, deleteCategory);

export default categoriesRoutes;
