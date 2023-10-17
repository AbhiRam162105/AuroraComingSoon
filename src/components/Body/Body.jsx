import React, { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader/Loader.jsx";
import CustomCursor from "../Cursor/Cursor.jsx";
// import "./loader.js"; // Import your JavaScript files here
// import "./logic.js";

const Body = () => {
  useEffect(() => {
    var background = document.querySelector(".background");
    var party_image = document.querySelector(".party_image");
    var text = document.querySelector(".text");
    var auroratext = document.querySelector(".Aurora23_text");
    var after_text = document.querySelector(".After_text");
    var introhead = document.querySelector(".intro_head");
    var discription = document.querySelector(".discription");
    var video = document.querySelector(".Video");
    var video_player = document.querySelector(".video_player");
    var play_counter = 1;
    var reg = {
      value: 0,
    };
    var counter = document.querySelector(".counter");
    var wheel1 = document.querySelector(".wheel1");
    var wheel2 = document.querySelector(".wheel2");
    var img_grid = document.querySelector(".img_grid");
    var image = document.querySelector(".image");
    video_player.pause();

    var alpha = 1;
    img_grid.style.filter = `opacity(${alpha})`;
    image.style.filter = `opacity(${alpha})`;

    window.addEventListener("scroll", () => {
      document.querySelector(".intro").style.position = "fixed";
      document.querySelector(".intro").style.top = "200px";
      const scrollPosition = window.scrollY;
      alpha = 1 - Math.min(1, (scrollPosition - 156) / 156);
      img_grid.style.filter = `opacity(${alpha})`;
      image.style.filter = `opacity(${alpha})`;
      img_grid.style.filter = `opacity(${alpha})`;
      image.style.filter = `opacity(${alpha})`;

      if (scrollPosition < 1000) {
        background.style.position = "sticky";
        background.style.top = "0px";
        background.style.backgroundSize = `${100 + scrollPosition / 120}% ${
          100 + scrollPosition / 120
        }%`;
        text.style.backdropFilter = `brightness(${
          100 + (70 * (scrollPosition - 333)) / 667
        }%)`;

        auroratext.style.cssText = `top:${
          35 - (10 * scrollPosition) / 667
        }%;transform:scale(${
          1 - (0.2 * scrollPosition) / 667
        });color:rgba(255,2555,255,${1 - (2 * scrollPosition) / 667})`;
        after_text.style.cssText = `top:${Math.max(
          35,
          51 - (16 * (scrollPosition - 333)) / 334
        )}%;transform:scale(${
          1 - (0.2 * scrollPosition) / 667
        });color:rgba(255,2555,255,${(2 * (scrollPosition - 333)) / 667})`;
      } else if (scrollPosition > 1000 && scrollPosition < 1831) {
        background.style.position = "relative";
        background.style.top = "900px";
      } else if (scrollPosition > 1831 && scrollPosition < 2100) {
        console.log("hey");
        introhead.style.color = `rgba(255,255,255,${Math.min(
          1,
          (scrollPosition - 1831) / 200
        )})`;
        introhead.style.fontSize = `${Math.min(
          5.8,
          (5.02 * scrollPosition) / 1831
        )}rem`;
      } else if (scrollPosition > 2100 && scrollPosition < 2400) {
        console.log("moving we are back");
        introhead.style.marginTop = `${Math.max(
          -18,
          (-18 * (scrollPosition - 2100)) / 300
        )}vh`;
        introhead.style.fontSize = `${Math.min(
          5.8,
          5.8 * (1 - (scrollPosition - 2100) / 3000)
        )}rem`;
      } else if (scrollPosition > 2400 && scrollPosition < 2750) {
        console.log("discription comes in");
        discription.style.color = `rgba(255,255,255,${
          (scrollPosition - 2400) / 750
        })`;
        document.querySelector(".intro").style.position = "fixed";
        document.querySelector(".intro").style.top = "200px";
        video_player.setAttribute("controls", false);
        video_player.pause();
      } else if (scrollPosition > 2750) {
        document.querySelector(".intro").style.position = "relative";
        document.querySelector(".intro").style.top = "1900px";
        video_player.setAttribute("controls", true);
        video_player.play();
        video.style.filter = `opacity(${Math.min(
          1,
          (scrollPosition - 2750) / 400
        )})`;
      }

      if (scrollPosition > 3400) {
        video_player.pause();
        video.style.filter = `opacity(${Math.max(
          0,
          (3700 - scrollPosition) / 300
        )})`;
      }
      if (scrollPosition > 3700) {
        counter.style.cssText = ` background: -webkit-linear-gradient(180deg,rgba(255,0,0,${
          (scrollPosition - 3700) / 300
        }), rgb(255,155,0,${(scrollPosition - 3700) / 500}));
        -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`;
      }
      if (scrollPosition > 3750) {
        function incrementor(cls, start, end, duration) {
          let obj = document.querySelector(`.${cls}`),
            current = start,
            range = end - start,
            increment = end > start ? 25 : -25,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
              current += increment;
              obj.textContent = current + "+";
              if (current == end) {
                clearInterval(timer);
                reg.value = 1;
              }
            }, step);
        }
        if (reg.value == 0) {
          incrementor("reg_counter", 0, 4000, 1);
        }
      }
    });

    function move(event) {
      let rect = text.getBoundingClientRect();
      let centerX = rect.width / 2 - rect.left;
      let centerY = rect.height / 2 - rect.top;
      let x = event.clientX - centerX;
      let y = event.clientY - centerY;
      let type1 = document.querySelectorAll(".t1");
      let type2 = document.querySelectorAll(".t2");
      let type3 = document.querySelectorAll(".t3");
      let type4 = document.querySelectorAll(".t4");
      type1.forEach((div) => {
        div.style.transform = `translate(${x / 50}px,${y / 50}px) `;
      });
      type2.forEach((div) => {
        div.style.transform = `translate(${x / 50}px,${y / 15}px) `;
      });
      type3.forEach((div) => {
        div.style.transform = `translate(${x / 30}px,${y / 30}px) `;
      });
      type4.forEach((div) => {
        div.style.transform = `translate(${x / 15}px,${y / 50}px) `;
      });
    }
    window.addEventListener("mousemove", move);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 4500); // Adjust the delay time as needed
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <div className="megaa" style={{ display: "none" }}>
        <div className="contain">
          <div id="wrapper" data-configuration="1" data-roundness="1">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <div className="title">
            <h1 className="auru" data-value="AURORA ">
              <span className="magic">
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-text">AURORA 2024</span>
              </span>
            </h1>
          </div>
        </div>
        <div id="loader">00 %</div>
      </div>
      <div className="wrapper">
        <div className="nav">
          <div className="logo">
            <img src="../../../assets/logo.png" id="logo" />
          </div>
          <div className="quote"> </div>
          <a className="register" href="#regButton">
            REGISTER
          </a>
        </div>
        <div className="mainbody">
          <div className="background">
            <div className="img_grid">
              <img
                src="../../../assets/party10.webp"
                className="img1 t3 image"
              />
              <img
                src="../../../assets/party1.webp"
                className="img2 t2 image"
              />
              <img src="../../../assets/pary3.webp" className="img3 t4 image" />
              <img
                src="../../../assets/party7.webp"
                className="img4 t3 image"
              />
              <img
                src="../../../assets/party5.webp"
                className="img5 t3 image"
              />
              <img
                src="../../../assets/party6.webp"
                className="img6 t2 image"
              />
              <img
                src="../../../assets/party7.webp"
                className="img7 t1 image"
              />
              <img
                src="../../../assets/party8.webp"
                className="img8 t4 image"
              />
              <img
                src="../../../assets/party9.webp"
                className="img9 t2 image"
              />
              <img
                src="../../../assets/party10.webp"
                className="img10 t1 image"
              />
            </div>
            <div className="text">
              <div className="Aurora23_text ">AURORA 2024</div>
              <div className="After_text ">COMING SOON</div>
            </div>
          </div>
          <div className="intro">
            <div className="intro_head">
              We are back <span>!</span>
            </div>
            <div className="discription">
              Get ready to immerse yourself in the rekindled magic of 'Aurora,'
              as the beloved annual cultural fest of ABVIIITM is set to make its
              grand return in 2024. This year, Aurora will come back with an
              aesthetic magnificence that will promise to be a breathtaking
              tapestry of art, music, dance, and innovation, a celebration of
              diversity and creativity, transcending boundaries and uniting
              enthusiasts in an explosion of colors and energy, get ready to
              witness an entrancing blend of talent, a mesmerizing kaleidoscope
              of creativity, and an outpouring of innovative brilliance.
            </div>
            <div class="cursor">
              <div class="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                  <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                </svg>
              </div>

              <div class="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                  <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                </svg>
              </div>
            </div>
            <div className="Video">
              OFFICIAL TRAILER
              <br />
              <video width="100%" height="100%" className="video_player">
                <source
                  src="../../public/assets/final teaser.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="counter">
              <span className="reg_counter">0</span>
              <div className="reg_text">Registrations done so far</div>
            </div>
          </div>
          <div className="formContainer" id="formContainer">
            <div className="left">
              <div className="leftcontainer">
                <h1 className="text1">
                  REGISTRATIONS
                  <span className="bgSpan" id="spanish">
                    GET
                  </span>
                </h1>
                <h1 className="text1">
                  ARE<span className="bgSpan">READY</span>
                </h1>
                <h1 className="text1">
                  OPEN<span className="bgSpan">FOR</span>
                </h1>
                <h1 className="text1 textSpecial">
                  NOW<span className="bgSpan">AURORA 2024</span>
                </h1>
              </div>
            </div>
            <div className="form">
              <div className="heading">
                <hr />
                <div className="diamond"></div>
                <p>REGISTER</p>
                <div className="diamond"></div>
                <hr />
              </div>

              <form>
                <div className="input-control">
                  <div className="field">
                    <label className="input-label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="lastName"> Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email"> Email</label>
                    <input
                      type="email"
                      id="email"
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="phone"> Phone</label>
                    <input
                      type="text"
                      id="phone"
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
                <div className="submClass">
                  <button className="regButton" id="regButton">
                    <p>Submit</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="./loader.js"></script>
      <script src="./logic.js"></script>
    </>
  );
};

export default Body;
