import React from 'react';

const AddPerson = ({ addPerson }) => {

  let input;
  console.log(addPerson)
  const onClick = e => {
    e.preventDefault();
    addPerson(input.value);
    input.value = '';
  };

  return (
    <label>
      <input ref={ node => (input = node) } />
      <button onClick={onClick}>Add Person</button>
    </label>
  )
};

export default AddPerson;