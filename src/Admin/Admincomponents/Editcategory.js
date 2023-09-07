import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Editcategory = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoryTable, setCategoryTable] = useState({ id: "", name: "" });

  // Individual Data by ID
  const category=()=>{
    axios
    .get(`https://prasunbd6.github.io/restaurentApi/category.json/${id}`) // Here "category" is data table
    .then((response) => {
      setCategoryTable(response.data);
    })
    .catch((error) => {
      console.log(error);
    },[id]);
  }

  useEffect(() => {
   category(); 
   // eslint-disable-next-line
  },[]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://prasunbd6.github.io/restaurentApi/category.json/${id}`, categoryTable) // Here "entry" is data table
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
    setCategoryTable({ ...category, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">   
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 bg-warning text-dark rounded">
          <div className="ms-1 mt-1 me-1 mb-1">
          <form onSubmit={handleUpdate}>  
          {/* Edit Start */}
          <label for="floatingInputValue">Category Name</label>
            <input
              name="name"
              value={categoryTable.name}
              onChange={handleChange}
              className="form-control mt-2"
              type="text"
            />
            <div className="d-grid mt-3 mb-3">
              <button type="submit" className="btn btn-sm btn-success">Update</button>
            </div>
            {/* Edit Close */}
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editcategory;
