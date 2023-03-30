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
    const normalizeSearchQuery = this.state.searchQuery.trim();
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={normalizeSearchQuery} />
      </div>
    );
  }
};
