import express from "express";
import messageRoutes from "./Routes/message.Routes.js";
import categoriesRoutes from "./Routes/categories.Routes.js";
import subCategoryRoute from "./Routes/sub-categories.Routes.js";
import optionsRoutes from "./Routes/options.Routes.js";
import { chatBotInit } from "./helper/chat-bot.Helper.js";
import userRoutes from "./Routes/user.Routes.js";
import { expressRateLimit } from "./Config/express-rate-limit.js";

const app = express();
const port = 3000;

// middleWares
app.use(express.json());
app.use(expressRateLimit); //->To Avoid DDos

// Routes
app.use("/user", userRoutes);
app.use("/message", messageRoutes);
app.use("/categories", categoriesRoutes);
app.use("/subCategories", subCategoryRoute);
app.use("/options", optionsRoutes);

app.listen(port, async () => {
  await chatBotInit();
  console.log(`Example app listening on port ${port}!`);
});

// compression , express-rate-limit , CSRF
