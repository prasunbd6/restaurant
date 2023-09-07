import { useEffect, useState } from "react";
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]); // comming from api >>> menu
  const [entry, setEntry] = useState([]);
  const navigate = useNavigate();

  ///handel Text Input
  const handelInput = (e) => {
    const quantity = e.target.value;
    const amount = menu.price * quantity;
    setEntry({ ...entry, quantity, amount });
  };

  // Confirm (Input Data to Cart-List & Calculate of Quantity Change)
  const addDataToCartList = (e) => {
    e.preventDefault();
    //const randomId = uuidv4();
    axios
      .post(`https://prasunbd6.github.io/restaurentApi/cart_list.json`, {
        //  id:randomId,
        menu_id: menu.id,
        quantity: entry.quantity,
        amount: entry.amount,
      })
      .then(() => {
        navigate("/cartlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Individual Data from Menu table by ID
  const getMenu = () => {
    axios
      .get(`https://prasunbd6.github.io/restaurentApi/menu.json/${id}`) // Here "menu" is data table
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Order</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-3  col-sm-6 col-xs-6 ">
            {/*Card Start*/}
            <form onSubmit={addDataToCartList}>
              <div className="card">
                <img src={menu.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Title: {menu.title}
                    <span className="badge rounded-pill bg-danger bg-gradient fs-8 float-end ">
                      Price (TK.): {menu.price}
                    </span>
                  </h5>

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
                      required
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
                    type="submit"
                    className="btn btn-warning btn-sm mt-2 mb-2 mx-2 position-absolute bottom-0 end-0"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
            {/*Card Close*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
