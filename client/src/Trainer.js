import React from "react";
import AnimalCard from "./AnimalCard";

const Trainer = ({ selectedTrainer, reset }) => {
  return (
    <div id="trainer-container">
      <div className="info">
        <h4 onClick={() => reset()}>← Go back</h4>
        <img src={selectedTrainer.avatarUrl} alt="" />
        <h2>
          {selectedTrainer.first_name} {selectedTrainer.last_name}
        </h2>
        <h3>Animals under {selectedTrainer.first_name}'s patronage:</h3>
        {selectedTrainer.animals.map((animal) => (
          <AnimalCard
            animal={animal}
            key={animal.id}
            selectedTrainer={selectedTrainer}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainer;
