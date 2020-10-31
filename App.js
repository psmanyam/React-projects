import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends React.Component{

state={
persons:[
        {name:'surahmanyam',age:24},
        {name:'Gowri',age:22},
        {name:'Revathi',age:23}]

  }

  render(){
   return(
  <div className='App'>
  <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
   <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>

  </div>
  );

}
}

export default App;
