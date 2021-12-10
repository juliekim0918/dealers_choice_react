const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_spa_db",
  { logging: false }
);

module.exports = db;
