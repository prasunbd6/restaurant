import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";

import { BarLoader } from "react-spinners";
import CategoryHook from "../../Hooks/categoryHook";
import MenuHook from "../../Hooks/menuHook";
import AddItemAdmin from "../../Slice/AddItemAdmin";

const Additem = () => {
  const randomId = uuidv4();

  const { categoryData } = CategoryHook(`http://localhost:3001/category`);
  const { menuData } = MenuHook(`http://localhost:3001/menu`);

  const [mergeTable, setMergeTable] = useState([]);

  const [loading, setLoading] = useState(false); // Set Animation
  const [entry, setEntry] = useState({
    id: randomId,
    title: "",
    cat_id: "",
    price: "",
    img: "",
    description: "",
  });

  // eslint-disable-next-line
  const { id } = useParams();
  const navigate = useNavigate();

  // Menu list data delete by id
  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:3001/menu/${id}`)
      .then(() => {
        window.location.reload(); // Reload the page
      })
      .catch((err) => console.log(err));
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

  // Spinner Function
  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Menu table show by category id
  const showDatabyid = () => {
    const update = menuData.map((item) => {
      const cat = categoryData.find(
        (targetKey) => targetKey.id === item.cat_id
      );
      return { ...item, cat_name: cat ? cat.name : "" };
    });
    setMergeTable(update);
  };

  //Must use in this way
  useEffect(() => {
    showDatabyid();
    loadData();
    // eslint-disable-next-line
  }, [categoryData, menuData]);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-2 mt-3">
            <Navigationlink />
          </div>

          <div className="col-md-2  mt-4">
            {/* Input Start */}
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
                  {categoryData.map((categoryData) => {
                    return (
                      <>
                        <option key={categoryData.id} value={categoryData.id}>
                          {categoryData.name}
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
            {/* Input Close */}
          </div>

          <div className="col-md m-2  mt-3">
            <h2 className="text-primary text-center">Food Item List</h2>
            {mergeTable.length > 0 ? (
              <AddItemAdmin
                mergeTable={mergeTable}
                handelDelete={handelDelete}
              />
            ) : (
              <>
                <p className="text-Center">
                  {loading}):(
                  <BarLoader
                    color="#cfa9db"
                    height={5}
                    margin={4}
                    speedMultiplier={0.8}
                    width={500}
                  />
                  )
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Additem;
