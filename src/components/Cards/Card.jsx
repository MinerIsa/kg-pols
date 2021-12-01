import React from 'react';
import { FaCentercode } from 'react-icons/fa';
import styles from '../Cards/card-style.css';


const Card = (props) => {
    return(
            <div className="card mt-3 mb-3 rounded-3 shadow-sm">
                <div className="overflow">
                    <img className="card-img-top" src={props.imgsrc} alt='kyrgyz boy standing next to a yurt'/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                    {props.text}    
                    </p>
                    <a className="btn btn-outline-primary" href="#">Learn Now</a>
                </div>
        </div>
    );
}

export default Card;