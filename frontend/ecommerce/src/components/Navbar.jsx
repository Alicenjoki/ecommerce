// import React from 'react'
import { IoIosCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Offcanvas from "./Offcanvas";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <header>
      <Sidebar />
      <nav className="navbar bg-body-tertiary fixed-top " id='nav'>
        <div className="container-fluid">
          <div className="tab">
            <a className="navbar-brand" id="name" href="#"> Shop<span id="ify">ify</span></a>
            
          </div>

          <div className="search">
            <a className="nav-link mt-3 " href="#">
              <FaRegHeart size={20}/>
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <a className="nav-link mt-3" href="#">
              <IoIosCart size={20}/>
              <i className="fas fa-shopping-cart"></i>
              <p className="badge rounded-pill badge-notification bg-danger">1</p>
            </a>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar