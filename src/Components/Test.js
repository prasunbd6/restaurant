import { useState, useEffect } from "react";
import TestCategory from "../Slice/TestCategory";
import TestProduct from "../Slice/TestProduct";
import CategoryHook from "../Hooks/categoryHook";
import MenuHook from "../Hooks/menuHook";
import DescriptionHook from "../Hooks/descriptionHook";

const Test = () => {
  const [filter, setFilter] = useState([]);
  const { categoryData } = CategoryHook(`https://prasunbd6.github.io/restaurentApi/category.json`);
  const { menuData } = MenuHook(`https://prasunbd6.github.io/restaurentApi/menu.json`);
  const { descriptionData } = DescriptionHook(`https://prasunbd6.github.io/restaurentApi/description.json`);


  const joinTable = menuData.map(menuData => {
    const cat = categoryData.find(categoryData => categoryData.id === menuData.cat_id);
    const des = descriptionData.find(descriptionData => descriptionData.id === menuData.des_id);
    return {...menuData,cat_name: cat ? cat.name : "",details: des ? des.details : ""};
  });

  //Show Data by Category Operation
  const fullItems = () => { 
    setFilter(joinTable);
  };

  //Search Operation
  const searchFilter = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilter(joinTable.filter(joinTable =>joinTable.title.toLowerCase().includes(searchText)));
  };

  const showAllItems = () => {
    setFilter(fullItems);
  };

  useEffect(() => {
    showAllItems();
    // eslint-disable-next-line
  }, [categoryData, menuData, descriptionData]);

  return (
    <>
      <div className="container-fluid">
        {/* Search Data */}
        <div className="row justify-content-center">
          <div className="col-md-6 mb-2">
            <input
              type="search"
              placeholder="Product Search By Title"
              className=" form-control"
              onChange={searchFilter}
            />
          </div>
        </div>

        <div className="row justify-content-center g-2">
          <div className="col-md-2">
            {/* Filter Data */}
            <TestCategory
              categoryData={categoryData}
              menuData={menuData}
              descriptionData={descriptionData}
              setFilter={setFilter}
              showAllItems={showAllItems}
             
            />
            {/* Show  Data */}
          </div>
          <div className="col-md-10">
            <TestProduct filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
