import {
  deleteContact,
  editContact,
  getContact,
  getContacts,
  saveContact,
} from "../../services/contactService";
import * as types from "./actionTypes";

export const fetchContacts = () => async (dispatch) => {
  const { data } = await getContacts();

  dispatch({
    type: types.FETCH_CONTACTS_SUCCESS,
    payload: data,
  });
};

export const fetchContact = (id) => async (dispatch) => {
  const { data } = await getContact(id);

  dispatch({
    type: types.FETCH_CONTACT_SUCCESS,
    payload: data,
  });
};

export const createContact = (contact) => async (dispatch) => {
  const { data } = await saveContact(contact);

  dispatch({
    type: types.CREATE_CONTACT_SUCCESS,
    payload: data,
  });
};

export const updateContact = (id, contact) => async (dispatch) => {
  const { data } = await editContact(id, contact);

  dispatch({
    type: types.UPDATE_CONTACT_SUCCESS,
    payload: data,
  });
};

export const removeContact = (id) => async (dispatch) => {
  await deleteContact(id);

  dispatch({
    type: types.REMOVE_CONTACT_SUCCESS,
    payload: id,
  });
};
