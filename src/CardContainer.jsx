import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
    state = { 
        hand1: [],
        hand2: []
     }
    
    componentDidMount() {
        const hand1 = [...this.props.data];
        const hand2 = this.splitArrays(hand1);

        this.setState({
            hand1,
            hand2
        })
    }

    splitArrays = (hand) => {
        const tempArray = [];
        const halfArray = hand.length / 2;

        for (let index = 0; index < halfArray; index++) {
            const index = Math.floor(Math.random() * hand.length);
            tempArray.push(hand.splice(index, 1)[0]);
        }
        return tempArray;
    } 
    
    render() { 
        return ( 
            <div>
            {
                this.props.data.map(card => 
                    <Card
                        key={card.id}
                        card={card}
                    />)
            }
        </div>
         );
    }
}
 
export default CardContainer;