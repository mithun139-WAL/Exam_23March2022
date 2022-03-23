/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AddHobby() {
  const [hobbies, setHobbies] = useState([
    {
      name: 'Watching Movies',
      description: 'All Genre movies',
      doc: '2000-08-01',
    },
  ]);
  const getHobbies = () => {
    axios
      .get('/hobby')
      .then((res) => {
        setHobbies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getHobbies();
  }, []);
  const addHobby = (event) => {
    event.preventDefault();
    const hobbyObj = {
      name: event.target.name.value,
      description: event.target.description.value,
      date_of_creation: event.target.doc.value,
    };
    axios
      .post('/hobby', hobbyObj)
      .then((res) => {
        console.log(res);
        getHobbies();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteHobby = (_id) => {
    axios
      .delete(`/hobby/${_id}`)
      .then((res) => {
        console.log(res.data);
        getHobbies();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid">
      <div className="card col-lg-4 col-md-6 col-sm-10">
        <h1>Add Hobby</h1>
        <form onSubmit={addHobby}>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Hobby"
          />
          <textarea
            placeholder="Enter description"
            className="form-control"
            name="description"
          />
          <p>Date of Creation</p>
          <input type="date" name="doc" className="form-control" />
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div className="data">
        <h1>Hobbies</h1>
        <table>
          <thead>
            <tr>
              <th>Hobby</th>
              <th>Description</th>
              <th>Date of Creation</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {hobbies.map((val) => (
              <tr>
                <td>{val.name}</td>
                <td>{val.description}</td>
                <td>{val.date_of_creation}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      deleteHobby(val._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AddHobby;
