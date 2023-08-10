import { Categories } from "./categories.model.js";
import { Steps } from "./step.model.js";
import { subCategories } from "./subCategories.model.js";

Categories.hasMany(subCategories, {
  foreignKey: {
    name: "category_id",
  },
});
subCategories.belongsTo(Categories);

Steps.hasMany(subCategories, {
  foreignKey: {
    name: "subCategory_id",
  },
});
subCategories.belongsTo(Steps);

export { Categories, subCategories, Steps };
