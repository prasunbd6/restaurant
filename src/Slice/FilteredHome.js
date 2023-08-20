import { NavLink } from "react-router-dom";

const FilteredHome = ({ filteredData }) => {



  return (
    <>
      {filteredData.map((filteredData, index) => {
        return (
          <>
            {/* Card  Start*/}
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-xxs-12"
              key={index}
            >
              <div className="card mt-3">
                <img
                  src={filteredData.img}
                  className="card-img-top" width="50px" height="50px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Title: {filteredData.title}</h5>

                  <p className="card-text text-danger">
                    Category ID:
                    <b className="text-primary"> {filteredData.cat_name}</b>
                  </p>
                  <p className="card-text text-overflow">
                    Description: {filteredData.description}
                  </p>
                  <span className="badge rounded-pill bg-secondary fs-10">
                    Price (TK.): {filteredData.price}
                  </span>
                  <NavLink
                    to={`/order/${filteredData.id}`}
                    className="btn btn-warning btn-sm mt-2 mb-1 mx-1 position-absolute bottom-0 end-0"
                  >
                    Order
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Card  Close*/}
          </>
        );
      })}
    </>
  );
};

export default FilteredHome;
