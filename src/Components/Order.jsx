import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState(""); // comming from api >>> menu
  const [categoryTable, setCategoryTable] = useState(""); // comming from api >>> category
  
  const [entry, setEntry] = useState("");

  const url = "http://localhost:3001/cart_list";
  const navigate = useNavigate();

  console.log(apiData);

  ///handel Text Input
  const handelInput = (e) => {
    const quantity = e.target.value;
    
    const amount = apiData.price * quantity;
    setEntry({ ...entry, quantity, amount });
  };

  // Confirm (Input Data to Cart-List & Calculate of Quantity Change)
  const addDataToCartList = (e) => {
    e.preventDefault();
    axios
      .post(url, {cat_id:categoryTable.id, menu_id: apiData.id,quantity: entry.quantity, amount: entry.amount, })
      .then(() => { navigate("/cartlist"); })
      .catch((err) => {  console.log(err); });
  };

  // Individual Data from Menu table by ID
  const getMenuData = () => {
    axios
      .get(`http://localhost:3001/menu/${id}`) // Here "menu" is data table
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Individual Data from Menu table by ID
  const getCategoryData = () => {
    axios
      .get(`http://localhost:3001/category/${id}`) // Here "menu" is data table
      .then((response) => {
        setCategoryTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  useEffect(() => {
    getMenuData();
    getCategoryData();
    // eslint-disable-next-line
  });

  return (
    <>
      <h1>Order</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-3  col-sm-6 col-xs-6 ">
            {/*Card Start*/}
            <div className="card">
              <img src={apiData.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title: {apiData.title}</h5>
                <p className="card-text text-danger">
                  {" "}
                  Category: <b className="text-primary">
                   
                    {apiData.cat_id}
                  </b>
                </p>
                <span className="badge rounded-pill bg-secondary fs-8">
                 
                  Price (TK.): {apiData.price}
                </span>

                <div className="col-lg-4 col-md-3  col-sm-6 col-xs-6  mt-4">
                  <label className="form-label">
                  
                    <b>Quantity</b>
                  </label>
                  <input
                    onChange={handelInput}
                    value={entry.quantity}
                    name="quantity"
                    type="number"
                    className="form-control"
                  />
                </div>

                <div className="col-lg-4 col-md-3  col-sm-6 col-xs-6  mt-4">
                  <label className="form-label">
                   
                    <b>Amount (Tk.)</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={handelInput}
                    value={entry.amount}
                    name="amount"
                    disabled
                  />
                </div>

                <button
                  onClick={addDataToCartList}
                  className="btn btn-warning btn-sm mt-2 mb-2 mx-2 position-absolute bottom-0 end-0"
                >
                  {" "}
                  Confirm{" "}
                </button>
              </div>
            </div>
            {/*Card Close*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
