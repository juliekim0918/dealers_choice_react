const { db, Animal, Trainer } = require("../server/db");
const faker = require("faker");

const randomNum = () => {
  return Math.floor(Math.random() * (15 - 1) + 1);
};

const seed = async () => {
  await db.sync({ force: true });

  const animals = new Array(30).fill("").map((_) => {
    const type = faker.animal.type();
    const species = faker.animal[type]();
    const name = faker.name.lastName();
    const imageUrl = faker.image.animals();
    return [type, species, name, imageUrl];
  });

  const trainers = new Array(15).fill("").map((_) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const avatarUrl = faker.internet.avatar();
    return [firstName, lastName, avatarUrl];
  });

  await Promise.all(
    trainers.map((trainer) => {
      return Trainer.create({
        first_name: trainer[0],
        last_name: trainer[1],
        avatarUrl: trainer[2],
      });
    })
  );
  const [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    a17,
    a18,
    a19,
    a20,
    a21,
    a22,
    a23,
    a24,
    a25,
    a26,
    a27,
    a28,
    a29,
    a30,
  ] = await Promise.all(
    animals.map((animal) => {
      return Animal.create({
        animal_type: animal[0],
        species: animal[1],
        name: animal[2],
        imageUrl: animal[3],
      });
    })
  );

  await Promise.all([
    a1.update({ trainerId: randomNum() }),
    a2.update({ trainerId: randomNum() }),
    a3.update({ trainerId: randomNum() }),
    a4.update({ trainerId: randomNum() }),
    a5.update({ trainerId: randomNum() }),
    a6.update({ trainerId: randomNum() }),
    a7.update({ trainerId: randomNum() }),
    a8.update({ trainerId: randomNum() }),
    a9.update({ trainerId: randomNum() }),
    a10.update({ trainerId: randomNum() }),
    a11.update({ trainerId: randomNum() }),
    a12.update({ trainerId: randomNum() }),
    a13.update({ trainerId: randomNum() }),
    a14.update({ trainerId: randomNum() }),
    a15.update({ trainerId: randomNum() }),
    a16.update({ trainerId: randomNum() }),
    a17.update({ trainerId: randomNum() }),
    a18.update({ trainerId: randomNum() }),
    a19.update({ trainerId: randomNum() }),
    a20.update({ trainerId: randomNum() }),
    a21.update({ trainerId: randomNum() }),
    a22.update({ trainerId: randomNum() }),
    a23.update({ trainerId: randomNum() }),
    a24.update({ trainerId: randomNum() }),
    a25.update({ trainerId: randomNum() }),
    a26.update({ trainerId: randomNum() }),
    a27.update({ trainerId: randomNum() }),
    a28.update({ trainerId: randomNum() }),
    a29.update({ trainerId: randomNum() }),
    a30.update({ trainerId: randomNum() }),
  ]);

  return Promise.all([Trainer.findAll(), Animal.findAll()]);
};

seed().catch((err) => {
  db.close();
  console.log(`
    
    Error seeding:
    ${err.message}

    ${err.stack}
    `);
});

module.exports = {
  randomNum,
  seed,
};
