import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminhome = () => {
    const randomId = uuidv4();

    const [category, setCategory]=useState([]);
    const [entry, setEntry] = useState({ 
        id: randomId, 
        title: "",
        cat_id: "",
        price: "",
        img: "",
        description: ""
      });   

const navigate = useNavigate();

// Category Table
    const categoryTable=()=>{
        axios
        .get("http://localhost:3001/category")
        .then((response)=>{
            setCategory(response.data)
        })
        .catch((err)=>{
console.log(err)
        })
    }
// Insert Data
const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/menu", entry)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Input Data Handel
const handelInput = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

useEffect(()=>{
    categoryTable();
},[])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-6 mt-4">
            <div>
              <h4 id="simple-list-item-1">Add Catagory</h4>
              

              <h4 id="simple-list-item-2" className="mt-5">Add Item</h4>
              <form onSubmit={handleSubmit}>
              <div className="col-4 mt-3"><input value={entry.title} onChange={handelInput} name="title" type="text" placeholder="type title" className="form-control" /></div>
              <div className=" col-4 mt-3">
              <select value={entry.cat_id} onChange={handelInput} name="cat_id">
                <option>select category</option>
                    {category.map((values)=>{
                        return(
                            <>
                            <option key={values.id} value={values.id}>{values.name}</option>
                            </>
                        )
                    })
                }      
                </select>
            </div>
              <input value={entry.price} onChange={handelInput} name="price" type="text" placeholder="type price"/>
              <input value={entry.img} onChange={handelInput} name="img" type="text" placeholder="type image link"/>
              <input value={entry.description} onChange={handelInput} name="description" type="text" placeholder="type description" />
             
              <div className="d-grid col-4 mt-4">
              <button type="submit" className="btn btn-sm btn-danger">Submit</button>
              </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminhome;
