// import { types } from '../redux/types';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    const existContact = state.some(
      el => el.name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (existContact) {
      alert(`this contact already exists`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [setFilter]: (state, { payload }) => (state = payload),
});

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
export default rootReducer;

// const contactReducer = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const existContact = state.some(
//         el => el.name.toLowerCase() === payload.name.toLowerCase(),
//       );
//       if (existContact) {
//         alert(`this contact already exists`);
//         return state;
//       } else {
//         return [...state, payload];
//       }
//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.SET_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
