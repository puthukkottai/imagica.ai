import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source
          src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/site_bg_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="features">
        <h1>The simplest way to build an AI app</h1>
        <div className="features_container">
          <div className="left_container">
            <div className="content">
              <div className="content_img">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="code-02">
                    <path
                      id="Icon"
                      d="M36 15.1996H4M23.2 28.7995L27.2 24.7996L23.2 20.7996M16.8 20.7996L12.8 24.7996L16.8 28.7995M4 13.2796L4 26.7195C4 29.4078 4 30.7519 4.52317 31.7787C4.98336 32.6819 5.71767 33.4162 6.62085 33.8764C7.64762 34.3995 8.99175 34.3995 11.68 34.3995H28.32C31.0083 34.3995 32.3524 34.3995 33.3792 33.8764C34.2823 33.4162 35.0166 32.6819 35.4768 31.7787C36 30.7519 36 29.4078 36 26.7195V13.2796C36 10.5913 36 9.24722 35.4768 8.22045C35.0166 7.31727 34.2823 6.58297 33.3792 6.12278C32.3524 5.59961 31.0083 5.59961 28.32 5.59961L11.68 5.59961C8.99175 5.59961 7.64762 5.59961 6.62085 6.12278C5.71767 6.58297 4.98336 7.31727 4.52317 8.22045C4 9.24722 4 10.5913 4 13.2796Z"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>

              <div className="content_content">
                <h5>No code</h5>
                <p>
                  Build functional apps without writing a single line of code
                </p>
              </div>
            </div>
            <span />
            <div className="content">
              <div className="content_img">
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="function_devmode">
                    <path
                      id="Icon"
                      d="M25.8562 27C27.7492 27 29.2852 25.4655 29.2852 23.571V16.7145L30.9997 15L29.2852 13.2855V6.429C29.2852 4.5345 27.7507 3 25.8562 3M6.1435 3C4.249 3 2.7145 4.5345 2.7145 6.429V13.2855L1 15L2.7145 16.7145V23.571C2.7145 25.4655 4.249 27 6.1435 27"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Union"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.7571 11.3136C18.0843 9.67761 19.5207 8.5 21.1891 8.5H22C22.5523 8.5 23 8.05228 23 7.5C23 6.94772 22.5523 6.5 22 6.5H21.1891C18.5674 6.5 16.3101 8.35053 15.7959 10.9214L15.1802 14H13C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16H14.7802L14.2429 18.6864C13.9157 20.3224 12.4793 21.5 10.8109 21.5H10C9.44772 21.5 9 21.9477 9 22.5C9 23.0523 9.44772 23.5 10 23.5H10.8109C13.4326 23.5 15.6899 21.6495 16.2041 19.0786L16.8198 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14H17.2198L17.7571 11.3136Z"
                      fill="#12192B"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Create AI functions</h5>
                <p>
                  Use plain language to create any AI function simply by
                  describing it
                </p>
              </div>
            </div>
            <span />
            <div className="content">
              <div className="content_img">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="globe-03">
                    <path
                      id="Ellipse 3017"
                      d="M30.6066 30.6061C28.2717 32.941 25.2317 34.4401 21.9579 34.8711C18.6841 35.3021 15.3596 34.6409 12.5 32.9899C9.64038 31.3388 7.40544 28.7904 6.14181 25.7397C4.87819 22.6891 4.65649 19.3067 5.51112 16.1172"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Ellipse 3017_2"
                      d="M9.39331 9.39342C11.7282 7.05854 14.7683 5.55935 18.042 5.12835C21.3158 4.69735 24.6403 5.35863 27.4999 7.00964C30.3595 8.66065 32.5945 11.2091 33.8581 14.2598C35.1217 17.3104 35.3434 20.6928 34.4888 23.8823"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <circle
                      id="Ellipse 3017_3"
                      cx="20"
                      cy="20"
                      r="8"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                    <path
                      id="Vector"
                      d="M20 15.5V20L22.5 22.5"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Vector_2"
                      d="M8 6V11H13"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Vector_3"
                      d="M32 34V29H27"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Real-time data</h5>
                <p>
                  Add sources of truth for accurate results with URLs or drag
                  and drop
                </p>
              </div>
            </div>
            <div className="content">
              <div className="content_img">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="file-05">
                    <path
                      id="Union"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 24C30 23.4477 29.5523 23 29 23C28.4477 23 28 23.4477 28 24V28H24C23.4477 28 23 28.4477 23 29C23 29.5523 23.4477 30 24 30H28V34C28 34.5523 28.4477 35 29 35C29.5523 35 30 34.5523 30 34V30H34C34.5523 30 35 29.5523 35 29C35 28.4477 34.5523 28 34 28H30V24Z"
                      fill="#12192B"
                    ></path>
                    <rect
                      id="Rectangle"
                      x="5.5"
                      y="5.5"
                      width="11"
                      height="11"
                      rx="3"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></rect>
                    <circle
                      id="Ellipse 6"
                      cx="11"
                      cy="29"
                      r="6"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                    <circle
                      id="Ellipse 6_2"
                      cx="29"
                      cy="11"
                      r="6"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Multimodal</h5>
                <p>
                  Choose your input and output - including text, image, audio
                  and video
                </p>
              </div>
            </div>
            <div className="content">
              <div className="content_img">
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="image">
                    <path
                      id="Icon"
                      d="M4.40814 28.0919L14.3029 18.1971C14.897 17.603 15.194 17.306 15.5365 17.1947C15.8377 17.0968 16.1623 17.0968 16.4635 17.1947C16.806 17.306 17.103 17.603 17.6971 18.1971L27.5259 28.0259M19 19.5L23.3029 15.1971C23.897 14.603 24.194 14.306 24.5365 14.1947C24.8377 14.0968 25.1623 14.0968 25.4635 14.1947C25.806 14.306 26.103 14.603 26.6971 15.1971L31 19.5M13 10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5C7 8.84315 8.34315 7.5 10 7.5C11.6569 7.5 13 8.84315 13 10.5ZM8.2 28.5H23.8C26.3202 28.5 27.5804 28.5 28.543 28.0095C29.3897 27.5781 30.0781 26.8897 30.5095 26.043C31 25.0804 31 23.8202 31 21.3V8.7C31 6.17976 31 4.91965 30.5095 3.95704C30.0781 3.11031 29.3897 2.4219 28.543 1.99047C27.5804 1.5 26.3202 1.5 23.8 1.5H8.2C5.67976 1.5 4.41965 1.5 3.45704 1.99047C2.61031 2.4219 1.9219 3.11031 1.49047 3.95704C1 4.91965 1 6.17976 1 8.7V21.3C1 23.8202 1 25.0804 1.49047 26.043C1.9219 26.8897 2.61031 27.5781 3.45704 28.0095C4.41965 28.5 5.67976 28.5 8.2 28.5Z"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Image generation</h5>
                <p>
                  Generate images in different styles or search for an image
                </p>
              </div>
            </div>
          </div>
          <div className="right_container">
            <div className="content">
              <div className="content_img">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="message-square-01">
                    <path
                      id="Icon"
                      d="M1.5 8.7C1.5 6.17976 1.5 4.91965 1.99047 3.95704C2.4219 3.11031 3.11031 2.4219 3.95704 1.99047C4.91965 1.5 6.17976 1.5 8.7 1.5H21.3C23.8202 1.5 25.0804 1.5 26.043 1.99047C26.8897 2.4219 27.5781 3.11031 28.0095 3.95704C28.5 4.91965 28.5 6.17976 28.5 8.7V16.8C28.5 19.3202 28.5 20.5804 28.0095 21.543C27.5781 22.3897 26.8897 23.0781 26.043 23.5095C25.0804 24 23.8202 24 21.3 24H11.5256C10.5895 24 10.1215 24 9.67382 24.0919C9.27664 24.1734 8.8923 24.3082 8.53123 24.4927C8.12425 24.7006 7.75878 24.993 7.02782 25.5777L3.44963 28.4403C2.82551 28.9396 2.51344 29.1892 2.25081 29.1895C2.0224 29.1898 1.80633 29.0859 1.66384 28.9074C1.5 28.7022 1.5 28.3025 1.5 27.5033V8.7Z"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Chat Interface</h5>
                <p>Chat with a data source and add the interface to your app</p>
              </div>
            </div>
            <div className="content">
              <div className="content_img">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="help">
                    <path
                      id="Icon"
                      d="M15 28.5C22.4558 28.5 28.5 22.4558 28.5 15C28.5 7.54416 22.4558 1.5 15 1.5C7.54416 1.5 1.5 7.54416 1.5 15C1.5 22.4558 7.54416 28.5 15 28.5Z"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="?"
                      d="M13.1741 17.0566C13.1741 17.7913 13.6223 18.3142 14.4067 18.3142C15.1787 18.3142 15.5024 17.8784 15.7141 17.1562C15.9258 15.9858 16.2869 15.55 17.6316 14.4917C19.2876 13.2092 20.1841 12.1509 20.1841 10.3704C20.1841 7.70581 18.0176 6 14.8799 6C13.2363 6 11.9539 6.42334 11.0698 7.18286C10.2605 7.88013 9.75 8.82642 9.75 9.68555C9.75 10.3081 10.136 10.7812 10.8083 10.7812C11.3064 10.7812 11.5803 10.5696 11.9165 9.99683C12.5391 8.78906 13.4231 8.24121 14.7554 8.24121C16.262 8.24121 17.3701 9.1626 17.3701 10.4575C17.3701 11.5906 16.7725 12.2256 15.49 13.2466C13.697 14.6785 13.1741 15.5002 13.1741 17.0566ZM12.7507 21.9749C12.7507 22.8962 13.5103 23.5811 14.4316 23.5811C15.353 23.5811 16.1125 22.8962 16.1125 21.9749C16.1125 21.0535 15.353 20.3811 14.4316 20.3811C13.5103 20.3811 12.7507 21.0535 12.7507 21.9749Z"
                      fill="#12192B"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Ask Imagica</h5>
                <p>
                  Ask a question and get a real-time answer with source
                  citations
                </p>
              </div>
            </div>
            <div className="content">
              <div className="content_img">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="web html">
                    <rect
                      id="Rectangle 4"
                      x="1.5"
                      y="3"
                      width="27"
                      height="24"
                      rx="4.5"
                      stroke="#12192B"
                      stroke-width="2"
                    ></rect>
                    <path
                      id="Vector 14"
                      d="M1.5 10.5H28.5"
                      stroke="#12192B"
                      stroke-width="2"
                    ></path>
                    <path
                      id="Vector 14_2"
                      d="M9 21H21"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <path
                      id="Vector 14_3"
                      d="M9 16.5H21"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Category templates</h5>
                <p>Get started quickly in the industry of your choice</p>
              </div>
            </div>
            <div className="content">
              <div className="content_img">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="globe">
                    <path
                      id="Icon"
                      d="M15 1.5C18.3767 5.19678 20.2957 9.99425 20.4 15C20.2957 20.0058 18.3767 24.8032 15 28.5M15 1.5C11.6233 5.19678 9.70428 9.99425 9.6 15C9.70428 20.0058 11.6233 24.8032 15 28.5M15 1.5C7.54416 1.5 1.5 7.54416 1.5 15C1.5 22.4558 7.54416 28.5 15 28.5M15 1.5C22.4558 1.5 28.5 7.54416 28.5 15C28.5 22.4558 22.4558 28.5 15 28.5M2.17503 10.95H27.825M2.175 19.05H27.825"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="content_content">
                <h5>Publishing</h5>
                <p>Share your app with the world in just a few clicks</p>
              </div>
            </div>
            <div className="content">
              <div className="content_img">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="budget">
                    <path
                      id="Icon"
                      d="M17.0648 10.075C16.292 10.6259 15.3464 10.95 14.325 10.95C11.7155 10.95 9.6 8.83455 9.6 6.225C9.6 3.61545 11.7155 1.5 14.325 1.5C16.0165 1.5 17.5005 2.38886 18.3352 3.72499M6.9 25.9177H10.4239C10.8833 25.9177 11.34 25.9723 11.7854 26.0817L15.5088 26.9865C16.3167 27.1833 17.1583 27.2024 17.9747 27.0439L22.0915 26.243C23.179 26.0311 24.1794 25.5104 24.9635 24.7477L27.8762 21.9143C28.7079 21.1065 28.7079 19.7958 27.8762 18.9866C27.1273 18.2581 25.9414 18.1761 25.0941 18.7939L21.6995 21.2706C21.2134 21.6259 20.6218 21.8173 20.0134 21.8173H16.7354L18.8219 21.8172C19.998 21.8172 20.9506 20.8905 20.9506 19.7465V19.3323C20.9506 18.3824 20.286 17.5541 19.339 17.3245L16.1186 16.5414C15.5945 16.4142 15.0578 16.35 14.5182 16.35C13.2157 16.35 10.8581 17.4284 10.8581 17.4284L6.9 19.0836M25.8 7.575C25.8 10.1845 23.6845 12.3 21.075 12.3C18.4655 12.3 16.35 10.1845 16.35 7.575C16.35 4.96545 18.4655 2.85 21.075 2.85C23.6845 2.85 25.8 4.96545 25.8 7.575ZM1.5 18.51L1.5 26.34C1.5 27.0961 1.5 27.4741 1.64714 27.7629C1.77657 28.0169 1.98309 28.2234 2.23711 28.3529C2.52589 28.5 2.90393 28.5 3.66 28.5H4.74C5.49607 28.5 5.87411 28.5 6.16289 28.3529C6.41691 28.2234 6.62343 28.0169 6.75286 27.7629C6.9 27.4741 6.9 27.0961 6.9 26.34V18.51C6.9 17.7539 6.9 17.3759 6.75286 17.0871C6.62343 16.8331 6.41691 16.6266 6.16289 16.4971C5.87411 16.35 5.49607 16.35 4.74 16.35L3.66 16.35C2.90393 16.35 2.52589 16.35 2.23711 16.4971C1.98309 16.6266 1.77657 16.8331 1.64714 17.0871C1.5 17.3759 1.5 17.7539 1.5 18.51Z"
                      stroke="#12192B"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div></div>
              <div className="content_content">
                <h5>Monetization</h5>
                <p>Charge a subscription to use your app in a few easy steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
