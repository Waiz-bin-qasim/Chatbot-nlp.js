import { Categories } from "./categories.Model.js";
import { chat_bot_logs } from "./chat-bot-logs.Model.js";
import { Options } from "./options.Model.js";
import { subCategories } from "./sub-categories.model.js";
import { User } from "./user.Model.js";

Categories.hasMany(subCategories, {
  foreignKey: {
    name: "category_id",
    as: "options",
  },
});
subCategories.belongsTo(Categories);

subCategories.hasMany(Options, {
  foreignKey: {
    name: "subCategory_id",
    as: "options",
  },
});
Options.belongsTo(subCategories);

User.hasOne(chat_bot_logs, {
  foreignKey: { name: "user_id" },
});
chat_bot_logs.belongsTo(User);

export { Categories, subCategories, Options, User, chat_bot_logs };
