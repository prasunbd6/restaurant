import { useState, useEffect } from "react";
import { ImBin, ImList2 } from "react-icons/im";
import DescriptionHook from "../../Hooks/descriptionHook";
import Navigationlink from "./Navlink";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Adddescription = () => {
  const { descriptionData } = DescriptionHook(`https://prasunbd6.github.io/restaurentApi/description.json`);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState({details:""});

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
      .post(`https://prasunbd6.github.io/restaurentApi/description.json`, { details: description })
      .then(() => {
        navigate("/admindashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Category list data delete by id
  const handelDelete = (id) => {
    axios
      .delete(`https://prasunbd6.github.io/restaurentApi/description.json/${id}`)
      .then(() => {
        navigate("/admindashboard");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-2">
            <Navigationlink />
          </div>

          {/* Input Start */}
          <div className="col-md-3 mt-5">
            <form onSubmit={handelSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">Description</span>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  name="details"
                  type="text"
                  placeholder="type description"
                  className="form-control"
                />
                <button type="submit" className="btn btn-lg btn-primary m-1">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Input Close */}

          <div className="col-md-4 col-sm-12">
            <h3 className="text-primary text-center">
              Table List Of Description
            </h3>
            {descriptionData.length > 0 ? (
              <div className="tbl-Scroll">
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center fs-4">
                        Description
                      </th>
                      <th scope="col" className="text-center fs-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {descriptionData.map((descriptionData, index) => {
                      return (
                        <>
                          <tr key={descriptionData.id}>
                            <td className="text-center fs-4" key={index}>
                              {descriptionData.details}
                            </td>
                            <td className="text-center">
                              <NavLink
                                to={`/editdescription/${descriptionData.id}`}
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
                                    handelDelete(descriptionData.id);
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
                  {loading}
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

export default Adddescription;
