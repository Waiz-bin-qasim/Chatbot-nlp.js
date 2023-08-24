import { ExpressValidator, body, validationResult } from "express-validator";

export const checkError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).send({ errors });
    return;
  } else {
    return next();
  }
};

export const signupUserValidation = [
  body("user_name").exists().isString().withMessage("Invalid username type"),
  body("password").exists().isString().withMessage("Invalid password type"),
  checkError,
];

export const loginUserValidation = [
  body("user_name").exists().isString().withMessage("Invalid username type"),
  body("password").exists().isString().withMessage("Invalid password type"),
  checkError,
];
