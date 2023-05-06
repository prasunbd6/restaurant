import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigationlink from "./Navlink";
import { v4 as uuidv4 } from "uuid";

const Addcategory = () => {
  const randomId = uuidv4();
  const navigate = useNavigate();

  const [inputCategory, setInputCategory] = useState({
    id: randomId,
    name: "",
  });

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

  const [categoryTable, setCategoryTable] = useState([]);

  const showcategoryTable = () => {
    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setCategoryTable(response.data);
      })
      .catch();
  };

  useEffect(() => {
    showcategoryTable();
  });

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
            <div className="tbl-Scroll">
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      Category Name
                    </th>
                    <th scope="col" className="text-center">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTable.map((values) => {
                    return (
                      <>
                        <tr key={values.id}>
                          <td className="text-center">{values.name}</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-info m-1">
                              Edit
                            </button>
                            <button className="btn btn-sm btn-danger m-1">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
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

export default Addcategory;
