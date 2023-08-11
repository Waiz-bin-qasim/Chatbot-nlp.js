import {
  Categories,
  Options,
  subCategories,
} from "./Model/Associations.model.js";

(async () => {
  const res = await subCategories.findAll({
    include: { model: Options, attributes: ["option_text"] },
  });
  console.log(res);
})();
