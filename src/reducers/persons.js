import * as types from '../actions/types';

const initialState = {
  data: [],
  loaded: false,
  currentId: -1,
  show: false,
  searchText: '',
};

export default function persons(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PERSONS:
      return {
        ...state,
        data: [...action.payload],
        loaded: true,
        currentId: -1,
      };
    case types.ADD_PERSON:
      return { ...state, data: [...state.data, action.payload] };
    case types.REMOVE_PERSON:
      return {
        ...state,
        data: state.data.filter((person) => person._id != action.payload),
      };
    case types.EDIT_PERSON:
      return {
        ...state,
        show: true,
        currentId: action.payload,
      };
    case types.SHOW_MODAL:
      return { ...state, show: true };
    case types.HIDE_MODAL:
      return { ...state, show: false, currentId: -1 };
    case types.SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
}
