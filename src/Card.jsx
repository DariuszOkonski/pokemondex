import React from 'react';


const API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Card = (props) => {
    const {id, name, type, experience} = props.card;
    return ( 
        <div>
            <h2>{name}</h2>
            <img src={`${API}${id}.png`} alt={name}/>
        </div>
     );
}
 
export default Card;