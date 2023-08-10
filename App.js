import express from "express";
import chatBotRoutes from "./Routes/chatbot.Routes.js";
import categroiesRoutes from "./Routes/Categories.Routes.js";
import subCategoryRoute from "./Routes/subCategories.Routes.js";
import stepRoutes from "./Routes/Steps.Routes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/message", chatBotRoutes);
app.use("/categories", categroiesRoutes);
app.use("/subCategories", subCategoryRoute);
app.use("/step", stepRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
