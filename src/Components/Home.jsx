import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import axios from "axios";
//import { Category, Menu } from "../Functions/Func";

const Home = () => {
  const [categoryTable, setCategoryTable] = useState([]); // Catch Category from Database
  const [menuTable, setMenuTable] = useState([]); // Catch All(menu) API Data from Database
  const [loading, setLoading] = useState(false); // Set Animation
  const [filteredData, setFilteredData] = useState([]); // Catch Category wise data (Filter Method) from Database

  
const Category = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) =>{
        setCategoryTable(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
const Menu = () => {
    axios
      .get("http://localhost:3001/menu")
      .then((response) =>{
        setMenuTable(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Filter Function
  const filterItems = (curritems) => {
    const updateItems = menuTable.filter(
      (destinationElement) => destinationElement.cat_id === curritems
    );
    setFilteredData(updateItems);
  };

  // eslint-disable-next-line
  {
    /*
  // Table joining for fetch Data
  const showAllItemsById = () => {
    const joinTable = cartList.map((item) => {
      const menu = menuList.find((targetKey) => targetKey.id === item.menu_id);
      const cat = categoryList.find( (targetKey) => targetKey.id === item.cat_id );
      return {
        ...item,
        menu_name: menu ? menu.title : "", 
        cat_name: cat ? cat.name : ""  
      };
      
    });
    setjoinedList(joinTable);
  };
*/
  }

 useEffect(() => {
   Category();
    Menu();
  },[]);

  const showAllItems = () => {
    setFilteredData(menuTable);
    loadData();
  };

  useEffect(() => {
    if (menuTable.length>0) {
      showAllItems();
    }
    // eslint-disable-next-line
  }, [menuTable]);

  return (
    <>
      {/* Food Menu Category*/}
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-12 col-md-6 col-xs-12">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <i className="nav-link text-danger Sedgwick-font fs-3" onClick={showAllItems}>All</i>
                {categoryTable.map((cat) => {
                  return (
                    <>
                      <i className="nav-link text-danger Sedgwick-font fs-3" onClick={() => filterItems(cat.id)}>{cat.name}</i>
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
        <div className="row justify-content-center">
          <BarLoader
            color="#cfa9db"
            height={5}
            margin={4}
            speedMultiplier={2}
            width={500}
          />
        </div>
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
                        {/*<p className="card-text text-danger">Category: <b className="text-primary">{ menu.category}</b></p>*/}
                        <p className="card-text text-danger">
                          Category ID:{" "}
                          <b className="text-primary">{menu.cat_id}</b>
                        </p>
                        <p className="card-text text-overflow">
                          Description: {menu.description}
                        </p>
                        <span className="badge rounded-pill bg-secondary fs-10">
                          Price (TK.): {menu.price}
                        </span>
                        <NavLink
                          to={`/order/${menu.id}`}
                          className="btn btn-warning btn-sm mt-2 mb-2 mx-2 position-absolute bottom-0 end-0"
                        >
                          Add to Order
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
