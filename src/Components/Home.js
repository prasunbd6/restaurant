import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import axios from "axios";

const Home = () => {
  const [apiCatData, setApiCatData] = useState([]); // Catch Category from Database
  const [apiAllData, setApiAllData] = useState([]); // Catch App API Data from Database
  

  const filterItems = (curritems) => {
    //console.log(curritems)
    const updateItems = apiAllData.filter((destinationElement) => {
      return destinationElement.category === curritems;
    });
    setApiAllData(updateItems);
  };

  const categoryData = () => {
    axios
      .get("http://localhost:3001/category", apiCatData)
      .then((response) => {
        setApiCatData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const menu = () => {
    axios
      .get("http://localhost:3001/menu", apiAllData)
      .then((response) => {
        setApiAllData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    categoryData();
    menu();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* Logo */}
      <div className="container-fluid mt-1">
        <div className="row justify-content-md-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <img src={logo} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Food Menu Category*/}
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-md-4 col-xs-12">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                {apiCatData.map((cat) => {
                  return (
                    <>
                      <button
                        className="nav-link btn btn-lg text-danger fs-3"
                        onClick={() => filterItems(cat.cat_name)}
                        key={cat.id}
                      >
                        {" "}
                        {cat.cat_name}{" "}
                      </button>
                    </>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Fetch Data by Category*/}
      <div className="container">
        <div className="row">
          {apiAllData.map((menu) => {
            return (
              <>
                {/* Card  Start*/}
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-3">
                  <div className="card">
                    <img
                      src={menu.img}
                      className="card-img-top"
                      alt="..."
                      height="250px"
                      width="250px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Title: {menu.title}</h4>
                      <p className="card-text text-danger"> Category: <b className="text-primary">{menu.category}</b>
                      </p>
                      <p className="card-text">Description: {menu.description}
                      </p>
                      <span className="badge rounded-pill bg-secondary fs-5">
                        {" "}
                        Price (TK.): {menu.price}
                      </span>
                      <button className="btn btn-warning btn-lg mt-2 mb-2 mx-2 position-absolute bottom-0 end-0">
                        {" "}
                        Order{" "}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Card  Close*/}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
