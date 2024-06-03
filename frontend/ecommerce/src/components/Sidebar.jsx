// import React from 'react'
// import { IoIosPhonePortrait } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { GiOfficeChair } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import { GiLaptop } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
// import { FaUserAlt } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";import { VscHome } from "react-icons/vsc";
// import { BiLogOutCircle } from "react-icons/bi";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <>
    <div className="area">
      </div>
        <nav className="main-menu">
              <ul>
                  <li>
                      <a href="https://jbfarrow.com">
                        <BiSolidHome className="fa" />
                          <span className="nav-text">
                              Home
                          </span>
                      </a>

                  </li>
                  <li className="has-subnav">
                      <a href="#">
                        <IoMdPhonePortrait className="fa"/>    
                          <span className="nav-text">
                            Phones & Tablets
                          </span>
                      </a>

                  </li>
                  <li className="has-subnav">
                      <a href="#">
                          <PiTelevisionSimpleBold className="fa"/>
                          <span className="nav-text">
                            TVs & Audio
                          </span>
                      </a>

                  </li>
                  <li className="has-subnav">
                      <a href="#">
                          <MdOutlineCoffeeMaker className="fa" />
                          <span className="nav-text">
                              Appliances
                          </span>
                      </a>

                  </li>
                  <li>
                      <a href="#">
                          <GiLipstick className="fa" />
                          <span className="nav-text">
                              Health & Beauty
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <GiOfficeChair className="fa" />
                          <span className="nav-text">
                              Home & Office
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <RiShirtFill className="fa" />
                          <span className="nav-text">
                              Fashion
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <GiLaptop className="fa" />
                          <span className="nav-text">
                              Computing
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <FaBabyCarriage className="fa" />
                          <span className="nav-text">
                              Baby Products
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <MdSportsBasketball className="fa" />
                          <span className="nav-text">
                              sporting Goods
                          </span>
                      </a>
                  </li>
                  <ul className="logout">
                    <li>
                        <a href="#">
                        <FaPowerOff className="fa" />
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
              </ul>

              
          </nav>
    </>
  )
}

export default Sidebar