import { Router } from "express";
import { chatBot } from "../Controller/chatBot.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const chatBotRoutes = new Router();

// Add chatBotRoutes
chatBotRoutes.post("/", chatBot);
// chatBotRoutes.get('/', SessionController.store);
// chatBotRoutes.put('/', SessionController.store);
// chatBotRoutes.delete('/', SessionController.store);

export default chatBotRoutes;
