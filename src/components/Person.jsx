import React from 'react';


export default ({ name, id, deletePerson }) => (
  <div key={ id }>
   { id % 2 ? name : <strong>{name}</strong> }
   <button onClick= { () =>  deletePerson(id)  }>Delete</button>
  </div>
);