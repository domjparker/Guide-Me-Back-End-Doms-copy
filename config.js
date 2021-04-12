const dotenv = require('dotenv');

// Execution of config function on dotenv package to read .env and set env vars.
dotenv.config();

module.exports = {
  USER: process.env.USER, 
  PASS: process.env.PASS,
  SESSIONSECRET: process.env.SESSIONSECRET
}