import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";

const Edititem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoryTable, setCategoryTable] = useState([]);
  const [menuTable, setMenuTable] = useState({
    id: "",
    title: "",
    cat_id: "",
    price: "",
    img: "",
    description: ""
  });

  // // Show Data From Category ID
  const category = () => {
    axios
      .get("http://localhost:3001/category") // Here "category" is data table
      .then((response) => {
        setCategoryTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  // Show Data From Menu
  const menu = () => {
    axios
      .get(`http://localhost:3001/menu/${id}`) // Here "menu" is data table
      .then((response) => {
        setMenuTable(response.data);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [id]
      );
  };

  useEffect(() => {
    category();
    menu();
    // eslint-disable-next-line
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/menu/${id}`,menuTable) // Here "entry" is data table
      .then((response) => {
        // handle success
        navigate("/additem");
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setMenuTable({ ...menuTable, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 mt-3">
            <Navigationlink />
          </div>

          <div className="col-md-3 m-5 mt-4">
            {/* Input Start */}
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                name="title"
                  onChange={handleChange}
                  value={menuTable.title}
                  type="text"
                  className="form-control"
                />
              </div>

              <div class="input-group mb-3">
                <select
                name="cat_id"
                onChange={handleChange}
                value={menuTable.cat_id}
                className="form-select" 
                >
                  <option>select category</option>
                  {categoryTable.map((values) => {
                    return (
                      <>
                        <option key={values.id} value={values.id}>
                          {values.name}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                name="price"
                  onChange={handleChange}
                  value={menuTable.price}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image Link</label>
                <input
                name="img"
                  onChange={handleChange}
                  value={menuTable.img}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                name="description"
                  onChange={handleChange}
                  value={menuTable.description}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-sm btn-danger">
                  Submit
                </button>
              </div>
            </form>
            {/* Input Close */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Edititem;
