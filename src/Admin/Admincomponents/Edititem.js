import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";

import CategoryHook from "../../Hooks/categoryHook";
import DescriptionHook from "../../Hooks/descriptionHook";

const Edititem = () => {

  
  const { categoryData } = CategoryHook(`https://restaurent1942.onrender.com/category`);
  const { descriptionData } = DescriptionHook(`https://restaurent1942.onrender.com/description`);


  const { id } = useParams();
  const navigate = useNavigate();
  const [menuTable, setMenuTable] = useState({ id: "", title: "", cat_id: "", price: "", img: "", des_id: ""});



  // Show Data From Menu
  const menu = () => {
    axios
      .get(`https://restaurent1942.onrender.com/menu/${id}`) // Here "menu" is data table
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
    menu();
    // eslint-disable-next-line
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://restaurent1942.onrender.com/menu/${id}`,menuTable) // Here "entry" is data table
      .then((response) => {
        // handle success
        navigate("/admindashboard");
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const {name,value}=e.target
     // Convert the selected values(string) to numbers
  const convertedValue = name === "cat_id" || name === "des_id" || name==="price" ? +value : value;
    setMenuTable({ ...menuTable, [name]: convertedValue });
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
                <input name="title" onChange={handleChange} value={menuTable.title} type="text" className="form-control"/>
              </div>

              <div class="mb-3">
              <label className="form-label">Category</label>
                <select name="cat_id" onChange={handleChange} value={menuTable.cat_id} className="form-select">
                  <option>select category</option>
                  {categoryData.map(categoryData => {
                    return (
                      <>
                        <option key={categoryData.id} value={categoryData.id}>{categoryData.name}</option>
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input name="price" onChange={handleChange} value={menuTable.price} type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Image Link</label>
                <input name="img" onChange={handleChange} value={menuTable.img} type="text" className="form-control" />
              </div>

              <div class="mb-3">
              <label className="form-label">Description</label>
                <select name="des_id" onChange={handleChange} value={menuTable.des_id} className="form-select">
                  <option>select description</option>
                  {descriptionData.map(descriptionData => {
                    return (
                      <>
                        <option key={descriptionData.id} value={descriptionData.id}>{descriptionData.details}</option>
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
        </div>
      </div>
    </>
  );
};

export default Edititem;
