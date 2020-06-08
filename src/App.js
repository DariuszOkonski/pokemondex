import React, { Component } from 'react';
import data from './data/data';
import CardContainer from './CardContainer';

class App extends Component {
  state = { 
    isLoading: true
  }

  handleIsLoading = () => {
    console.log('Handle is loading')
  }

  render() { 
    return ( 
      <div className="App">
      
        {
          this.state.isLoading
          ?
          <h1>IsLoading</h1>
          :
          <CardContainer data={data} click={this.handleIsLoading} />          
        }



    </div>
     );
  }
}
 
export default App;