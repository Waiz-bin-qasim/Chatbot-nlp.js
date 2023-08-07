import { chatbot } from "../chatbot/createChatbot.js";
// import { User } from "../Model/chat_bot_logs.js";

export const chatBot = async (req, res) => {
  try {
    const payload = req.body;
    const response = await chatbot(payload.message);
    console.log(response);
    res.send({ ans: response });
  } catch (err) {
    res.status(400).send(err);
  }
};
