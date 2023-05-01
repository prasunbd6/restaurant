import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImBin, ImList2 } from "react-icons/im";


const Cartlist = () => {
  
  const [cartList, setCartList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [joinedList, setjoinedList] = useState([]);

  //Cart List Table (Function)
  const cartListFetch = () => {
    axios
      .get("http://localhost:3001/cart_list")
      .then((response) => {
        setCartList(response.data);
      })
      .catch((err) => console.log(err));
  };

  //Cart List Table (Function)
  const menuFetch = () => {
    axios
      .get("http://localhost:3001/menu")
      .then((response) => {
        setMenuList(response.data);
      })
      .catch((err) => console.log(err));
  };

  //Category Table (Function)
  const categoryFetch = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setcategoryList(response.data);
      })
      .catch((err) => console.log(err));
  };

  // Table joining for fetch Data
  const showAllItemsById = () => {
    const joinTable = cartList.map((item) => {
      const menu = menuList.find((targetKey) => targetKey.id === item.menu_id);
      const cat = categoryList.find( (targetKey) => targetKey.id === item.cat_id );
      return {
        ...item,
        menu_name: menu ? menu.title : "", cat_name: cat ? cat.name : ""  
      };
      
    });
    setjoinedList(joinTable);
  };

  // Cart list data delete by id
  function handleDelete(id) {
    axios
      .delete(`http://localhost:3001/cart_list/${id}`)
      .then(() => {
        cartListFetch();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    cartListFetch();
    menuFetch();
    categoryFetch();
    showAllItemsById();
    // eslint-disable-next-line
  }, [cartList, menuList]);

  // Calculate total amount
  const totalAmount = joinedList.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <h1>Cart List</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 fs-3">
            {/* table Start */}
            <table className="table table-hov">
              <thead>
                <tr className="text-center">
                  <th scope="col">SL No.</th>
                  <th scope="col">Item</th>
                  
                  <th scope="col">Quantity</th>
                  <th scope="col">Sub Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {joinedList.map((values) => {
                  return (
                    <>
                      <tr key={values.id} className="text-center">
                        <th scope="row">{values.id}</th>
                        <td>{values.menu_name}</td>
                        
                        <td>{values.quantity}</td>
                        <td>{values.amount}</td>
                        <td>
                        <i> <ImList2/> </i>
                          <i className="ms-5"
                            onClick={() => {
                              if (
                                window.confirm("Are you sure to delete data?")
                              ) {
                                handleDelete(values.id);
                              }
                            }}
                          >
                            <ImBin />
                          </i>
                        </td>
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
              {" "}
              <h2>Total : {totalAmount}</h2>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartlist;
