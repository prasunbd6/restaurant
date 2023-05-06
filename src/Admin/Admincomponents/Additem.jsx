import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigationlink from "../Admincomponents/Navlink";

const Additem = () => {
  const randomId = uuidv4();

  const [category, setCategory] = useState([]);
  const [menu, setMenu]=useState([]);
  const [update, setUpdate]=useState([]);
  const [entry, setEntry] = useState({
    id: randomId,
    title: "",
    cat_id: "",
    price: "",
    img: "",
    description: "",
  });


  const navigate = useNavigate();

  // Category Table
  const categoryTable = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Menu Table
  const menuTable=()=>{
    axios
    .get("http://localhost:3001/menu")
    .then((response)=>{
    setMenu(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  // Insert Data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/menu", entry)
      .then(() => {
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Input Data Handel
  const handelInput = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  // Menu table show by category id
  const showDataById=()=>{
    const updateTable=menu.map((item)=>{
      const cat = category.find( (targetKey) => targetKey.id === item.cat_id );
      return{ ...item, cat_name: cat ? cat.name:""}
  }
  )
  setUpdate(updateTable);
}

  useEffect(() => {
    categoryTable();
    menuTable();
    showDataById()
    // eslint-disable-next-line
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-6 mt-3"><Navigationlink /></div>

          <div className="col-md-3 m-5  mt-4">
          {/* Input Start */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  onChange={handelInput}
                  value={entry.title}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="type title"
                />
              </div>

              <div class="input-group mb-3">
                <select
                  className="form-select"
                  value={entry.cat_id}
                  onChange={handelInput}
                  name="cat_id"
                >
                  <option>select category</option>
                  {category.map((values) => {
                    return (
                      <>
                        <option key={values.id} value={values.id}>
                          {values.name}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  onChange={handelInput}
                  value={entry.price}
                  name="price"
                  type="text"
                  className="form-control"
                  placeholder="type price"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image Link</label>
                <input
                  onChange={handelInput}
                  value={entry.img}
                  name="img"
                  type="text"
                  className="form-control"
                  placeholder="type image link"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  onChange={handelInput}
                  value={entry.description}
                  name="description"
                  type="text"
                  className="form-control"
                  placeholder="type description"
                />
              </div>

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-sm btn-danger">
                  Submit
                </button>
              </div>
              
            </form>
            {/* Input Close */}
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-2  mt-3">
          <h2 className="text-primary text-center">Food Item List</h2>
          <div className="tbl-Scroll">
          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="col" className="text-center">Title</th>
                <th scope="col" className="text-center">Category</th>
                <th scope="col" className="text-center">Price</th>
                <th scope="col" className="text-center">Description</th>
                <th scope="col" className="text-center">Handle</th>
              </tr>
            </thead>
            <tbody>
            {update.map((values)=>{
              return(
                <>
                <tr key={values.id}>
                <th scope="row">{values.title}</th>
                <td className="text-center">{values.cat_name}</td>
                <td className="text-center">{values.price}</td>
                <td className="text-center">{values.description}</td>
                <td>
                <button className="btn btn-sm btn-primary ms-1">Edit</button>
                <button className="btn btn-sm btn-danger ms-1">Delete</button>
                </td>
              </tr>
                </>
              )
            })}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Additem;
