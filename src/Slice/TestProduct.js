const TestProduct = ({ filter }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-3">
          {filter.map((menuData) => {
            return (
              <>
                <div className="col-md-3" key={menuData.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={menuData.img}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title">Title : {menuData.title}</h6>

                      <h6 className="card-text">
                        Category:{" "}
                        <b className="text-success">
                          {menuData.cat_name}
                        </b>
                      </h6>
                      <p className="card-text">
                        Description: {menuData.details}
                      </p>
                      <button className="btn btn-danger btn-sm">Go somewhere</button>
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

export default TestProduct;
