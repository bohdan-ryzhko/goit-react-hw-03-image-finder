import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  handleSubmit = data => {
    console.log(data);
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
      </>
    );
  }
};
