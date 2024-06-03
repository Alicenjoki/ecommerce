// import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { GiOfficeChair } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import { GiLaptop } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Offcanvas = () => {
  return (
    <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> <FaHouse /> Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> 
                <IoIosPhonePortrait /> Phones & Tablets</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <PiTelevisionSimpleBold /> TVs & Audio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <MdOutlineCoffeeMaker /> Appliances</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <GiLipstick /> Health & Beauty</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <GiOfficeChair /> Home & Office</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <RiShirtFill /> Fashion</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <GiLaptop /> Computing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <FaBabyCarriage /> Baby Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> <MdSportsBasketball /> Sporting Goods</a>
            </li>


            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaUserAlt /> Account
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        </ul>

    </div>
  )
}

export default Offcanvas