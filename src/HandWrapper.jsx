import React from 'react';
import Card from './Card';

const HandWrapper = ({hasWon, cardArray, score}) => {
    const text = hasWon ? 'Winning Hand' : 'Losing Hand';

    return ( 
        <div>
            <h2>{text}</h2>
            <h3>Total Experience: {score}</h3>
            {
                cardArray.map(card => <Card key={card.id} card={card}/>)
            }
        </div>
     );
}
 
export default HandWrapper;