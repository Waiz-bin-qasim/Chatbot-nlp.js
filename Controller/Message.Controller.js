import { Categories } from "../Model/categories.Model.js";
import { chat_bot_logs } from "../Model/chat-bot-logs.Model.js";
import { getStepNumber } from "../helper/step-number.Handler.js";
import { messageHandler } from "../helper/message.Helper.js";

export const chatBot = async (req, res) => {
  const { message, user_id } = req.body;
  let response, step_number;
  try {
    //if user already exist in the logs
    step_number = await getStepNumber(user_id);
    if (user_id && step_number) {
      response = await messageHandler(message, user_id, step_number);
    } else {
      //create user if does not exist
      const log = await chat_bot_logs.create({ current_step: 1 });
      response = await Categories.findAll({
        attributes: ["category_name"],
      });
      response = { options: response, user_id: log.user_id };
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
  return res.send(response);
};
