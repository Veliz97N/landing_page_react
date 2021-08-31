import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Cards from "./Cards" 
import Footer from "./footer"


function App() {
  let cards_list=[{src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",Card_tittle: "Card Title",Card_text: "L"},
                  {src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",Card_tittle: "Card Title",Card_text: "L"},
                  {src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",Card_tittle: "Card Title",Card_text: "L"},
                  {src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",Card_tittle: "Card Title",Card_text: "L"}
                  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Jumbotron></Jumbotron>
        <Cards cards={cards_list}></Cards>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

