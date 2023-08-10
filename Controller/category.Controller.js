import { Categories, subCategories } from "../Model/Associations.model.js";

export const getCategory = async (req, res) => {
  let categories;
  try {
    categories = await Categories.findAll({
      include: { model: subCategories },
    });
    res.send(categories);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const addCategory = async (req, res) => {
  const categories = req.body;
  console.log(categories);
  try {
    categories = await Categories.create(categories, {
      fields: ["category_name"],
    });
    res.send(categories);
  } catch (error) {
    console.log(error.errors);
    res.status(400).send({ err: error });
  }
};

export const updateCategory = (req, res) => {};
export const deleteCategory = (req, res) => {};
