import { Categories } from "../Model/categories.model.js";
import { chat_bot_logs } from "../Model/chat_bot_logs.model.js";
import { getStrepNumber } from "../helper/getStepNumber.js";
import {
  responseForStepFour,
  responseForStepThree,
  responseForStepTwo,
} from "../helper/messageResponse.js";

export const chatBot = async (req, res) => {
  const { message, user_id } = req.body;
  let step_number, response;
  try {
    //if user already exist in the logs
    if (user_id) {
      step_number = await getStrepNumber(user_id);
      switch (step_number) {
        case 1:
          response = await responseForStepTwo(message);
          break;
        case 2:
          response = await responseForStepThree(message);
          break;
        case 3:
          response = await responseForStepFour(message);
          break;
        default:
          break;
      }
    } else {
      //create user if does not exist
      const log = await chat_bot_logs.create({ current_step: 1 });
      const response = await Categories.findAll({
        attributes: ["category_name"],
      });
    }
  } catch (err) {
    return res.status(400).send(err);
  }
  return res.send(response);
};
