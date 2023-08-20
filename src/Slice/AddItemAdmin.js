import { ImBin, ImList2 } from "react-icons/im";
import { NavLink } from "react-router-dom";

const AddItemAdmin = ({ mergeTable, handelDelete }) => {
  return (
    <>
      <div className="tbl-Scroll">
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Image
              </th>
              <th scope="col" className="text-center">
                Title
              </th>
              <th scope="col" className="text-center">
                Category
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Description
              </th>
              <th scope="col" className="text-center">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            {mergeTable.map((mergeTable) => {
              return (
                <>
                  <tr key={mergeTable.id}>
                    <th scope="row">
                      <img src={mergeTable.img} alt="" width="100px" />
                    </th>
                    <td className="text-center">{mergeTable.title}</td>
                    <td className="text-center">{mergeTable.cat_name}</td>
                    <td className="text-center">{mergeTable.price}</td>
                    <td className="text-center">{mergeTable.des_details}</td>
                    <td className="text-center">
                      <NavLink
                        to={`/edititem/${mergeTable.id}`}
                        className="m-2 fs-3"
                      >
                        <ImList2 />
                      </NavLink>
                      <i
                        className="m-2 fs-3"
                        onClick={() => {
                          if (window.confirm("Are you sure to delete data?")) {
                            handelDelete(mergeTable.id);
                          }
                        }}
                      >
                        <ImBin />
                      </i>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddItemAdmin;
