import React from 'react';
import Card from './Card';

const HandWrapper = ({hasWon, cardArray, score}) => {
    const text = hasWon ? 'Winning Hand' : 'Losing Hand';
    const title = hasWon ? '__title-won' : '__title-lost';

    return ( 
        <div className="hand-wrapper">
            <h2 className={`hand-wrapper${title} hand-wrapper__title`}>{text}</h2>
            <h3 className="hand-wrapper__score">Total Experience: {score}</h3>

            <div className="hand-wrapper__card-container">
                {
                    cardArray.map(card => <Card key={card.id} card={card}/>)
                }
            </div>
        </div>
     );
}
 
export default HandWrapper;