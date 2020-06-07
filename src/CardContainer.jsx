import React from 'react';
import Card from './Card';

const CardContainer = ({data}) => {
    console.log(data)

    return (  
        <div>
            {
                data.map(card => 
                    <Card
                        key={card.id}
                        card={card}
                    />)
            }
        </div>
    );
}
 
export default CardContainer;