import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import DescriptionHook from "../Hooks/descriptionHook";
import CategoryHook from "../Hooks/categoryHook";
import MenuHook from "../Hooks/menuHook";
import FilteredHome from "../Slice/FilteredHome";
import CategoryHome from "../Slice/CategoryHome";

const Home = () => {
  const { categoryData } = CategoryHook(`http://localhost:3001/category`);
  const { descriptionData } = DescriptionHook(`http://localhost:3001/description`);
  const { menuData } = MenuHook(`http://localhost:3001/menu`);

  const [loading, setLoading] = useState(false); // Set Animation

  const [filteredData, setFilteredData] = useState([]); // Catch Category wise data (Filter Method) from Database

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Filter Function
  const filterItems = () => {
    const updateItems = menuData.map((menuData) => {
      const cat = categoryData.find((categoryData) => categoryData.id === menuData.cat_id);
      const descrip = descriptionData.find((descriptionData) => descriptionData.id === menuData.des_id);
      return {
        ...menuData,
        cat_name: cat ? cat.name : "",
        description: descrip ? descrip.details : "",
      };
    });

    setFilteredData(updateItems);
  };

  
  const showAllItems = () => {
    setFilteredData(filterItems);
    loadData();
  };

   

  useEffect(() => {
    showAllItems();
    // eslint-disable-next-line
  }, [menuData, categoryData, descriptionData]);





  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 col-xxs-12">
            {/* Food Menu Category*/}
            <CategoryHome
              categoryData={categoryData}
              showAllItems={showAllItems}
              setFilteredData={setFilteredData}
            />
          </div>
        </div>
      </div>

      {/* Fetch Data by Category*/}
      {loading ? (
        <div className="row justify-content-center">
          <BarLoader
            color="#cfa9db"
            height={5}
            margin={4}
            speedMultiplier={0.75}
            width={500}
          />
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row justify-content-start align-items-center ">
            <FilteredHome filteredData={filteredData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
