import React, { Component } from 'react';
import Card from './Card';
import HandWrapper from './HandWrapper';

class CardContainer extends Component {
    state = { 
        hand1: [],
        hand2: [],
        hand1Score: 0,
        hand2Score: 0,
     }
    
    componentDidMount() {
        const hand1 = [...this.props.data];
        const hand2 = this.splitArrays(hand1);

        const hand1Score = hand1.reduce((acc, item) => acc + item.experience, 0);
        const hand2Score = hand2.reduce((acc, item) => acc + item.experience, 0);

        this.setState({
            hand1,
            hand2,
            hand1Score,
            hand2Score
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
        const {hand1, hand2, hand1Score, hand2Score} = this.state;

        return ( 
            <div>
                <HandWrapper hasWon={hand1Score > hand2Score} cardArray={hand1} score={hand1Score} />
            </div>
         );
    }
}
 
export default CardContainer;