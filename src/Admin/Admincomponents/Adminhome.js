import React from 'react'
import { NavLink } from 'react-router-dom';

const Adminhome = () => {
  return (
    <>
    <div className='text-center'>
    <h1>Welcome To Admin Panel</h1>
    <NavLink to="/admindashboard" className="btn btn-sm btn-danger">Goto Admin Dashboard</NavLink>
    </div>
    
    
    </>
  )
}

export default Adminhome;
