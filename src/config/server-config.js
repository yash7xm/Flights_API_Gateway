const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

module.exports = {
  PORT: PORT,
  SALT_ROUNDS: SALT_ROUNDS,
};
