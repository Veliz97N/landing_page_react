import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Cards from "./Cards" 


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Jumbotron></Jumbotron>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;

