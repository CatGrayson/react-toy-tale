import React, { Component } from 'react';
import './ToyLikes.js'


const ToyCard = (props) => {

        return (
            <div>
            <div className="card">
                <div className="image">
                <img className= "img" src={props.toy.image} />
                </div>
            <div className="content">
            <a className="header">{props.toys.name}</a>
            
            </div>
            </div>
            </div>
        )
}

export default ToyCard;