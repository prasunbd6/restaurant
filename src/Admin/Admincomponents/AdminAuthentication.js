import React,{useState} from 'react'
import Adminsignin from './Adminsignin'
import Adminsignup from './Adminsignup'

const AdminAuthentication = () => {
    const [toggle, setToggle]=useState(true);

    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <>
    {toggle? <Adminsignin toggleFrom={handleToggle}/>:<Adminsignup  toggleFrom={handleToggle}/>}
    
    
    </>
  )
}

export default AdminAuthentication
