import * as types from './types';
import axios from 'axios';

const loadPersons = (persons) => ({
  type: types.LOAD_PERSONS,
  payload: persons.data,
});
export const fetchPersons = () => {
  return async (dispatch) => {
    let persons = await axios.get('/persons');
    dispatch(loadPersons(persons));
  };
};

// const addPerson = (person) => ({
//   type: types.ADD_PERSON,
//   payload: person,
// });

// export const register = (person) => {
//   return async (dispatch) => {
//     let p = await axios.post('/persons', person);
//     dispatch(addPerson(p));
//   };
// };

export const register = (person) => {
  return async (dispatch, getState) => {
    if (getState().persons.currentId !== -1) {
      await axios.patch('/persons/' + person._id, person);
    } else {
      await axios.post('/persons', person);
    }
    dispatch(fetchPersons());
  };
};

const removePerson = (id) => ({
  type: types.REMOVE_PERSON,
  payload: id,
});

export const deletePerson = (id) => {
  return async (dispatch) => {
    let p = await axios.delete('/persons/' + id);
    dispatch(removePerson(id));
  };
};

// const updatePerson = (p) => ({
//   type: types.UPDATE_PERSON,
//   payload: p,
// });

// export const editPerson = (id) => {
//   return async (dispatch) => {
//     let p = await axios.patch('/persons/' + id);
//     dispatch(fetchPersons());
//   };
// };

export const editPerson = (id) => {
  return {
    type: types.EDIT_PERSON,
    payload: id,
  };
};

export const onAdd = () => {
  return {
    type: types.SHOW_MODAL,
  };
};

export const onClose = () => {
  return {
    type: types.HIDE_MODAL,
  };
};

export const searchText = (e) => {
  return {
    type: types.SEARCH_TEXT,
    payload: e.target.value,
  };
};
