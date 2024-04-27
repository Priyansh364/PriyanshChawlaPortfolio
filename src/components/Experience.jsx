import React from "react";

const Experience = () => {
  return (
    <div id="Work" className=" mx-6 min-h-screen">
      <div className="w-[90%] mt-8 h-1 bg-slate-400 mx-auto"></div>
      <div className=" container mx-auto">
        <div className=" mt-10 py-5 mb-5 text-slate-50 text-start font-serif font-bold text-xl lg:text-3xl">
          Professional Experience :-
        </div>
        <div className="flex gap-3 w-full">
          <div className="absolute -left-[800%] lg:left-0 lg:relative">
            <img
              className=" "
              src="https://cdn.videoplasty.com/animation/chill-coding-programming-lo-fi-animation-stock-animation-21874-1024x576.jpg"
              alt=""
            />
          </div>
          <div className="lg:mx-10 text-xs sm:text-lg text-slate-300 w-full">
            <div className=" lg:w-[80%]">
              In the dynamic landscape of web development, I navigate through
              complexities to create digital solutions that exceed expectations,
              blending creativity with technical prowess.
            </div>
            <div className="flex mt-10 justify-between">
              <div className=" text-xl lg:text-2xl">Wipro-India</div>

              <div className="flex items-center">2023 - Present</div>
              <div></div>
            </div>
            <div className="flex justify-between">(Project Engineer)
            <div className="flex items-center pr-6">Bengaluru</div>
            <div></div>

            </div>
            <div className="flex mt-10 justify-between">
              <div className=" text-xl lg:text-2xl">Wipro-India</div>
              <div className="flex items-center">2022-23</div>
              <div></div>
            </div>
            <div>(Full-Stack Intern)</div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-20 h-1 bg-slate-400 mx-auto"></div>

      <div className=" container mx-auto">
        <div className="bg-eec9ac mt-10 py-5 mb-5 text-slate-50 text-start font-serif font-bold text-2xl lg:text-3xl">
          Things I'm good at :-
        </div>
        <div className="flex lg:flex-row flex-col justify-around h-full text-white">
          <div className="lg:w-1/2  flex flex-col gap-5 justify-center text-3xl text-center">
            Web Development
            <div >Basic</div>
            <div className="flex justify-center">

            <img className="invert w-96 text-center" src="/images.png" alt="" />
              </div>
            <div className="pt-10">MERN Stack</div>
            <div className="flex gap-10 flex-wrap justify-center">

            <img className="  text-center" src="/MERN.png" alt="" />
            
              </div>
          </div>
          
          <div className="  lg:border-l lg:border-red-100 flex flex-col gap-5 text-3xl text-center lg:w-1/2">
            Web Testing
          
            <div className="flex relative  justify-center">
              <div className="w-[12%] h-[27%] absolute bg-[#cfffca] top-[62%]"> <img className="mt-1" src="/exel.png" alt="" />
              <div className="text-black sm:text-base text-xs sm:mt-3 lg:mt-0 font-bold">Exel</div>
              </div>

              <img className=" w-[90%] text-center" src="/selenium.png" alt="" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Experience;
