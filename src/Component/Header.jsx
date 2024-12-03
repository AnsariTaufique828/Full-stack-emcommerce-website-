import React from "react";
import { Link } from "react-router-dom";
import logo from "../Component/logo.png"; // Update path to match the exact location
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const header = () => {
  return (
    <div className="headerwrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            Due to the <b>covid 19</b> epidemic, orders may be processed with a
            slight delay
          </p>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="logowrapper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{ height: "70px", cursor: "pointer" }}
                />
              </Link>
            </div>

            {/* { search will start from here} */}
            <div className="headerSearch ml-3 mr-3 d-flex align-items-center">
              <input type="text" placeholder="Search for products..." />
              <Button>
                <IoSearch />
              </Button>
            </div>

            {/* { search will end here } */}

            {/* {Cart addtion} */}
            <div className="part-three d-flex align-items-center ml-auto">
              <Button className="circle mr-3">
                <FaCartPlus />
              </Button>
              <div className="ml-auto cartTab d-flex align-items-center">
                <span className="price">$3.29</span>
                
                <span className="count d-flex align-items-center justify-cntent-center">1</span>
                
              </div>
            </div>

            {/* {Cart addtion end here } */}

            {/* {user  icon  will start  here } */}
            <div className="part3  d-flex align-items-center ml-auto">
              <Button className="circule">
                <FaRegUserCircle />
              </Button>
            </div>

            {/* {user  icon  will end here } */}

            {/* Location Section */}
            <div className="col-sm-10 d-flex align-items-center part 2">
              <Button className="countryDrop">
                <div className="info d-flex flex-column">
                  
                  <span className="label"> your location</span>
                  <span className="name">India</span>
                </div>
                <span className="ml-auto">
                  <FaAngleDown />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
