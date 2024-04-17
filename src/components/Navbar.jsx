import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const Navbar = () => {
  const handleAbout = () => {
    const element = document.getElementById("About");

    element?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };
  const handleWork = () => {
    const element = document.getElementById("Work");

    element?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };
  const handlecontact = () => {
    const element = document.getElementById("Contact");

    element?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };
  const hamburger = (props) => {
    if (flag) {
      if (props === "About") {
        handleAbout();
        console.log("handling about");
      }
      if (props === "contact") {
        handlecontact();
        console.log("handling about");
      }
      if (props === "work") {
        handleWork();
        console.log("handling about");
      }
      console.log(props);
      setflag(false);
      console.log("flag value " + flag);
    } else {
      setflag(true);
      console.log("flag value" + flag);
    }
  };

  const [flag, setflag] = useState(false);

  return (
    <div className="z-50">
      {flag ? (
        <div className="w-full  h-full z-30 fixed bg-[#2d3745]">
          <div
            onClick={hamburger}
            className="hover:cursor-pointer fixed right-0 m-5"
          >
            <img className=" invert w-10" src="/cross.png" alt="" />
          </div>
          <div className="flex flex-col h-full text-white gap-6 justify-center items-center text-3xl">
            <div
              onClick={() => {
                let about = "about";
                hamburger(about);
              }}
              className="hover:cursor-pointer  hover:font-bold"
            >
              About
            </div>
            <div
              onClick={() => {
                let about = "work";
                hamburger(about);
              }}
              className="hover:cursor-pointer hover:font-bold"
            >
              Work
            </div>
            <div
              onClick={() => {
                let about = "contact";
                hamburger(about);
              }}
              className="hover:cursor-pointer hover:font-bold"
            >
              Contact
            </div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}

      <div className="w-full  p-4 text-white flex justify-between  nav">
        <div className="font-medium  text-xl text ">
          <div
            onClick={handleAbout}
            className="flex items-center gap-6 hover:cursor-pointer hover:font-bold"
          >
            <img
              className="w-6 hover:cursor-pointer hover:font-bold "
              src="/fav.png"
              alt=" no"
            />
            Priyansh Chawla
          </div>
        </div>
        <div>
          <img
            onClick={hamburger}
            className="w-7 lg:hidden flex invert"
            src="/hamburger.png"
            alt=""
          />
        </div>
        <div className="lg:flex justify-center items-center hidden gap-5">
          <div
            onClick={handleAbout}
            className="hover:cursor-pointer hover:font-bold"
          >
            About
          </div>
          <div
            onClick={handleWork}
            className="hover:cursor-pointer hover:font-bold"
          >
            Work
          </div>
          <div
            onClick={handlecontact}
            className="hover:cursor-pointer hover:font-bold"
          >
            Contact
          </div>
          <a href="https://wa.me/919407544701" target="_blank">
            <img className="w-8 ml-3" src="/Whatsapp.png" alt="" />
          </a>
          <a href="mailto:priyanshchawla364@gmail.com" target="_blank">
            <img className="w-8 ml-3" src="/Gmail.png" alt="" />
          </a>
          <a href="https://www.instagram.com/priyansh364/" target="_blank">
            <img className="w-10" src="/inst.png" alt="" />
          </a>
          <a href="https://github.com/Priyansh364" target="_blank">
            <img className="w-8" src="/git.png" alt="" />
          </a>
          <div>
            <a href="https://www.canva.com/design/DAFsWJ0vvRE/_4P33t2XYNduTTRjiHAXzQ/view?utm_content=DAFsWJ0vvRE&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
              <img className="w-8" src="/CV.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
