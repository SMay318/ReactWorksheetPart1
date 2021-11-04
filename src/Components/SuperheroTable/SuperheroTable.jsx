import React from 'react';

const SuperheroTable = (props) => {
    return ( 
<div>
    <table>
     <thead>
      <tr>
        <th>Super Hero Id</th>
        <th>Name</th>
        <th>Primary Ability</th>
        <th>Secondary Ability</th>
      </tr>
    </thead>
    {props.superheroTable.map((superheroTable) => (
    <tbody>
      <tr>
        <td>{superheroTable.superheroId}</td>
        <td>{superheroTable.name}</td>
        <td>{superheroTable.primaryAbility}</td>
        <td>{superheroTable.secondaryAbility}</td>
       </tr> 
    </tbody>
      ))}
  </table>
</div>

     );
   
}

export default SuperheroTable;