import React from "react";
import MenuHook from "../Hooks/menuHook";

const CategoryHome = ({categoryData,showAllItems,setFilteredData,}) => {

  const { menuData } = MenuHook(`http://localhost:3001/menu`);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === "all") {showAllItems()} 
    else {
      const filteredItems = menuData.filter(menuData=> menuData.cat_id === categoryId);
      setFilteredData(filteredItems);
    }
  };

  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <i
            className="nav-link text-danger Sedgwick-font fs-3"
            onClick={() => handleCategoryClick(`all`)}
          >
            All
          </i>
        </li>

        {categoryData.map(categoryData => {
          return (
            <>
              <li className="nav-item" key={categoryData.id}>
                <i
                  className="nav-link text-danger Sedgwick-font fs-3"
                  onClick={() => handleCategoryClick(categoryData.id)}
                >
                  {categoryData.name}
                </i>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryHome;
