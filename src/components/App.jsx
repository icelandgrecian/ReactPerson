import React from 'react';
import PeopleContainer from '../containers/PeopleContainer';
import AddPerson from '../containers/AddPersonContainer';

const App = () => (
  <div>
    <h1>Some People</h1>
    <PeopleContainer />
    <AddPerson />

    <p>
      <strong>Task 1</strong> - Update pupil list so users with even ids are in bold 
    </p>
    <p>
      <strong>Task 2</strong> - Add a delete button & action to each item in the list, using the redux flow. 
    </p>
  </div>
);

export default App;