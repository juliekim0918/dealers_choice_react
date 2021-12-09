const { db, Animal, Trainer } = require("../db");
const express = require("express");
const app = express.Router();

const randomNum = () => {
  return Math.floor(Math.random() * (15 - 1) + 1);
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;

app.get("/animals", async (req, res, next) => {
  const animals = await Animal.findAll({
    include: Trainer,
    order: [["createdAt", "DESC"]],
  });
  res.send(animals);
});

app.post("/animals", async (req, res, next) => {
  const newAnimal = await Animal.create({
    ...req.body,
    trainerId: randomNum(),
  });
  res.send(newAnimal);
});

app.get("/trainers", async (req, res, next) => {
  const trainers = await Trainer.findAll({ include: Animal });
  res.send(trainers);
});

app.get("/trainers/:id", async (req, res, next) => {
  const trainers = await Trainer.findByPk(req.params.id, { include: Animal });
  res.send(trainers);
});
