import React from "react";

const AnimalCard = ({
  animal,
  selectedTrainer,
  selectTrainer,
  deleteAnimal,
}) => {
  return (
    <div className="animal-card">
      <img src={animal.imageUrl} alt="" />
      <div className="info">
        <h2>{animal.name}</h2>
        <p>
          <span id="type" className="badge">
            {animal.animal_type}
          </span>
          <span id="species" className="badge">
            {animal.species}
          </span>
        </p>
        <button onClick={() => deleteAnimal(animal.id)}>
          Delete this animal
        </button>
      </div>
      {selectedTrainer.id || !animal.trainer.id ? (
        ""
      ) : (
        <div className="trainer-info">
          <span>Trainer</span>
          <h2 onClick={() => selectTrainer(animal.trainer.id)}>
            {animal.trainer.first_name} {animal.trainer.last_name}
          </h2>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;
