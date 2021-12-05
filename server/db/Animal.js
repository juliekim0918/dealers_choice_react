const db = require("./db");
const { STRING } = db.Sequelize;

const Animal = db.define("animal", {
  animal_type: {
    type: STRING,
    allowNull: false,
  },
  species: {
    type: STRING,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    defaultValue: "http://placeimg.com/640/480/animals",
  },
});

module.exports = Animal;
