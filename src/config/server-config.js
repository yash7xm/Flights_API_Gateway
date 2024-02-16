const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_EXPIRY = process.env.JWT_EXPIRY;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  PORT: PORT,
  SALT_ROUNDS: SALT_ROUNDS,
  JWT_SECRET: JWT_SECRET,
  JWT_EXPIRY: JWT_EXPIRY,
};
