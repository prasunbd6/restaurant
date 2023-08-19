
const CategoryHome = ({categoryData,showAllItems,setFilteredData,joinTable}) => {

  const handleCategoryClick = (categoryId) => {
    if (categoryId === "all") {showAllItems()} 
    else {
      const filteredItems = joinTable.filter(joinTable=> joinTable.cat_id === categoryId);
      setFilteredData(filteredItems);
    }
  };

  return (
    <>

    <div className="list-group">
    
    
    {
      categoryData.map(categoryData=>{
        return(
          <>
          <button type="button" className="list-group-item list-group-item-action Sedgwick-font fs-5 text-danger"  key={categoryData.id} onClick={()=> handleCategoryClick(categoryData.id)}>{categoryData.name}</button>
          </>
        )
      })
    }
    <button type="button" className="list-group-item list-group-item-action Sedgwick-font fs-5 text-danger" onClick={() => handleCategoryClick(`all`)}>All</button>
  </div>
      
    </>
  );
};

export default CategoryHome;
