import http from "./httpService";

export const getContacts = () => {
  return http.get("http://localhost:8080/api/users");
};

export const getContact = (contactId) => {
  return http.get(`http://localhost:8080/api/users/${contactId}`);
};

export const saveContact = (contact) => {
  return http.post("http://localhost:8080/api/add");
};

export const editContact = (contactId, contact) => {
  return http.put(
    `http://localhost:8080/api/update/update/${contactId}`,
    contact
  );
};

export const deleteContact = (contactId) => {
  return http.delete(`http://localhost:8080/api/delete/${contactId}`);
};
