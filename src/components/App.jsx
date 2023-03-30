import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    searchQuery: "",
  }

  handleSubmit = ({ searchQuery }) => {
    this.setState({ searchQuery });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <Searchbar perPage={this.state.perPage} onSubmit={this.handleSubmit} />
        <ImageGallery
          searchQuery={searchQuery.trim()}
        />
      </div>
    );
  }
};
