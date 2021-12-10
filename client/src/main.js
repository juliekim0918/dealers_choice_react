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
    const response = (await axios.post("/api/animals")).data;
    // const response = (await axios.post("/api/animals", newAnimal)).data;
    const animals = (await axios.get("/api/animals")).data;
    this.setState({
      animals,
    });
  };

  deleteAnimal = async (id) => {
    const animal = await axios.delete(`/api/animals/${id}`);
    this.setState({
      animals: this.state.animals.filter((animal) => animal.id !== id),
    });
  };

  reset() {
    this.setState({
      selectedTrainer: {},
    });
  }

  render() {
    const { animals, selectedTrainer } = this.state;
    const { selectTrainer, reset, deleteAnimal, addAnimal } = this;
    return (
      <div id="main">
        <Navbar reset={reset} />
        <InfoContainer
          animals={animals}
          selectedTrainer={selectedTrainer}
          selectTrainer={selectTrainer}
          reset={reset}
          addAnimal={addAnimal}
          deleteAnimal={deleteAnimal}
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, app);
