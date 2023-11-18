import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader.jsx";
import toast, { Toaster } from "react-hot-toast";

const Body = () => {
  const [field, setField] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [college, setCollege] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [VisibleAlert, setVisibleAlert] = useState(false);

  const [emailLabel, setEmailLabel] = useState("Email");
  const [nameLabel, setNameLabel] = useState("Name");
  const [dateLabel, setDateLabel] = useState("Date");
  const [firstNameLabel, setFirstNameLabel] = useState("First Name");
  const [lastNameLabel, setLastNameLabel] = useState("Last Name");
  const [phoneLabel, setPhoneLabel] = useState("Phone");
  const [cityLabel, setCityLabel] = useState("City");
  const [collegeLabel, setCollegeLabel] = useState("College");
  const [confirmPasswordLabel, setConfirmPasswordLabel] =
    useState("ConfirmPassword");
  const [passwordLabel, setPasswordLabel] = useState("Password");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
  setEmailLabel("Email");
     }

     if (name === "name") {
       setName(e.target.value);
       setNameLabel("");
     } else if (name === "date") {
       setDate(value);
       setDateLabel("");
    } else if (name === "email") {
      setEmail(value);
      setEmailLabel("");
    } else if (name === "phone") {
      setPhone(value);
      setPhoneLabel("");
    }
    else if (name === "city") {
       setCity(value);
       setCityLabel("");
     }
     else if (name === "college") {
       setCollege(value);
       setCollegeLabel("");
     }
     else if (name === "password") {
       setPassword(value);
       setPasswordLabel("");
     }
     else if (name === "confirmPassword") {
       setConfirmPassword(value);
       setConfirmPasswordLabel("");
     }
   };

   let currentStep = 1;

   const nextStep = (current, next) => {
     document.getElementById(`step${current}`).style.display = 'none';
     document.getElementById(`step${next}`).style.display = 'block';
     currentStep = next;
   };

   const prevStep = (current, prev) => {
     document.getElementById(`step${current}`).style.display = 'none';
     document.getElementById(`step${prev}`).style.display = 'block';
     currentStep = prev;
   };





  const handleSubmit = async (e) => {
    e.preventDefault();

    setVisibleAlert(true);

    const formData = {
       name: name,
       email: email,
       phone: phone,
       DOB: date,
       city: phone,
       college: college,
       password: password,
    };

    try {
      const response = await axios.post(
        "https://aurora-nokc.onrender.com/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form data sent successfully:", response.data);
      toast.success("Registered Succesfully");
    } catch (error) {
      console.error("Error sending form data:", error);
      toast.error("Not registered");
    }
  };

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
    var form = document.querySelector(".formContainer");
    img_grid.style.filter = `opacity(${alpha})`;
    image.style.filter = `opacity(${alpha})`;
    console.log(window.height);

    if (screen.height >= 700) {
      {
        window.addEventListener("scroll", () => {
          document.querySelector(".intro").style.position = "fixed";
          document.querySelector(".intro").style.top = "200px";
          const scrollPosition = window.scrollY;
          alpha = 1 - Math.min(1, (scrollPosition - 156) / 156);
          img_grid.style.filter = `opacity(${alpha})`;
          image.style.filter = `opacity(${alpha})`;
          img_grid.style.filter = `opacity(${alpha})`;
          image.style.filter = `opacity(${alpha})`;
          console.log(scrollPosition);
          if (scrollPosition < 1000) {
            background.style.position = "sticky";
            background.style.top = "0px";
               background.style.backgroundSize = `${100 + scrollPosition / 120}% ${100 + scrollPosition / 120
               }%`;
             text.style.backdropFilter = `brightness(${100 + (70 * (scrollPosition - 333)) / 667
               }%)`;

             auroratext.style.cssText = `top:${35 - (10 * scrollPosition) / 667
               }%;transform:scale(${1 - (0.2 * scrollPosition) / 667
               });color:rgba(255,2555,255,${1 - (2 * scrollPosition) / 667})`;
            after_text.style.cssText = `top:${Math.max(
              35,
              51 - (16 * (scrollPosition - 333)) / 334
            )}%;transform:scale(${
              1 - (0.2 * scrollPosition) / 667
            });color:rgba(255,2555,255,${(2 * (scrollPosition - 333)) / 667})`;
          } else if (scrollPosition > 653 && scrollPosition < 1000) {
            introhead.style.color = "black";
            discription.style.color = "black";
            video_player.style.filter = "opacity(0)";
          } else if (scrollPosition > 1000 && scrollPosition < 1831) {
          } else if (scrollPosition > 653 && scrollPosition < 1000) {
            introhead.style.color = "black";
            video_player.style.filter = "opacity(0)";
          } else if (scrollPosition > 1000 && scrollPosition < 1831) {
            background.style.position = "relative";
            background.style.top = "535px";
            introhead.style.color = "black";
            discription.style.color = "black";
          } else if (scrollPosition > 1831 && scrollPosition < 2100) {
            introhead.style.color = `rgba(255,255,255,${Math.min(
              1,
              (scrollPosition - 1831) / 200
            )})`;
            introhead.style.fontSize = `${Math.min(
              5.8,
              (5.02 * scrollPosition) / 1831
            )}rem`;
          } else if (scrollPosition > 2100 && scrollPosition < 2400) {
            introhead.style.marginTop = `${Math.max(
              -18,
              (-18 * (scrollPosition - 2100)) / 300
            )}vh`;
            introhead.style.fontSize = `${Math.min(
              5.8,
              5.8 * (1 - (scrollPosition - 2100) / 3000)
            )}rem`;
            discription.style.color = "black";
          } else if (scrollPosition > 2400 && scrollPosition < 2750) {
            discription.style.color = `rgba(255,255,255,${
              (scrollPosition - 2400) / 750
            })`;
            document.querySelector(".intro").style.position = "fixed";
            document.querySelector(".intro").style.top = "200px";
            video_player.setAttribute("controls", false);
            form.style.visibility = "hidden";
            video_player.pause();
            video_player.style.filter = `opacity(${Math.max(
              0,
              (3700 - scrollPosition) / 300
            )})`;
            video.style.filter = "opacity(0)";
            // video_player.style.visibility="hidden"
          } else if (scrollPosition > 2750) {
            video_player.style.visibility = "visible";

            document.querySelector(".intro").style.position = "relative";
            document.querySelector(".intro").style.top = "1900px";
            video_player.setAttribute("controls", true);
            video_player.play();
            video.style.filter = `opacity(${Math.max(
              0,
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
          if (scrollPosition > 3500) {
            form.style.visibility = "visible";
            counter.style.cssText = ` background: -webkit-linear-gradient(180deg,rgba(255,0,0,${
              (scrollPosition - 3500) / 300
            }), rgb(255,155,0,${(scrollPosition - 3700) / 500}));
            -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`;
            form.style.filter = "opacity(0);";
          }
          if (scrollPosition > 3750) {
            form.style.filter = `opacity(${(scrollPosition - 3750) / 50})`;
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
      }
    } else if (screen.height <= 700) {
      window.addEventListener("scroll", () => {
        console.log(" lhell");
        document.querySelector(".intro").style.position = "fixed";
        document.querySelector(".intro").style.top = "200px";
        const scrollPosition = 0.7 * window.scrollY;
        console.log(scrollPosition);
        alpha = 1 - Math.min(1, (scrollPosition - 156) / 156);
        img_grid.style.filter = `opacity(${alpha})`;
        image.style.filter = `opacity(${alpha})`;
        img_grid.style.filter = `opacity(${alpha})`;
        image.style.filter = `opacity(${alpha})`;
        form.style.cssText += "transform:scale(0);";

        if (scrollPosition < 653) {
          background.style.position = "sticky";
          background.style.top = "0px";
          background.style.backgroundSize = `${200 + scrollPosition / 120}% ${
            90 + scrollPosition / 120
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
          introhead.style.color = "black";
          discription.style.color = "black";
          video_player.style.filter = "opacity(0)";
        } else if (scrollPosition > 653 && scrollPosition < 933) {
          background.style.position = "absolute";
          background.style.top = "180px";
          introhead.style.color = `rgba(255,255,255,${Math.min(
            1,
            (scrollPosition - 700) / 200
          )})`;
          introhead.style.fontSize = `${Math.min(
            5.8,
            (5.02 * scrollPosition) / 931
          )}rem`;
        } else if (scrollPosition > 840 && scrollPosition < 1353) {
          introhead.style.marginTop = `${Math.max(
            -50,
            (-50 * (scrollPosition - 840)) / 500
          )}vh`;
          introhead.style.fontSize = `${Math.min(
            5.8,
            5.8 * (1 - (scrollPosition - 840) / 3000)
          )}rem`;
          discription.style.color = "black";
          video_player.style.filter = "opacity(0)";
        } else if (scrollPosition > 1353 && scrollPosition < 1600) {
          discription.style.color = `rgba(255,255,255,${
            (scrollPosition - 1353) / 750
          })`;
          document.querySelector(".intro").style.position = "fixed";
          document.querySelector(".intro").style.top = "200px";
          video_player.setAttribute("controls", false);
          video_player.pause();
        } else if (scrollPosition > 1600) {
          document.querySelector(".intro").style.position = "relative";
          document.querySelector(".intro").style.top = "2010px";
          video_player.setAttribute("controls", true);

          video.style.filter = `opacity(${Math.min(
            1,
            (scrollPosition - 1600) / 300
          )})`;
        }
        if (scrollPosition > 1715) {
          video_player.play();
        }

        if (scrollPosition > 1900) {
          video_player.pause();
          video.style.filter = `opacity(${Math.max(
            0,
            (2210 - scrollPosition) / 300
          )})`;
        }
        if (scrollPosition > 2000) {
          counter.style.cssText = ` background: -webkit-linear-gradient(180deg,rgba(255,0,0,${
            (scrollPosition - 2000) / 300
          }), rgb(255,155,0,${(scrollPosition - 2000) / 500}));
            -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`;
          form.style.cssText += "transform:scale(0);";
        }
        if (scrollPosition > 2100) {
          form.style.cssText += "transform:scale(1)";

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
          if (scrollPosition > 2200) {
            form.style.filter = `opacity(${(scrollPosition - 2200) / 200})`;
          }
          if (reg.value == 0) {
            incrementor("reg_counter", 0, 4000, 1);
          }
        }
      });
    }
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
      <Toaster position="top-center" reverseOrder={false} />
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
          <div class="cursor"></div>
          <div class="cursor2"></div>
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
            <div className="cursor">
              <div className="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                  <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                </svg>
              </div>

              <div className="cursor__ball cursor__ball--small">
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
                <div className="input-control tab" id="step1">
                  <div className="field">
                    <label className="input-label" htmlFor="name">
                      {nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      name="name"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">

                    <label htmlFor="DOB"> {dateLabel}</label>

                    <label className="input-label" htmlFor="firstName">
                      {firstNameLabel}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      name="firstName"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="lastName"> {lastNameLabel}</label>

                    <input
                      type="date"
                      id="date"
                      value={date}
                      name="date"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email"> {emailLabel}</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="phone">{phoneLabel}</label>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      name="phone"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="submClass">
                    <button className="regButton"
                      id="regButton" onClick={(event) => { event.preventDefault(); nextStep(1, 2); }}>NEXT</button>
                  </div>
                </div>

                <div className="input-control control2 tab" id="step2" style={{ display: 'none' }}>
                  <div className="field">
                    <label className="input-label" htmlFor="city">
                      {cityLabel}
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      name="city"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="college"> {collegeLabel}</label>
                    <input
                      type="text"
                      id="college"
                      value={college}
                      name="college"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="password"> {passwordLabel}</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      name="password"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="confirmPassword">{confirmPasswordLabel}</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      name="confirmPassword"
                      onChange={handleInputChange}
                      className="focus"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="submClass1 ">
                    <button className="regButton"
                      id="regButton" onClick={(event) => { event.preventDefault(); prevStep(2, 1); }}>PREVIOUS</button>
                    <button
                      className="regButton"
                      id="regButton"
                      onClick={handleSubmit}
                    >
                      <p>SUBMIT</p>
                    </button>
                  </div>

                <div className="submclassName">
                  <button
                    className="regButton"
                    id="regButton"
                    onClick={handleSubmit}
                  >
                    <p>Submit</p>
                  </button>

                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
