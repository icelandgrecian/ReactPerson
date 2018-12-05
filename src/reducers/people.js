import R from 'ramda';
import { actionTypes } from '../constants';

const initState = [
];

const people = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.ADD_PERSON:
        return R.append({
                id: action.id,
                name: action.name,
              }, state);
      case actionTypes.DELETE_PERSON:        
        return R.reject(person => person.id === action.personId, state);
      default:
        return state;
    }
};

export default people;