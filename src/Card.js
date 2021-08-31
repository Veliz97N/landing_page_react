import React from 'react';

const Card = () => {
    return (
        <div className="card">
          <img src="../src/fotos/foto_veliz.jpg" alt="fotomia" srcset="../src/" />
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