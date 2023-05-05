import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigationlink from "../Admincomponents/Navlink";

const Additem = () => {
  const randomId = uuidv4();

  const [category, setCategory] = useState([]);
  const [entry, setEntry] = useState({
    id: randomId,
    title: "",
    cat_id: "",
    price: "",
    img: "",
    description: "",
  });

  const navigate = useNavigate();

  // Category Table
  const categoryTable = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Insert Data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/menu", entry)
      .then(() => {
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Input Data Handel
  const handelInput = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  useEffect(() => {
    categoryTable();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"><Navigationlink /></div>
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  onChange={handelInput}
                  value={entry.title}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="type title"
                />
              </div>

              <div class="input-group mb-3">
                <select
                  className="form-select"
                  value={entry.cat_id}
                  onChange={handelInput}
                  name="cat_id"
                >
                  <option>select category</option>
                  {category.map((values) => {
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
                  onChange={handelInput}
                  value={entry.price}
                  name="price"
                  type="text"
                  className="form-control"
                  placeholder="type price"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image Link</label>
                <input
                  onChange={handelInput}
                  value={entry.img}
                  name="img"
                  type="text"
                  className="form-control"
                  placeholder="type image link"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  onChange={handelInput}
                  value={entry.description}
                  name="description"
                  type="text"
                  className="form-control"
                  placeholder="type description"
                />
              </div>

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-sm btn-danger">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
          {/* Table content Start below */}
          <div className="tbl-Scroll">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>




              
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Additem;
