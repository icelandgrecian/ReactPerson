import React from 'react';
import Person from '../components/Person';

export default ({ people, deletePerson }) => {
  return (
    <ul>
      { 
        people.map(person => (
          <li key={ person.id }>
            <Person { ...person }  deletePerson = {deletePerson} />
          </li>
        ))
      }
    </ul>
  );
};