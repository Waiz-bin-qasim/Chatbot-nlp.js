import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

export const createToken = (payload) => {
  return Jwt.sign(payload, process.env.privatekey, { expiresIn: "1d" });
};

export const verify = async () => {
  return Promise((reject, resolve) => {
    Jwt.verify(token, process.env.privatekey, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
};
