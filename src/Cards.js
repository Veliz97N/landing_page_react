import React from 'react'
import Card from './Card';

function Cards() {
    return (
        <div className="container px-0">
            <div className="row">
                <div className="col-md-3">
                    <Card></Card>
                </div>
                <div className="col-md-3">
                    <Card></Card>
                </div>
                <div className="col-md-3">
                    <Card></Card>
                </div>
                <div className="col-md-3">
                    <Card></Card>
                </div>

            </div>
        </div>
        
    )
}

export default Cards
