import { actionTypes }from '../constants'

let id = -1;

export const addPerson = (name) => {
  return {
    type: actionTypes.ADD_PERSON,
    name,
    id: id++
  }
}

export const deletePerson = (id) => {
  return {
    type: actionTypes.DELETE_PERSON,
    personId: id
  }
}