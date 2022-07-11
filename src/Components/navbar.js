import React from "react";

const Navbar = () => {
  return (
   <nav>
    <div className="nav-title">
      <h1>Math-Magicians</h1>
    </div>
    <div className="links">
      <a href="#home">Home</a>
      <a href="#Calculator">Calculator</a>
      <a href="#Quote">Quote</a>
    </div>
   </nav>
  )
}

export default Navbar