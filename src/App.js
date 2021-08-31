import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Cards from "./Cards" 
import Footer from "./footer"


function App() {
  let cards_list=[{src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",title: "Card Title",text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit enim sed metus egestas euismod. Sed nisl mi, euismod id sapien ac, suscipit rhoncus enim.",id: 1},
                  {src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",title: "Card Title",text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit enim sed metus egestas euismod. Sed nisl mi, euismod id sapien ac, suscipit rhoncus enim.",id: 2},
                  {src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",title: "Card Title",text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit enim sed metus egestas euismod. Sed nisl mi, euismod id sapien ac, suscipit rhoncus enim.",id: 3},
                  {src:"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg",title: "Card Title",text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit enim sed metus egestas euismod. Sed nisl mi, euismod id sapien ac, suscipit rhoncus enim.",id: 4}
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

