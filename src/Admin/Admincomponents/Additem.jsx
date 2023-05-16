import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Navigationlink from "../Admincomponents/Navlink";
import { ImBin, ImList2 } from "react-icons/im";
import { BarLoader } from "react-spinners";

const Additem = () => {
  const randomId = uuidv4();
  const [categoryTable, setCategoryTable] = useState([]);
  const [menuTable, setMenuTable] = useState([]);
  const [mergeTable, setMergeTable] = useState([]);
  const [loading, setLoading] = useState(false); // Set Animation
  const [entry, setEntry] = useState({
    id: randomId,
    title: "",
    cat_id: "",
    price: "",
    img: "",
    description: "",
  });

  // eslint-disable-next-line
  const { id } = useParams();
  const navigate = useNavigate();

  // Menu list data delete by id
  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:3001/menu/${id}`)
      .then(() => {
        mergeTable();
      })
      .catch((err) => console.log(err));
  };

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

  // Spinner Function
  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Fetch Request function
  const fetchData = async () => {
    const [categoryResponse, menuResponse] = await Promise.all([
      axios.get("http://localhost:3001/category"),
      axios.get("http://localhost:3001/menu"),
    ]);
    setCategoryTable(categoryResponse.data);
    setMenuTable(menuResponse.data);
  };

  // Menu table show by category id
  const showDatabyid = () => {
    const update = menuTable.map((item) => {
      const cat = categoryTable.find(
        (targetKey) => targetKey.id === item.cat_id
      );
      return { ...item, cat_name: cat ? cat.name : "" };
    });
    setMergeTable(update);
  };

  //Must use in this way
  useEffect(() => {
    if (categoryTable.length > 0 && menuTable.length > 0) {
      showDatabyid();
    }
    // eslint-disable-next-line
  }, [categoryTable, menuTable]);

  useEffect(() => {
    fetchData();
    loadData();
  },[]);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-2 mt-3">
            <Navigationlink />
          </div>

          <div className="col-md-2 m-2  mt-4">
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
                  {categoryTable.map((values) => {
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

          <div className="col-md m-2  mt-3">
            <h2 className="text-primary text-center">Food Item List</h2>
            {mergeTable.length > 0 ? (
              <div className="tbl-Scroll">
                <table className="table mt-2">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        Image
                      </th>
                      <th scope="col" className="text-center">
                        Title
                      </th>
                      <th scope="col" className="text-center">
                        Category
                      </th>
                      <th scope="col" className="text-center">
                        Price
                      </th>
                      <th scope="col" className="text-center">
                        Description
                      </th>
                      <th scope="col" className="text-center">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mergeTable.map((values) => {
                      return (
                        <>
                          <tr key={values.id}>
                            <th scope="row">
                              <img src={values.img} alt="" width="100px" />
                            </th>
                            <td className="text-center">{values.title}</td>
                            <td className="text-center">{values.cat_name}</td>
                            <td className="text-center">{values.price}</td>
                            <td className="text-center">
                              {values.description}
                            </td>
                            <td className="text-center">
                              <NavLink
                                to={`/edititem/${values.id}`}
                                className="m-2 fs-3"
                              >
                                <ImList2 />
                              </NavLink>
                              <i
                                className="m-2 fs-3"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure to delete data?"
                                    )
                                  ) {
                                    handelDelete(values.id);
                                  }
                                }}
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
                  {loading}):(<BarLoader color="#cfa9db" height={5} margin={4} speedMultiplier={0.8} width={500} />)
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Additem;
