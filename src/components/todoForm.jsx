import React from "react";

const TodoForm = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

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
                    value={data.name}
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
                    value={data.email}
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
                value={data.contact}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
