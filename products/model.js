const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  url: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  phone: Sequelize.INTEGER,
  email: Sequelize.STRING
});

module.exports = Product;
