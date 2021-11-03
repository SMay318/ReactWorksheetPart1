
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
      }
      
  }



    render(){
      return(
        <div>
          <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
          <NamesList listOfNames={this.state.names} />
        </div>
    )
  }
}
export default App;
