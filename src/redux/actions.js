import { createAction } from '@reduxjs/toolkit';
// import { types } from '../redux/types';

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/del');
export const setFilter = createAction('filter/set');

// export function addContact(payload) {
//   return { type: types.ADD_CONTACT, payload };
// }
// export function deleteContact(payload) {
//   return { type: types.DELETE_CONTACT, payload };
// }

// export function setFilter(payload) {
//   return { type: types.SET_FILTER, payload };
// }
