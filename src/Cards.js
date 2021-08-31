import React from 'react'
import Card from './Card';


const Cards =(props)=>{
    const cards = props.cards;
    return (
        <div id= "#cards" className="container px-0">
            <div className="row">
                <div className="col-md-3">
                    <Card cards={cards}></Card>
                </div>
                <div className="col-md-3">
                    <Card cards={cards}></Card>
                </div>
                <div className="col-md-3">
                    <Card cards={cards}></Card>
                </div>
                <div className="col-md-3">
                    <Card cards={cards}></Card>
                </div>

            </div>
        </div>
        
    )
};

export default Cards
