import React from "react";
import {Link,Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
   <nav>
    <div className="nav-title">
      <h1>Math-Magicians</h1>
    </div>
    <div className="links">
      <Link to='/'>Home</Link>
      <Link to='/calculator'>Calculator</Link>
      <Link to='/quote'>Quote</Link>
    </div>
   </nav>
  )
}

export default Navbar