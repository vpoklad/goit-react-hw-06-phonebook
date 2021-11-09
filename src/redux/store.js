import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactReducer = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return [...state, payload];

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  return state;
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
