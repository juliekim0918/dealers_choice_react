const db = require("./db");
const { STRING } = db.Sequelize;

const Trainer = db.define("trainer", {
  first_name: {
    type: STRING,
    allowNull: false,
  },
  last_name: {
    type: STRING,
  },
  avatarUrl: {
    type: STRING,
  },
});


module.exports = Trainer;
