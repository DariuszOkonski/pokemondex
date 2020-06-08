import React from 'react';


const API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Card = (props) => {
    const {id, name, type, experience} = props.card;
    return ( 
        <div className="card">
            <h2 className="card__title">{name}</h2>
            <div className="card__img">
                <img src={`${API}${id}.png`} alt={name}/>
            </div>
            <p className="card__paragraph">Type: <span className="card__span">{type}</span></p>
            <p className="card__paragraph">Exp: <span className="card__span">{experience}</span></p>
        </div>
     );
}
 
export default Card;