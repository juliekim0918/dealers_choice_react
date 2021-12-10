const { db, Animal, Trainer } = require("../db");
const express = require("express");
const app = express.Router();
const faker = require("faker");

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
  let newAnimal = {
    animal_type: faker.animal.type(),
    name: faker.name.lastName(),
    imageUrl: faker.image.animals(),
  };
  newAnimal["species"] = faker.animal[newAnimal.animal_type]();
  newAnimal["trainerId"] = randomNum();
  const animal = await Animal.create(newAnimal);
  res.send(animal);
});

app.delete("/animals/:id", async (req, res, next) => {
  const animal = await Animal.findByPk(req.params.id);
  animal.destroy();
  res.sendStatus(204);
});

app.get("/trainers", async (req, res, next) => {
  const trainers = await Trainer.findAll({ include: Animal });
  res.send(trainers);
});

app.get("/trainers/:id", async (req, res, next) => {
  const trainers = await Trainer.findByPk(req.params.id, { include: Animal });
  res.send(trainers);
});
