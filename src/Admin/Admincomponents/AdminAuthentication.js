import React, { useState } from 'react'
import Adminsignin from "../Admincomponents/Adminsignin"
import Adminsignup from "../Admincomponents/Adminsignup"

const Adminauthentication = () => {
    const [toggle, setToggle]=useState(true)

    //Handle Toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
   <>
   {
    toggle?<Adminsignin toggleForm={handleToggle}/> : <Adminsignup toggleForm={handleToggle}/>
   }
   </>
  )
}

export default Adminauthentication
