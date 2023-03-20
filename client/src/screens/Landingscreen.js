import React from "react";
import { Link } from "react-router-dom";

let url =
  "https://www.discoverasr.com/content/dam/tal/media/images/properties/singapore/singapore/citadines-connect-rochester-singapore/overview/SR_SG_Citadines-Connect-Rochester-Singapore_Lobby-4_2880x860.png.transform/ascott-highres/image.png";

function Landingscreen() {
  return (
    <div className="landing">
      <div className="image-container">
        <img src={url} alt="hotel lobby" />
        <div className="text-container">
          <h2 style={{ color: "white", fontSize: "120px" }}>DreamNights</h2>
          <h3>Find your next stay</h3>
          <h4>Search deals on hotels, homes, and much more...</h4>
          <Link to="/home">
            <button
              className="btn"
              style={{ color: "black", background: "Orange" }}
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingscreen;
