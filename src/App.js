
import React, { Component } from 'react';
import DisplayName from './Components/DisplayName/DisplayName';
import NamesList from './Components/NamesList/NamesList';
import AlertUser from './Components/AlertUser/AlertUser';

class App extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        firstName: 'Reggie',
        lastName: 'White',
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
        alert: this.alertMessage,
        superheroes = [
          {
              superheroId: 1,
              name: 'Batman',
              primaryAbility: 'Wealthy',
              secondarAbility: 'Rich'
          },
          {
              superheroId: 2,
              name: 'Superman',
              primaryAbility: 'Super strength',
              secondarAbility: 'Fly'
          },
          {
              superheroId: 3,
              name: 'Spiderman',
              primaryAbility: 'Spider senses',
              secondarAbility: 'Shoots web'
          }
      ]
        
      }
  }

alertMessage= () => {
  alert("devCodeCamp");
}

    render(){
      return(
        <div>
          <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
          <NamesList listOfNames={this.state.names} />
          <AlertUser alert={this.state.alert}/>
        </div>
    )
  }
}
export default App;
