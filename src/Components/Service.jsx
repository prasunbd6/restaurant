import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Service = () => {
  const [myMenuData, setMyMenuData] = useState([]);
  const [myCategoryData, setMyCategoryData] = useState([]);
  const [join, setJoin]=useState([])

  // Function to fetch My Menu data
  const catchMenu = () => {
    axios
      .get("http://localhost:3001/mymenu")
      .then((response) => {
        setMyMenuData(response.data);
      })
      .catch((err) => console.log(err));
  };

  // Function to fetch Category data
  const catchCategory = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setMyCategoryData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const showAllData=()=>{
const joinTable=myMenuData.map((menu)=>{
  const cata=myCategoryData.find((targetid)=>targetid.id===menu.category_id);
  return{ ...menu, cat_name: cata ? cata.name:"" }
})
setJoin(joinTable);
  }

  useEffect(() => {
    catchMenu();
    catchCategory();
    showAllData();
  });

  return (
    <>
      <h1>Service</h1>
      <div className="container">
        <div className="row justify-content-center">
          {/* Card  Start*/}
          {join.map((values)=>{
            const {id, title, cat_name, price, description, img}=values
            return(
              <>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-3">
          <div className="card" key={id}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Title: {title}</h5>
              <p className="card-text text-danger">Category: <b className="text-primary">{cat_name}</b></p>
              <p className="card-text text-overflow">Description: {description}</p>
              <span className="badge rounded-pill bg-secondary fs-10">Price (TK.): {price}</span>
              <NavLink className="btn btn-warning btn-sm mt-2 mb-2 mx-2 position-absolute bottom-0 end-0">Add to Order</NavLink>
            </div>
          </div>
        </div>
              </>
            )
          })}
          
        {/* Card  Close*/}
        </div>
      </div>
    </>
  );
};

export default Service;
