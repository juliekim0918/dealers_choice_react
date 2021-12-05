const { db, Animal, Trainer } = require("../db");
const app = require("express").Router();

module.exports = app;

app.get("/animals", async (req, res, next) => {
  const animals = await Animal.findAll({ include: Trainer });
  res.send(animals);
});

app.get("/trainers", async (req, res, next) => {
  const trainers = await Trainer.findAll({ include: Animal });
  res.send(trainers);
});

app.get("/trainers/:id", async (req, res, next) => {
  const trainers = await Trainer.findByPk(req.params.id, { include: Animal });
  res.send(trainers);
});
