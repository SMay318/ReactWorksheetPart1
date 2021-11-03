import React from 'react';

const NamesList = (props) => {
    
    
    
    
    
 return ( 
        <div>
           <ul>
                {props.listOfNames.map((listOfNames) => (
                    <li>{listOfNames}</li>
                ))}
            </ul>
        </div>
     );
}

export default NamesList;