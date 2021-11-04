
import React, { Component } from 'react';
import DisplayName from './Components/DisplayName/DisplayName';
import NamesList from './Components/NamesList/NamesList';
import AlertUser from './Components/AlertUser/AlertUser';
import SuperheroTable from './Components/SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './Components/SuperheroCreateForm/SuperheroCreateForm';

class App extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        firstName: 'Reggie',
        lastName: 'White',
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
        superheroes: [
          {
              superheroId: 1,
              name: 'Batman',
              primaryAbility: 'Wealthy',
              secondaryAbility: 'Rich'
          },
          {
              superheroId: 2,
              name: 'Superman',
              primaryAbility: 'Super strength',
              secondaryAbility: 'Fly'
          },
          {
              superheroId: 3,
              name: 'Spiderman',
              primaryAbility: 'Spider senses',
              secondaryAbility: 'Shoots web'
          }
      ]
        
      }
  }

alertMessage= () => {
  alert("devCodeCamp");
}


createSuperhero = (newSuperhero) => {
  newSuperhero.superheroId = this.state.superheroes.length + 1
  this.state.superheroes.push(newSuperhero);
  this.setState({
     superhero: this.state.superheroes.length + 1,
  });

}
    render(){
      return(
        <div>
          <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
          <NamesList listOfNames={this.state.names} />
          <AlertUser alert={this.alertMessage}/>
          <SuperheroCreateForm createNewSuperhero={this.createSuperhero}/>
          <SuperheroTable superheroTable={this.state.superheroes}/>
        </div>
    )
  }
}
export default App;
