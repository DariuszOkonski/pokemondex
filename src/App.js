import React, { Component } from 'react';
import data from './data/data';
import CardContainer from './CardContainer';
import Loader from './Loader';

class App extends Component {
  state = { 
    isLoading: false
  }

  handleIsLoading = () => {
    const timeSpan = Math.floor(Math.random() * 1000) + 1000;

    this.setState({
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, timeSpan);
  }

  render() { 
    return ( 
      <div className="App">
      
        {
          this.state.isLoading
          ?
          <Loader/>
          :
          <CardContainer data={data} click={this.handleIsLoading} />          
        }



    </div>
     );
  }
}
 
export default App;