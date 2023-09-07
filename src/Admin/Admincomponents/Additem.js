import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";

import CategoryHook from "../../Hooks/categoryHook";
import MenuHook from "../../Hooks/menuHook";
import DescriptionHook from "../../Hooks/descriptionHook";

import AddItemAdmin from "../../Slice/AddItemAdmin";

const Additem = () => {
  const { categoryData } = CategoryHook(`https://prasunbd6.github.io/restaurentApi/category.json`);
  const { descriptionData } = DescriptionHook(`https://prasunbd6.github.io/restaurentApi/description.json`);
  const { menuData } = MenuHook(`https://prasunbd6.github.io/restaurentApi/menu.json`);
  
  const [mergeTable, setMergeTable] = useState([]);
  const [entry, setEntry] = useState({title: "",cat_id: "",price: "",img: "",des_id: ""});

  // eslint-disable-next-line
  const { id } = useParams();
  const navigate = useNavigate();

  // Menu list data delete by id
  const handelDelete = (id) => {
    axios
      .delete(`https://prasunbd6.github.io/restaurentApi/menu.json/${id}`)
      .then(() => {
        navigate("/admindashboard");
      })
      .catch((err) => console.log(err));
  };

  // Insert Data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://prasunbd6.github.io/restaurentApi/menu.json", entry)
      .then(() => {
        navigate("/admindashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Input Data Handel
  const handelInput = (e) => {
    const { name, value } = e.target;
    // Convert the selected values(String) to numbers
    const convertedValue = name === "cat_id" || name === "des_id" || name === "price" ? +value : value;
    setEntry({ ...entry, [name]: convertedValue });
  };

  // Menu table Join with category id and description id
  const joinTable = menuData.map((menu) => {
    const cat = categoryData.find(categoryData => categoryData.id === menu.cat_id);
    const des = descriptionData.find(descriptionData => descriptionData.id === menu.des_id);
    return {
      ...menu,
      cat_name: cat ? cat.name : "",
      des_details: des ? des.details : "",
    };
  });

  const showDatabyid = () => {
    setMergeTable(joinTable);
  };

  //Must use in this way
  useEffect(() => {
    showDatabyid();
    // eslint-disable-next-line
  }, [categoryData, menuData, descriptionData]);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-2 mt-3">
            <Navigationlink />
          </div>

          <div className="col-md-2 mt-4">
            {/* Input Start */}
            <form onSubmit={handleSubmit}>
              {/* Title */}
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
              {/* Category */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  value={entry.cat_id}
                  onChange={handelInput}
                  name="cat_id"
                  className="form-select"
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

              {/* Price */}
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

              {/* Image Link */}
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
                <select
                  value={entry.des_id}
                  onChange={handelInput}
                  name="des_id"
                  className="form-select"
                >
                  <option>select description</option>
                  {descriptionData.map((descriptionData) => {
                    return (
                      <>
                        <option
                          key={descriptionData.id}
                          value={descriptionData.id}
                        >
                          {descriptionData.details}
                        </option>
                      </>
                    );
                  })}
                </select>
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

            <AddItemAdmin mergeTable={mergeTable} handelDelete={handelDelete} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Additem;
