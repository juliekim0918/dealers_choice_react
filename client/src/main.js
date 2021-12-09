import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Navbar from "./Navbar";
import InfoContainer from "./InfoContainer";
const app = document.querySelector("#app");

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      selectedTrainer: {},
    };
    this.selectTrainer = this.selectTrainer.bind(this);
    this.reset = this.reset.bind(this);
  }
  async componentDidMount() {
    const animals = (await axios.get("/api/animals")).data;
    this.setState({
      animals,
    });
  }

  componentDidUpdate() {
    console.log(this.state, "this is new state");
    console.log("component did update");
  }

  async selectTrainer(id) {
    const trainer = (await axios.get(`/api/trainers/${id}`)).data;
    this.setState({
      selectedTrainer: trainer,
    });
  }

  addAnimal = async () => {
    let newAnimal = {
      animal_type: faker.animal.type(),
      name: faker.name.lastName(),
      imageUrl: faker.image.animals(),
    };
    newAnimal["species"] = faker.animal[newAnimal.animal_type]();
    await axios.post("/api/animals", newAnimal);
    // const response = (await axios.post("/api/animals", newAnimal)).data;
    const animals = (await axios.get("/api/animals")).data;
    this.setState({
      animals,
    });
  };

  reset() {
    this.setState({
      selectedTrainer: {},
    });
  }

  render() {
    const { animals, selectedTrainer } = this.state;
    const { selectTrainer, reset } = this;
    return (
      <div id="main">
        <Navbar reset={reset} />
        <InfoContainer
          animals={animals}
          selectedTrainer={selectedTrainer}
          selectTrainer={selectTrainer}
          reset={reset}
          addAnimal={this.addAnimal}
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, app);
