import axios from "axios"; 

export const Category = () => {
  axios
    .get("http://localhost:3001/category")
    .then((response) =>response.data)
    .catch((err) => {
      console.log(err);
    });
};

export const Menu = () => {
  axios
    .get("http://localhost:3001/menu")
    .then((response) =>response.data)
    .catch((err) => {
      console.log(err);
    });
};




// With out Parameter
// eslint-disable-next-line
{/*
export const Menu = () => {
  return axios.get("http://localhost:3001/menu")
    .then(response => response.data)
    .catch(error => console.log(error));
}
*/}

