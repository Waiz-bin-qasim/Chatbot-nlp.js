import {
  Categories,
  Options,
  subCategories,
} from "../Model/Associations.model.js";

export const responseForStepTwo = async (message) => {
  let res;
  try {
    const res = await Categories.findAll({
      where: { category_Name: message },
      include: { model: subCategories },
    });
  } catch (error) {
    return error;
  }
  return res;
};

export const responseForStepThree = async (message) => {
  let res;
  try {
    const res = await subCategories.findAll({
      where: { category_Name: message },
      include: [{ model: Options }],
    });
  } catch (error) {
    return error;
  }
  return res;
};

export const responseForStepFour = async (message) => {
  let res;
  try {
    const res = await Options.findOne({
      where: { option_text: message },
      include: ["response"],
    });
  } catch (error) {
    return error;
  }
  return res;
};
