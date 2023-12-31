import React from "react";
import ReactDOM from "react-dom";

import Item from "./Item";
import "./Projects.css";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 430, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

function Projects() {
  return (
    <div className="project-content">
      <h1 style={{ textAlign: "center" }}>Top projects</h1>
      <p style={{ textAlign: "center" }}>
        Early users have created ground-breaking AI apps to solve complex
        problems in
      </p>
      <p style={{ textAlign: "center" }}>
        education, finance, law, and marketing, as well as travel, music and
        fashion - and
      </p>
      <p style={{ textAlign: "center" }}>
        even a mini super-app called “Learn to Do Anything with AI”
      </p>
      <div className="project-list">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              className="project-img"
              style={{ textAlign: "center" }}
              src="https://www.imagica.ai/studio/_next/static/media/Finance.db8c9b05.svg"
            />
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Finance
            </p>
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Learn to invest with confidence based on your personal goals and
              risk tolerance.
            </p>
            <p style={{ textAlign: "center" }}>Investing App by Imagica User</p>
          </Item>
          <Item>
            <img
              className="project-img"
              style={{ textAlign: "center" }}
              src="https://www.imagica.ai/studio/_next/static/media/Work.cd2dcea1.svg"
            />
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Work
            </p>
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Generate a name, logo, business plan and locations for your dream
              project.
            </p>
            <p style={{ textAlign: "center" }}>Business App by Imagica User</p>
          </Item>
          <Item>
            <img
              className="project-img"
              style={{ textAlign: "center" }}
              src="https://www.imagica.ai/studio/_next/static/media/Knowledge.b54c4c7a.svg"
            />
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Knowledge
            </p>
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Get accurate, real-time answers to any question in just a few
              seconds.
            </p>
            <p style={{ textAlign: "center" }}>Education App by Imagica User</p>
          </Item>
          <Item>
            <img
              className="project-img"
              style={{ textAlign: "center" }}
              src="https://www.imagica.ai/studio/_next/static/media/Style.44959811.svg"
            />
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Style
            </p>
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Shop the latest trends on Amazon suited to your style and
              personality.
            </p>
            <p style={{ textAlign: "center" }}>Fashion App by Imagica User</p>
          </Item>
          <Item>
            <img
              className="project-img"
              style={{ textAlign: "center" }}
              src="https://www.imagica.ai/studio/_next/static/media/Escape.605b9fd1.svg"
            />
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Escape
            </p>
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Explore the best vacation spots in the world based on your
              personal taste.
            </p>
            <p style={{ textAlign: "center" }}>Travel App by Imagica User</p>
          </Item>
          <Item>
            <img
              className="project-img"
              style={{ textAlign: "center" }}
              src="https://www.imagica.ai/studio/_next/static/media/Food.608da099.svg"
            />
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Food
            </p>
            <p style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
              Enjoy tasty, new recipes based on what's in your fridge right now.
            </p>
            <p style={{ textAlign: "center" }}>Cooking App by Imagica User</p>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
