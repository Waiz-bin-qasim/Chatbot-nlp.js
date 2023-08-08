import { Sequelize } from "sequelize";
const sequelize = new Sequelize("chatbot", "root", "0321", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize.sync(true);
export default sequelize;
