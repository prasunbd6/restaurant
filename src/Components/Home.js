import React, { useEffect, useState } from "react";
//import logo from "../images/logo.jpg";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [apiCatData, setApiCatData] = useState([]); // Catch Category from Database
  const [apiAllData, setApiAllData] = useState([]); // Catch App API Data from Database
  const [filteredData, setFilteredData] = useState([]); // Catch Category wise data from Database
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const filterItems = (curritems) => {
    //console.log(curritems)
    const updateItems = apiAllData.filter((destinationElement) => {
      return destinationElement.category === curritems;
    });
    setFilteredData(updateItems);
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

  useEffect(() => {
    if (apiAllData.length) {
      showAllItems();
    }
    // eslint-disable-next-line
  }, [apiAllData]);

  const showAllItems = () => {
    setFilteredData(apiAllData);
    loadData();
  };

  return (
    <>
      {/* Logo 
      <div className="container-fluid mt-1">
        <div className="row justify-content-md-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <img src={logo} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      */}

      {/* Food Menu Category*/}
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-6 col-md-6 col-xs-12">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="nav-link btn btn-lg text-danger Sedgwick-font fs-3"
                  onClick={showAllItems}
                >
                  {" "}
                  All{" "}
                </button>
                {apiCatData.map((cat) => {
                  return (
                    <>
                      <button
                        className="nav-link btn btn-lg text-danger Sedgwick-font fs-3"
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

      {loading ? (
        <PacmanLoader
          color="#7277bf" height={20} margin={0.5} radius={2} speedMultiplier={1} width={5} />
      ) : (
        <div className="container">
          <div className="row">
            {filteredData.map((menu) => {
              return (
                <>
                  {/* Card  Start*/}
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-3">
                    <div className="card">
                      <img src={menu.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Title: {menu.title}</h5>
                        <p className="card-text text-danger">
                          {" "}
                          Category:{" "}
                          <b className="text-primary">{menu.category}</b>
                        </p>
                        <p className="card-text text-overflow">
                          Description: {menu.description}
                        </p>
                        <span className="badge rounded-pill bg-secondary fs-10">
                          {" "}
                          Price (TK.): {menu.price}
                        </span>
                        <NavLink to={`/order/${menu.id}`} className="btn btn-warning btn-sm mt-2 mb-2 mx-2 position-absolute bottom-0 end-0">
                          
                          Order
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  {/* Card  Close*/}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
