import {
  Categories,
  Options,
  subCategories,
} from "./Model/Associations.model.js";

(async () => {
  const res = await Categories.findAll({
    include: {
      model: subCategories,
      include: {
        model: Options,
      },
    },
  });
  console.log(Object.keys(res.dataValues));
})();
