const { expect } = require("chai");
const { Resolver } = require("enhanced-resolve");
const { db, Animal, Trainer } = require("../server/db");
const app = require("supertest")(require("../server/"));

describe("routes", () => {
  describe("/api/animals", () => {
    describe("GET /api/animals", () => {
      let response;
      beforeEach(async () => {
        response = await app.get("/api/animals");
      });
      it("returns all animals with seeded data", async () => {
        expect(response.status).to.equal(200);
        expect(response.body.length).to.be.at.least(30);
      });
      it("returns animals with info about the animals trainer", () => {
        expect(response.body[0].trainer).to.be.ok;
      });
    });
    describe("POST /api/animals", () => {
      let response;
      let newAnimal;
      newAnimal = {
        animal_type: "lion",
        species: "Masai Lion",
        name: "uniqueName",
        imageUrl: "http://placeimg.com/640/480/animals",
        trainerId: 1,
      };
      async function addAnimal() {
        await app.post("/api/animals", newAnimal);
      }
      it("post", async function () {
        await addAnimal();
        const animals = await Animal.findAll({ where: { name: "uniqueName" } });
        console.log(animals);
      });
    });
  });
  describe("/api/trainers", () => {
    describe("GET /api/trainers", () => {
      it("returns all the trainers", async () => {
        const response = await app.get("/api/trainers");
        expect(response.status).to.equal(200);
        expect(response.body.length).to.be.at.least(10);
      });
      it("returns trainers with info about the animals theyre training", async () => {
        const response = await app.get("/api/trainers");
        expect(response.body[0].animals).to.be.ok;
      });
    });
  });
});
