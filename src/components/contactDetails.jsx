import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContact } from "../services/contactService";

const ContactDetails = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getContact(id);
        setContact(data);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          navigate("/not-found");
        }
      }
    })();
  }, [id, navigate]);

  const handleClickToBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>ID: {contact.id}</div>
      <div>Name: {contact.name}</div>
      <div>Email: {contact.email}</div>
      <div>Contact: {contact.contact}</div>
      <br />
      <div className="btn btn-primary" onClick={handleClickToBack}>
        Back
      </div>
    </>
  );
};

export default ContactDetails;
