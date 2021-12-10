import React from "react";
import AnimalCard from "./AnimalCard";
import Trainer from "./Trainer";

const InfoContainer = ({
  animals,
  selectedTrainer,
  selectTrainer,
  reset,
  addAnimal,
  deleteAnimal,
}) => {
  return (
    <div id="info-container">
      <h1>Welcome to the Tiger Prince Zoo directory</h1>
      <h3>Here you will find all you need to know about our animals</h3>
      <button onClick={() => addAnimal()}>Add an animal</button>
      {selectedTrainer.id ? (
        <Trainer selectedTrainer={selectedTrainer} reset={reset} />
      ) : (
        <div className="animal-cards-container">
          {animals.map((animal) => (
            <AnimalCard
              animal={animal}
              key={animal.id}
              selectTrainer={selectTrainer}
              selectedTrainer={selectedTrainer}
              deleteAnimal={deleteAnimal}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoContainer;
