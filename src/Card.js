import React from 'react';

const Card = (props) => {
  const cards = props.cards;
  return (
    cards.map((card) => (
      <div className="col-md-3">

        <div className="card" key={card.id}>
          <img src={card.src} className="card-img-top" alt="" srcset="" />
          <div className="card-body">
            <h5 class="card-tittle">{card.title}</h5>
            <p className="card-text">{card.text}</p>
          </div>
          <div className="boton">
            <a href="#" className="btn btn-primary">Fin Out More!</a>
          </div>
        </div>
      </div>

    )));
}

export default Card;