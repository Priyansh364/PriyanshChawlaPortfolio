import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const copyPhone = () => {
    navigator.clipboard.writeText("9407544701");
    toast("Copied", {});
  };
  const copymail = () => {
    navigator.clipboard.writeText("priyanshchawla364@gmail.com");
    toast("Copied", {});
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div id="Contact" className="container mx-auto">
        <div className="  mt-10 py-5 mb-5 text-slate-50 text-start font-serif font-bold text-3xl">
          <div className="mx-10 lg:m-0 w-fit">Contact Me :-</div>
        </div>

        <div className="mb-20 p-3 flex flex-col text-slate-300 items-center j  lg:flex-row lg:text-base text-xs lg:gap-40 gap-10 ">
          <div className="flex gap-6  p-2 ">

          <a href="mailto:priyanshchawla364@gmail.com" target="_blank">
            <img className="w-8 " src="/Gmail.png" alt="" />
          </a>
          <div className="flex justify-center items-center"> priyanshchawla364@gmail.com  </div>
          <button onClick={copymail}>
            <img className="w-4 invert" src="/copy.png" alt="" />
          </button>
          </div>
          <div className="flex  gap-6">

          <a href="tel:+919407544701" target="_blank">
            <img className="w-6 ml-3" src="/Phone.png" alt="" />
          </a>
          <div className="flex items-center">

          +91 9407544701
          </div>
          <button onClick={copyPhone}>
            <img className="w-4 invert" src="/copy.png" alt="" />
          </button>
          </div>
          <div className="flex gap-7 lg:hidden">


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
    </div>
  );
};

export default Footer;
