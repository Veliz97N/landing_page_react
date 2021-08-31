import React from 'react'
import Card from './Card';
const Cards = (props) => {
    const cards = props.cards;
    return (
        <div id="#cards" className="container px-0">
            <div className="row">
                <Card cards={cards}></Card>
            </div>
        </div>
    )
};
export default Cards
