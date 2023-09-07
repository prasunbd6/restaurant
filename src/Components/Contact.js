import React, { useEffect, useState } from "react";
import MenuHook from "../Hooks/menuHook";
import CategoryHook from "../Hooks/categoryHook";
import DescriptionHook from "../Hooks/descriptionHook";

const Contact = () => {
  const { menuData } = MenuHook(`https://prasunbd6.github.io/restaurentApi/menu.json`);
  const { categoryData } = CategoryHook(`https://prasunbd6.github.io/restaurentApi/category.json`);
  const { descriptionData } = DescriptionHook(`https://prasunbd6.github.io/restaurentApi/description.json`);

  const [filter, setFilter] = useState([]);

  const showAllData = () => {
    const updateTable = menuData.map((menuData) => {
      const cat = categoryData.find((categoryData) => categoryData.id === menuData.cat_id);
      const des = descriptionData.find((descriptionData) => descriptionData.id === menuData.des_id);
      return {
        ...menuData,
        cat_name: cat ? cat.name : null,
        details: des ? des.details : null,
      };
    });

    setFilter(updateTable);
  };

  useEffect(() => {
    showAllData();
    // eslint-disable-next-line
  }, [menuData, categoryData, descriptionData]);

  return (
    <>
      <h1>Contact</h1>

      <div className="container">
        <div className="row align-content-around  g-2">
          {filter.map((filter) => {
            return (
              <>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12  col-xxs-12 g-3"
                  key={filter.id}
                >
                  <div className="card" style={{ width: "22rem" }}>
                    <img src={filter.img} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">
                        Title: {filter.title}
                        <span className=" badge bg-warning text-secondary float-end ">
                          Tk. {filter.price}
                        </span>
                      </h5>
                      <div className=" border-bottom border-3 border-secondary m-2" />
                      <p className="card-text">Description: {filter.details}</p>
                      <p className="card-text">Category: {filter.cat_name}</p>
                      <div className="d-grid">
                        <button className="btn btn-sm btn-primary">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
