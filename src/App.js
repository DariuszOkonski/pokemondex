import React from 'react';
import data from './data/data';
import CardContainer from './CardContainer';


function App() {
  return (
    <div className="App">
      
      <CardContainer data={data}/>

    </div>
  );
}

export default App;