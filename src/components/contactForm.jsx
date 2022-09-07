import React from "react";
import { createContact, updateContact } from "../redux/actions/contactActions";
import { useDispatch } from "react-redux";

const ContactForm = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id) {
      dispatch(updateContact(data.id, data));
    } else {
      dispatch(createContact(data));
    }

    //console.log(data);

    setData({
      name: "",
      email: "",
      contact: "",
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <div className="form-outline">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={data.name}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <div className="form-outline">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    defaultValue={data.email}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="contact">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                defaultValue={data.contact}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <button className="btn btn-primary" type="submit">
                {data.id ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
