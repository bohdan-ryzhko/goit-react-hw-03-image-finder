import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    searchQuery: "",
    perPage: 12,
  }

  handleSubmit = ({ searchQuery }) => {
    this.setState({ searchQuery });
  }

  onIncrementPage = ({ perPage }) => {
    this.setState({ perPage });
  }

  render() {
    const normalizeSearchQuery = this.state.searchQuery.trim();
    return (
      <div className="App">
        <Searchbar perPage={this.state.perPage} onSubmit={this.handleSubmit} />
        <ImageGallery
          incrementPage={this.onIncrementPage}
          perPage={this.state.perPage}
          searchQuery={normalizeSearchQuery}
        />
      </div>
    );
  }
};
