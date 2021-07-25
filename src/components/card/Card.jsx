import React from 'react';
import './Card.css';

const Card = ({num, txt}) => {
    return (
        <div className="card">
            <h1 className="num">{num}</h1>
            <div className="card-content">
                <p className="card-txt">{txt}</p>
            </div>
            <div className="card-shadow"></div>
        </div>
    )
}

export default Card
