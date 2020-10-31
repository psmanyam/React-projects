import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends React.Component{

  render(){
   return(
  <div className='App'>
  <Person name='subrahmanyam'/>

  </div>
  );

}
}

export default App;

