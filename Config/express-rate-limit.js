import { rateLimit } from "express-rate-limit";

const allowlist = [];

export const expressRateLimit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: "Too Many Requests",
  standardHeaders: true,
  //   to skip some ips
  skip: (request, response) => allowlist.includes(request.ip),
});
