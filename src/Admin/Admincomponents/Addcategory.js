import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";
//import { v4 as uuidv4 } from "uuid";
import { ImBin, ImList2 } from "react-icons/im";
import { BarLoader } from "react-spinners";
import CategoryHook from "../../Hooks/categoryHook";

const Addcategory = () => {
  const navigate = useNavigate();
  //const randomId = uuidv4();
  const { categoryData } = CategoryHook(`https://prasunbd6.github.io/restaurentApi/category.json`);
  const [loading, setLoading] = useState(false); // Set Animation

  const [inputCategory, setInputCategory] = useState({id:"",name: ""});

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
      .post("https://prasunbd6.github.io/restaurentApi/category.json", inputCategory)
      .then(() => {
        navigate("/admindashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelInput = (e) => {
    const { name, value } = e.target;
    setInputCategory({ ...inputCategory, [name]: value });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Category list data delete by id
  const handelDelete = (id) => {
    axios
      .delete(`https://prasunbd6.github.io/restaurentApi/category.json/${id}`)
      .then(() => {
        navigate("/admindashboard");
        //window.location.reload(); // Reload the page
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">

          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-xxs-12">
            <Navigationlink />
          </div>

          {/* Input Start */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-xxs-12">
            <form onSubmit={handelSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">Category Name</span>
                <input
                  onChange={handelInput}
                  value={inputCategory.name}
                  name="name"
                  type="text"
                  placeholder="type category"
                  className="form-control"
                />
                <button type="submit" className="btn btn-lg btn-primary m-1">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Input Close */}

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h3 className="text-primary text-center">Table List Of Category</h3>
            {categoryData.length > 0 ? (
              <div className="tbl-Scroll">
                <table className="table">
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
                    {categoryData.map((categoryData) => {
                      return (
                        <>
                          <tr key={categoryData.id}>
                            <td className="text-center fs-4">
                              {categoryData.name}
                            </td>
                            <td className="text-center">
                              <NavLink
                                to={`/editcategory/${categoryData.id}`}
                                className="fs-3 m-2"
                              >
                                <ImList2 />
                              </NavLink>
                              <i
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure to delete data?"
                                    )
                                  ) {
                                    handelDelete(categoryData.id);
                                  }
                                }}
                                className="fs-3 m-2"
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
              </div>
            ) : (
              <>
                <p className="text-Center">
                  {loading}{" "}
                  <BarLoader
                    color="#cfa9db"
                    height={5}
                    margin={4}
                    speedMultiplier={0.8}
                    width={500}
                  />
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcategory;
