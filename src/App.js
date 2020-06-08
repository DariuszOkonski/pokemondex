import React, { Component } from 'react';
import data from './data/data';
import CardContainer from './CardContainer';
import Loader from './Loader';

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
          <Loader/>
          :
          <CardContainer data={data} click={this.handleIsLoading} />          
        }



    </div>
     );
  }
}
 
export default App;