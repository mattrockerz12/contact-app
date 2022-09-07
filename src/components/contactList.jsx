import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./contactForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, removeContact } from "../redux/actions/contactActions";
import { Link } from "react-router-dom";

const ContactList = ({ data, setData }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleContactEditClick = (id) => {
    const populateContact = contacts.find((contact) => contact.id === id);
    setData({ ...populateContact });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(removeContact(id));
    }
  };

  return (
    <>
      <ContactForm data={data} setData={setData} />
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.contact}</td>
              <td>
                <div className="btn-group">
                  <Link
                    className="btn btn-success"
                    role="button"
                    to={`/details/${contact.id}`}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleContactEditClick(contact.id)}
                  >
                    <FontAwesomeIcon icon={faPenSquare} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(contact.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
