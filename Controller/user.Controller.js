import { createToken } from "../Helper/token.Helper.js";
import { User } from "../Model/associations.Model.js";
export const signupUser = async (req, res) => {
  const { user_name, password } = req.body;
  let response;
  try {
    const response = await User.create({ user_name, password });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
  return res.status(200).send(response);
};

export const loginUser = async (req, res) => {
  const { user_name, password } = req.body;
  let response;
  try {
    const user = await User.findOne({
      where: {
        user_name: user_name,
      },
    });
    if (user.password === password) {
      const token = createToken({ user_id: user.user_id });
      response = { message: "success", token };
    } else {
      return res.status(401).send("Incorrect Username or Password");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
  return res.status(200).send(response);
};
