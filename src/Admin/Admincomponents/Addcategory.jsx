import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";
import { v4 as uuidv4 } from "uuid";
import { ImBin, ImList2 } from "react-icons/im";
import { BarLoader } from "react-spinners";

const Addcategory = () => {
  const randomId = uuidv4();
  const navigate = useNavigate();

  const [categoryTable, setCategoryTable] = useState([]);
  const [loading, setLoading] = useState(false); // Set Animation
  const [inputCategory, setInputCategory] = useState({
    id: randomId,
    name: "",
  });

  // Spinner Function
  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/category", inputCategory)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelInput = (e) => {
    const { name, value } = e.target;
    setInputCategory({ ...inputCategory, [name]: value });
  };

  const Category = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setCategoryTable(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Category();
    loadData();
  }, []);

  // Category list data delete by id
  const handelDelete=(id)=>{
    axios
      .delete(`http://localhost:3001/category/${id}`)
      .then(() => {
        categoryTable();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navigationlink />
          </div>

          {/* Gap Start */}
          <div className="col-md-1"></div>
          {/* Gap End */}

          {/* Input Start */}
          <div className="col-md-3 mt-5">
            <form onSubmit={handelSubmit}>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Category Name
                </span>
                <input
                  onChange={handelInput}
                  value={inputCategory.name}
                  name="name"
                  type="text"
                  placeholder="type category"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <button type="submit" className="btn btn-lg btn-primary m-1">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Input Close */}

          {/* Gap Start */}
          <div className="col-md-1"></div>
          {/* Gap End */}

          <div className="col-md-4 col-sm-12">
            <h3 className="text-primary text-center">Table List Of Category</h3>
            {categoryTable.length > 0 ? (
            <div className="tbl-Scroll">
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th scope="col" className="text-center fs-4">
                      Category Name
                    </th>
                    <th scope="col" className="text-center fs-4">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTable.map((values) => {
                    return (
                      <>
                        <tr key={values.id}>
                          <td className="text-center fs-4">{values.name}</td>
                          <td className="text-center">
                            <NavLink to={`/editcategory/${values.id}`} className="fs-3 m-2">
                            <ImList2/> 
                            </NavLink>
                            <i onClick={() => {
                              if (
                                window.confirm("Are you sure to delete data?")
                              ) {
                                handelDelete(values.id);
                              }
                            }} className="fs-3 m-2">
                            <ImBin/>
                            </i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            ) : (
              <>
                <p className="text-Center">{loading} <BarLoader
                color="#cfa9db"
                height={5}
                margin={4}
                speedMultiplier={.8}
                width={500}
              /></p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcategory;
