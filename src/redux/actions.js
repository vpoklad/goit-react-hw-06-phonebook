import { types } from '../redux/types';

export function addContact(payload) {
  return { type: types.ADD_CONTACT, payload };
}
export function deleteContact(payload) {
  return { type: types.DELETE_CONTACT, payload };
}

export function setFilter(payload) {
  return { type: types.SET_FILTER, payload };
}
