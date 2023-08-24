import { Router } from "express";
import {
  addSubCategories,
  deleteSubCategories,
  getSubCategories,
  updateSubCategories,
} from "../Controller/subCategory.Controller.js";
import { tokenVerification } from "../Middlewares/auth.Middleware.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const subCategoryRoute = new Router();

// Add subCategoryRoute
subCategoryRoute.get("/", getSubCategories);
subCategoryRoute.post("/:category_id/", tokenVerification, addSubCategories);
subCategoryRoute.put(
  "/:subcategory_id",
  tokenVerification,
  updateSubCategories
);
subCategoryRoute.delete(
  "/:subcategory_id",
  tokenVerification,
  deleteSubCategories
);

export default subCategoryRoute;
