import { Categories } from "./categories.model.js";
import { Options } from "./Options.model.js";
import { subCategories } from "./subCategories.model.js";

Categories.hasMany(subCategories, {
  foreignKey: {
    name: "category_id",
  },
});
subCategories.belongsTo(Categories);

subCategories.hasMany(Options, {
  foreignKey: {
    name: "subCategory_id",
  },
});
Options.belongsTo(subCategories);

export { Categories, subCategories, Options };
