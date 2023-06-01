import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = () => {
  return (
    <>
    <ul class="list-group pt-3">
    <li><div className="d-grid p-1"> <NavLink to="/addcategory" className="btn btn-primary">Add Category</NavLink></div></li>
    <li><div className="d-grid p-1"> <NavLink to="/additem" className="btn btn-primary">Add Items</NavLink></div></li>
  </ul>
    </>
  )
}

export default Navlink






