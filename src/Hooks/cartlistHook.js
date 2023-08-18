import { useState, useEffect } from "react";
import axios from "axios";

const CartlistHook = (carturl) => {
  const [cartlistData, setCartlistData] = useState([]);
  const [cartlistLoading, setCartlistLoading] = useState(true);
  const [cartlistError, setCartlistError] = useState(null);

  //const caturl = `http:localhost:3001/cartlist`;

  useEffect(() => {
    axios
      .get(carturl)
      .then((response) => {
        setCartlistData(response.data);
        setCartlistLoading(false);
      })
      .catch((error) => {
        setCartlistError(error);
        setCartlistLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return { cartlistData, cartlistLoading, cartlistError};
};

export default CartlistHook;
