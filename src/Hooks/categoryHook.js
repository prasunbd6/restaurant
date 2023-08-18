import { useState, useEffect } from "react";
import axios from "axios";

const CategoryHook = (caturl) => {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [categoryError, setCategoryError] = useState(null);

  //const caturl = `http:localhost:3001/category`;

  useEffect(() => {
    axios
      .get(caturl)
      .then((response) => {
        setCategoryData(response.data);
        setCategoryLoading(false);
      })
      .catch((error) => {
        setCategoryError(error);
        setCategoryLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return { categoryData, categoryLoading, categoryError };
};

export default CategoryHook;
