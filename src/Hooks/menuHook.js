import { useState, useEffect } from "react";
import axios from "axios";

const MenuHook = (menuurl) => {
  const [menuData, setMenuData] = useState([]);
  const [menuLoading, setMenuLoading] = useState(true);
  const [menuError, setMenuError] = useState(null);

  //const caturl = `http:localhost:3001/menu`;

  useEffect(() => {
    axios
      .get(menuurl)
      .then((response) => {
        setMenuData(response.data);
        setMenuLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setMenuError(error);
        setMenuLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return { menuData, menuLoading, menuError };
};

export default MenuHook;
