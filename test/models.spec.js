const { db, Animal, Trainer } = require("../server/db");
// const { seed } = require("../bin/seed");
const { expect } = require("chai");

describe("Models", () => {
  let animals;
  let trainers;
  beforeEach(async () => {
    [animals, trainers] = await Promise.all([
      Animal.findAll({ include: Trainer }),
      Trainer.findAll({ include: Animal }),
    ]);
  });
  describe("Trainer", () => {
    it("has at least one row", () => {
      expect(trainers).to.have.lengthOf.above(1);
    });
    it("shows the animals trainer has under patronage", () => {
      trainers.map((trainer) => expect(trainer.animals).to.be.an("array"));
    });
  });
  describe("Animal", () => {
    it("has at least one row", () => {
      expect(animals.length).to.be.at.least(1);
    });
    it("every animal has a trainer", () => {
        animals.map((animal) => expect(animal.trainer.id).to.not.equal(null));
    });
    it("shows the animal's trainer", () => {
      animals.map((animal) => expect(animal.trainer.id).to.be.ok);
    });
  });
});
