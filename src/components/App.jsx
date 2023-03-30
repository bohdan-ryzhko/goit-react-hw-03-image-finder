import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    searchQuery: "",
  }

  handleSubmit = ({ searchQuery }) => {
    this.setState({ searchQuery });
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
};
