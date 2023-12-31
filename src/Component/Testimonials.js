import React from "react";

import Item from "./Item";
import "./Testimonials.css";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
];

function Testimonials() {
  return (
    <div className="testimonal-content">
      <h1 style={{ textAlign: "center" }}>What people are saying about</h1>
      <h1 style={{ textAlign: "center" }}>Imagica</h1>
      <p style={{ textAlign: "center" }}>
        Users across the globe are excited to bring their
      </p>
      <p style={{ textAlign: "center" }}>ideas to life with Imagica AI</p>
      <div className="testimonials-head">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Creating your own AI tools with Imagica is a kind of superpower
            </p>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Imagica User
            </p>
            <p style={{ textAlign: "center" }}>Turkey</p>
          </Item>
          <Item>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Imagica unlocks your thought potential to create a project or
              business that can thrive
            </p>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Imagica User
            </p>
            <p style={{ textAlign: "center" }}>United Kingdom</p>
          </Item>
          <Item>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              This is revolutionary what you are doing!
            </p>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Imagica User
            </p>
            <p style={{ textAlign: "center" }}>USA</p>
          </Item>
          <Item>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Imagica functionality looks amazing
            </p>
            <p style={{ textAlign: "center", margin: "30px", padding: "5px" }}>
              Imagica User
            </p>
            <p style={{ textAlign: "center" }}>Canada</p>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
