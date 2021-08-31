import React from 'react';

const Card = (props) => {
  const cards=props.cards;
  //fala MAP
  let src="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-1024x682.jpg";
    return (
        <div className="card">
          <img src={src} className="card-img-top" alt="" srcset="" />
          <div className="card-body">
            <h5 class="card-tittle">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptatum eius commodi deleniti quis, explicabo optio, sit facere alias cupiditate minima eligendi maxime ullam sed, qui dicta nobis architecto repudiandae?</p>                        
          </div>
          <div className="boton">
            <a href="#" className="btn btn-primary">Fin Out More!</a>
          </div>
        </div>
      );
}
 
export default Card;