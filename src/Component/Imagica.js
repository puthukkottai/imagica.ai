// App.js
import React from "react";
import "./Imagica.css";
import { Link } from "react-router-dom";

const Imagica = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source
          src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/site_bg_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="imagica-container">
        <div className="head-head">
          <p>BUILD A NO-CODE AI APP IN MINUTES</p>
        </div>
        <span />
        <div className="head-para">
          <h2>A new way to think and create </h2>
        </div>
        <div className="head-para1">
          <h2>with computers</h2>
        </div>

        <button className="imagica-btn">
          <img
            src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/google-logo.svg"
            class="GoogleOauthButton"
          />
          <span> Sign Up with Google</span>
        </button>
        <p className="or">or</p>
        <button className="imagica-pagebtn">Sign Up with Email</button>
        <div className="imagi-play">Play video</div>
      </div>
    </div>
  );
};

export default Imagica;
