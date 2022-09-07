import http from "./httpService";

const apiEndpoint = "http://localhost:8000/api/contacts";

const contactUrl = (id) => {
  return `${apiEndpoint}/${id}`;
};

export const getContacts = () => {
  return http.get(apiEndpoint);
};

export const getContact = (contactId) => {
  return http.get(contactUrl(contactId));
};

export const saveContact = (contact) => {
  return http.post(apiEndpoint, contact);
};

export const editContact = (contactId, contact) => {
  return http.put(contactUrl(contactId), contact);
};

export const deleteContact = (contactId) => {
  return http.delete(contactUrl(contactId));
};
