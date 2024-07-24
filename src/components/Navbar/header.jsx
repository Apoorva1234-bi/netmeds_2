import React, { useContext } from "react";
import profile_icon from "../../assets/icons/profile_icon.svg";
import upload_icon from "../../assets/icons/upload_rx.svg";
import logo from "../../assets/icons/netmed-logo.svg";
import offers_icon from "../../assets/icons/offers_icon.svg";
import cart_icon from "../../assets/icons/cart_icon.svg";

import { FaLocationDot } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { DataContext } from "./dataProvider";
const Header = () => {
  const {
    handleCardMouseEnter,
    handleCardMouseLeave,
    handleonUpload,
    handlemouseEnter,
    handleonclick,
    handlemouseLeave,
    isCardVisible,
  } = useContext(DataContext);
  return (
    <header className="page-header">
      <div className="header-pannel">
        <div className="logo">
          <a href="https://www.netmeds.com/">
            <img
              className="logoWeb"
              src={logo}
              alt="Netmeds.com, India ki Online Pharmacy"
            />
          </a>
        </div>
        <div className="search-bar">
          <div className="search-list">
            <span className="list-name">Deliver to </span>
            <span
              onMouseEnter={handlemouseEnter}
              onMouseLeave={handlemouseLeave}
              className="clickable-text"
            >
              415523
            </span>
            {isCardVisible && (
              <div
                className="popup-card"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <p className="title-card">
                  <b>Where do you want the delivery?</b>
                </p>
                <div className="card-part1">
                  <p className="body-card">
                    Get access to your Addresses, Orders, and Wishlist
                  </p>
                  <button className="button-card">
                    Sign-in to see your location
                  </button>
                </div>
                <hr></hr>
                <p className="title-card">
                  <b>Or Enter Pincode</b>
                </p>
                <div className="card-part1">
                  <span className="body-card">
                    Select pincode to see product availability.
                  </span>
                  <div className="input-pincode">
                    <FaLocationDot />
                    <input
                      type="text"
                      className="pincode"
                      placeholder="Enter Pincode"
                    />
                  </div>
                  <p className="end-text">
                    <MdMyLocation /> Detect my Location
                  </p>
                </div>
              </div>
            )}
            <span className="verticalbar">|</span>
            <input
              className="search-input"
              type="text"
              placeholder=" Search for Medicines &wellness Products Here....."
            />
          </div>
        </div>
        <div className="header-options">
          <div className="upload-option">
            <a href="#">
              <img
                className="option-icon"
                src={upload_icon}
                alt="upload-icon"
              />
              <span className="option-name" onClick={handleonUpload}>
                Upload
              </span>
            </a>
          </div>
          <div className="upload-option">
            <a href="#">
              <img
                className="option-icon"
                src={offers_icon}
                alt="offers-icon"
              />
              <span className="option-name">Offers</span>
            </a>
          </div>
          <div className="upload-option">
            <a
              href="#"
              style={{ display: "inline-block", position: "relative" }}
            >
              <img
                className="option-icon"
                src={cart_icon}
                alt="upload-icon"
                style={{ fontSize: "16px" }}
              />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0+
              </span>
            </a>
            <span className="option-name">Cart</span>
          </div>
          <div className="upload-option">
            <a href="#">
              <img
                className="option-icon"
                src={profile_icon}
                alt="upload-icon"
              />
              <span className="option-name">Sign In/Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
