import { chat_bot_logs } from "../Model/chat_bot_logs.model.js";

export const getStrepNumber = async (user_id) => {
  let response;
  try {
    response = await chat_bot_logs.findOne({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    return error;
  }
  return response.current_step;
};
