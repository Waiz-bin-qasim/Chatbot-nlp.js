import { chatbot } from "../chatbot/createChatbot.js";
import { chat_bot_logs } from "../Model/chat_bot_logs.js";

export const chatBot = (req, res) => {
  try {
    const payload = req.body;
    chatbot(payload.message)
      .then((response) => {
        console.log(response);
        chat_bot_logs
          .create({
            current_step: 3,
            user_name: payload.user_name,
            message: payload.message,
            phone_number: payload.phone_number,
          })
          .then((result) => {
            res.send({ ans: response });
          })
          .catch((err) => res.status(400).send({ err: err.errors[0].message }));
      })
      .catch((err) => res.status(400).send(err));
  } catch (err) {
    res.status(400).send(err);
  }
};
