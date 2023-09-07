import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImBin, ImList2 } from "react-icons/im";
import CartlistHook from "../Hooks/cartlistHook";
//import CategoryHook from "../Hooks/categoryHook";

import MenuHook from "../Hooks/menuHook";

const Cartlist = () => {
  const { cartlistData } = CartlistHook(`https://prasunbd6.github.io/restaurentApi/cart_list.json`);
  const { menuData } = MenuHook(`https://prasunbd6.github.io/restaurentApi/menu.json`);

  const [joinedList, setjoinedList] = useState([]);

  // Table joining for fetch Data
  const showAllItemsById = () => {

    const joinTable = cartlistData.map((cartlistData) => 
    {
      const menu = menuData.find((menuData) => menuData.id === cartlistData.menu_id);
     // const cat = categoryData.find((categoryData) => categoryData.id === cartlistData.cat_id);
      return {
        ...cartlistData,
        menu_name: menu ? menu.title : "",
       // cat_name: cat ? cat.name : "",
      };
      
    });
    setjoinedList(joinTable);
  };

  // Cart list data delete by id
  function handleDelete(id) {
    axios
      .delete(`https://prasunbd6.github.io/restaurentApi/cart_list.json/${id}`)
      .then(() => {
        window.location.reload();
        cartlistData();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    showAllItemsById();
    // eslint-disable-next-line
  }, [menuData]);

  // Calculate total amount
  const totalAmount = joinedList.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <h1>Cart List</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg col-md col-sm col-xs fs-4">
            {/* table Start */}
            <table className="table table-hov">
              <thead>
                <tr className="text-center">
                  <th scope="col">Item</th>
                  
                  <th scope="col">Quantity</th>
                  <th scope="col">Sub Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {joinedList.map((joinedList,index) => {
                  return (
                    <>
                      <tr key={index} className="text-center">
                        <th scope="row">{joinedList.menu_name}</th>
                        <td>{joinedList.quantity}</td>
                        <td>{joinedList.amount}</td>
                        <td><i className="p-1"><ImList2 /></i><i className="p-1"onClick={() =>{if (window.confirm("Are you sure to delete data?")){handleDelete(joinedList.id)}}}><ImBin /></i></td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            {/* table End */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <span>
              <h2>Total : {totalAmount}</h2>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartlist;
