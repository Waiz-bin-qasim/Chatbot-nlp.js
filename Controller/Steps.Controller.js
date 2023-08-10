import { Steps } from "../Model/Associations.model.js";

export const getSteps = async (req, res) => {
  let steps;
  try {
    steps = await Steps.findAll({});
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  res.send(steps);
};
export const addSteps = async (req, res) => {
  let steps = req.body;
  try {
    steps = await Steps.create(steps, {
      fields: [
        "option_number",
        "step_number",
        "option_text",
        "subCategory_id",
        "next_step_id",
        "response",
      ],
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  res.send(steps);
};
export const updateSteps = async (req, res) => {};
export const deleteSteps = async (req, res) => {};
