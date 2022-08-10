import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ aliens: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { aliens, searchfield } = this.state;
    const filteredAliens = aliens.filter((alien) => {
      return alien.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !aliens.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">COOLESTALIENS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList aliens={filteredAliens} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
