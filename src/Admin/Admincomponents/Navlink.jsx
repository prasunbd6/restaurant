import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = () => {
  return (
    <>
    <ul class="list-group pt-3">
    <li className="pt-2"><div className="d-grid"> <NavLink to="/addcategory" className="btn btn-primary">Add Category</NavLink></div></li>
    <li className="pt-2"><div className="d-grid"> <NavLink to="/additem" className="btn btn-primary">Add Items</NavLink></div></li>
  </ul>
    </>
  )
}

export default Navlink






