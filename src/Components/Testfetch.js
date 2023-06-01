import React, { useEffect, useState } from "react";
import axios from "axios";

const Testfetch = () => {
    const [categoryTable, setCategoryTable] = useState([]);
  const [menuTable, setMenuTable] = useState([]);
  const [mergeTable, setMergeTable] = useState([]);

  // Fetch Request function
  const fetchData = async () => {
    const [categoryResponse, menuResponse] = await Promise.all([
      axios.get("http://localhost:3001/category"),
      axios.get("http://localhost:3001/menu"),
    ]);
    setCategoryTable(categoryResponse.data);
    setMenuTable(menuResponse.data);
  };

  //Function Call Back for fetch Data
  useEffect(() => {
    fetchData();
  });

  // Data Show by ID===ID
  const showDatabyid = () => {
    const update = menuTable.map((items) => {
      const cat = categoryTable.find(
        (targetkey) => targetkey.id === items.cat_id
      );
      return { ...items, cat_name: cat ? cat.name : "" };
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
  return (
   <>
   <div className="container-fluid">
        <div className="row">
          <h1 className="text-center text-primary">Table</h1>
          <div className="col-xl col-xxl col-lg col-md col-sm col-xs mt-3">
            {mergeTable.length > 0 ? (
              <div className="tbl-Scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Food Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mergeTable.map((values) => {
                      return (
                        <>
                          <tr key={values.id}>
                            <th scope="row">{values.title}</th>
                            <td>
                              <img src={values.img} alt="" width="100px" />
                            </td>
                            <td>{values.cat_name}</td>
                            <td>{values.price}</td>
                            <td>{values.description}</td>
                            <td>
                              <button className="btn btn-sm btn-warning m-1">
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
            ) : (
              <>
                <p className="text-Center">Loading Data...</p>
              </>
            )}
          </div>
        </div>
      </div>
   </>
  )
}

export default Testfetch;
