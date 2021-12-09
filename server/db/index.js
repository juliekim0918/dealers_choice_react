const db = require("./db");
const Animal = require("./Animal");
const Trainer = require("./Trainer");
Animal.belongsTo(Trainer);
Trainer.hasMany(Animal);

module.exports = {
  db,
  Animal,
  Trainer,
};
