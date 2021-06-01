import React from "react";
import "./App.css";
import Nav from "./Nav";
import Article from "./Article";
class App extends React.Component {
  render() {
    return (
      <div>
        <header>Вся правда о медведях</header>
        <div id="main">
          <Nav />
          <Article />
        </div>
      </div>
    );
  }
}

export default App;
