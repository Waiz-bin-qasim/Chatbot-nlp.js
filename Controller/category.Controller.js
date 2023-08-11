import { Categories, subCategories } from "../Model/Associations.model.js";

export const getCategory = async (req, res) => {
  let categories;
  try {
    categories = await Categories.findAll({
      include: { model: subCategories },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  res.send(categories);
};

export const addCategory = async (req, res) => {
  const categories = req.body;
  console.log(categories);
  try {
    categories = await Categories.create(categories, {
      fields: ["category_name"],
    });
  } catch (error) {
    console.log(error.errors);
    return res.status(400).send({ err: error });
  }
  res.send(categories);
};

export const updateCategory = (req, res) => {};
export const deleteCategory = (req, res) => {};
