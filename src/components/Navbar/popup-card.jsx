import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { DataContext } from "./dataProvider";

function Popup_card() {
  const { handleCardMouseEnter, handleCardMouseLeave } =
    useContext(DataContext);
  return (
    <>
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
          <button className="button-card">Sign-in to see your location</button>
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
    </>
  );
}

export default Popup_card;
