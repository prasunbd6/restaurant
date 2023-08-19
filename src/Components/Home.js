import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import DescriptionHook from "../Hooks/descriptionHook";
import CategoryHook from "../Hooks/categoryHook";
import MenuHook from "../Hooks/menuHook";
import FilteredHome from "../Slice/FilteredHome";
import CategoryHome from "../Slice/CategoryHome";

const Home = () => {
  const { categoryData } = CategoryHook(`http://localhost:3001/category`);
  const { descriptionData } = DescriptionHook(
    `http://localhost:3001/description`
  );
  const { menuData } = MenuHook(`http://localhost:3001/menu`);

  const [loading, setLoading] = useState(false); // Set Animation
  const [filteredData, setFilteredData] = useState([]); // Catch Category wise data (Filter Method) from Database

  // Join Table
  const joinTable = menuData.map((menuData) => {
    const cat = categoryData.find(
      (categoryData) => categoryData.id === menuData.cat_id
    );
    const descrip = descriptionData.find(
      (descriptionData) => descriptionData.id === menuData.des_id
    );
    return {
      ...menuData,
      cat_name: cat ? cat.name : "",
      description: descrip ? descrip.details : "",
    };
  });

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Filter Function
  const filterItems = () => {
    setFilteredData(joinTable);
  };

  const showAllItems = () => {
    setFilteredData(filterItems);
    loadData();
  };

  useEffect(() => {
    showAllItems();
    // eslint-disable-next-line
  }, [menuData, categoryData, descriptionData]);


   //Search Operation
   const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilteredData(joinTable.filter(joinTable =>joinTable.title.toLowerCase().includes(searchText)));
  };


 

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mb-2">
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-12 col-sm-10 col-xs-11 col-xxs-12">
          <input 
          type="search"
          className="form-control"
          placeholder="Product Search By Title"
          onChange={handleSearch}
          />
          </div>
        </div>

        <div class="row justify-content-center  g-2">
          <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-xxs-12 text-center">
            <CategoryHome
              categoryData={categoryData}
              showAllItems={showAllItems}
              setFilteredData={setFilteredData}
              joinTable={joinTable}
            />
          </div>

          <div class="col-xxl-11 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-xs-12 col-xxs-12">
            {/* Fetch Data by Category*/}
            {loading ? (
              <div className="row justify-content-center product-overflow">
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
                <div className="row justify-content-start product-overflow">
                  <FilteredHome filteredData={filteredData} />
                </div>
                <div className="row justify-content-center align-items-center ">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-xxs-12 mt-3">
                
               
                  <p>Pagination</p>

                

</div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
