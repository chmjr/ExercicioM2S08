const { config } = require("dotenv");

config();

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  password: process.env.PASSWORDDB,
  username: process.env.USERNAMEDB,
  dialect: process.env.DIALECT,
  define: {
    underscored: true,
    underscoredAll: true,
  },
};
