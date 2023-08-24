import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

export const tokenVerification = (req, res, next) => {
  const token = req.body.token || req.headers.token;
  if (token) {
    const decoded = jwt.verify(token, process.env.privatekey);
    if (decoded) {
      req.body = { ...decoded, ...req.body };
      next();
    } else {
      res.status(401).send("invalid token");
    }
  } else {
    res.status(401).send({ err: "Token not Provided" });
  }
};
