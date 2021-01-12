import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminContext } from "../../context/AdminContext";

const AdminPanelEdit = (props) => {
  const { toursToEdit, saveTour } = useContext(adminContext);
  const [newEditItem, setNewEditItem] = useState(toursToEdit);
  console.log(toursToEdit);

  useEffect(() => {
    setNewEditItem(toursToEdit);
  }, [toursToEdit]);

  function handleEditInput(e) {
    let newTour = {
      ...newEditItem,
      [e.target.name]: e.target.value,
    };
    setNewEditItem(newTour);
  }

  return (
    <div>
      <table className="table">
        <thead style={{ backgroundColor: "black", color: "#fff", display: "flex", justifyContent: "space-between"}}>
          <tr>
            <th scope="col">Destination</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody >
          {newEditItem ? (
            <tr key={newEditItem.id}>
              <div style={{width: "100%"}}>
              <td>
                <input
                  value={newEditItem.destination}
                  type="text"
                  name="destination"
                  onChange={handleEditInput}
                  placeholder="title"
                />
              </td>
              <td>
                <input
                  value={newEditItem.description}
                  type="text"
                  name="description"
                  onChange={handleEditInput}
                  placeholder="description"
                />
              </td>
              <td>
                <input
                  value={newEditItem.img}
                  type="text"
                  name="img"
                  onChange={handleEditInput}
                  placeholder="img"
                />
              </td>
              <td>
                <input
                  value={newEditItem.category}
                  type="text"
                  name="category"
                  onChange={handleEditInput}
                  placeholder="category"
                />
              </td>
              <td>
                <input
                  value={newEditItem.price}
                  type="text"
                  name="price"
                  onChange={handleEditInput}
                  placeholder="price"
                />
              </td>
              <td>
                <Link to="/admin">
                <button className='btn btn-danger' style={{marginTop: "15px"}}
                 onClick={() => saveTour(newEditItem)} type="button">Save</button>
                </Link>
              </td>
              </div>
            </tr>
          ) : (
            <h1>loading...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelEdit;
