const TestCategory = ({
  categoryData,
  menuData,
  descriptionData,
  setFilter,
  showAllItems,
  
}) => {
  const handleCat = (catID) => {
    if (catID === "all") {
      showAllItems();
    } else {
      const filteredData = menuData.filter(menuData => menuData.cat_id === catID);

      // Fetch and attach category name and description details to filtered data
      const joinTable = filteredData.map(menuData => {
        const cat = categoryData.find(categoryData => categoryData.id === menuData.cat_id);
        const des = descriptionData.find(descriptionData => descriptionData.id === menuData.des_id);
        return {
          ...menuData,
          cat_name: cat ? cat.name : "",
          details: des ? des.details : "",
        };
      });
      //console.log(updateData)
      setFilter(joinTable);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {categoryData.map((categoryData) => {
                return (
                  <>
                    <li
                      className="list-group-item  list-group-item-action"
                      key={categoryData.id}
                      onClick={()=> handleCat(categoryData.id)}
                    >
                      {categoryData.name}
                    </li>
                  </>
                );
              })}
              <li
                className="list-group-item  list-group-item-action"
                key={categoryData.id}
                onClick={() => handleCat(`all`)}
              >
                All
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCategory;
