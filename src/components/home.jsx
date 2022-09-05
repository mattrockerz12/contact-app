import React, { useState } from "react";
import TodoForm from "./todoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  return (
    <>
      <TodoForm data={data} setData={setData} />
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
          <tr>
            <td>1</td>
            <td>Maria Anders</td>
            <td>maria@test.com</td>
            <td>030-0074321</td>
            <td>
              <div className="btn-group">
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faPenSquare} />
                </button>
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Antonio Moreno</td>
            <td>antonio@gmail.com</td>
            <td>(5) 555-3932</td>
            <td>
              <div className="btn-group">
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faPenSquare} />
                </button>
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Thomas Hardy</td>
            <td>thomas@yahoo.com</td>
            <td>(171) 555-7788</td>
            <td>
              <div className="btn-group">
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faPenSquare} />
                </button>
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Christina Berglund</td>
            <td>christina@email.com</td>
            <td>0921-123465</td>
            <td>
              <div className="btn-group">
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faPenSquare} />
                </button>
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;
