import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";
import { v4 as uuidv4 } from "uuid";

const Addcategory = () => {
const randomId = uuidv4();
  const navigate = useNavigate();

  const [inputCategory, setInputCategory] = useState({
    id: randomId,
    name: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/category",inputCategory)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelInput = (e) => {
    const { name, value } = e.target;
    setInputCategory({ ...inputCategory, [name]: value });
  };


  const [categoryTable, setCategoryTable]=useState([]);

  const showcategoryTable=()=>{
    axios
    .get("http://localhost:3001/category")
    .then((response)=>{
setCategoryTable(response.data);
    })
    .catch()
  }

  useEffect(()=>{
    showcategoryTable();
  })

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navigationlink />
          </div>

          {/* Gap Start */}
          <div className="col-md-1"></div>
        {/* Gap End */}

        {/* Gap Start */}
          <div className="col-md-3 mt-5">
            <form onSubmit={handelSubmit}>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Category Name
                </span>
                <input
                  onChange={handelInput}
                  value={inputCategory.name}
                  name="name"
                  type="text"
                  placeholder="type category"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <button type="submit" className="btn btn-sm btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 col-sm-12">
          <h3>Table List Of Category</h3>
          <div className="tbl-Scroll">
          <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {categoryTable.map((values)=>{
    return(
      <>
      <tr key={values.id}>
      <th scope="row">{values.id}</th>
      <td>{values.name}</td>
      <td>
      <button className="btn btn-sm btn-info">Edit</button>
      <button className="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>
      </>
    )
  })}
  </tbody>
</table>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcategory;
