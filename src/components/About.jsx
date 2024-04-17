import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className=" z-1">
      <div
        id="About"
        className=" flex flex-col lg:flex-row items-center bg-slate-300   aboutback"
      >
        <div className="lg:w-1/2 w-full sm:w-f lg:px-10 flex flex-col  justify-start items-start text-justify">
          <div className="bg-eec9ac mt-10 p-5 text-slate-100 text-start font-serif font-bold text-7xl word-animation">
            Hello !
          </div>
          <div className="paragh-animation flex flex-col gap-5 text-slate-100 text-5xl text-start p-1 ml-4">
            {" "}
            <div className="font-normal lg:text-3xl text-2xl">
              I'm Priyansh, A{"    "}
              <Typewriter
                words={[
                  " MERN stack developer",
                  " selenium web tester",
                  " problem solver",
                  " team player",
                  " swimmer , badminton player",
                ]}
                loop="infinite"
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex relative m-8 justify-center">
            <img
              className=" absolute bottom-0  box z-0"
              src="https://t4.ftcdn.net/jpg/02/92/73/13/360_F_292731351_p4objwWzlIieS2Kh7kbWVWmOhNrNE5Ft.jpg"
              alt=""
            />
            <img
              className="rounded-3xl z-10 bottomin
                "
              src="/Priyansh-1.png"
              alt=" no img"
            />
          </div>
        </div>
      </div>

      <div className="px-10 container  mx-auto">
        <div className="  mt-10 py-5 mb-5 text-slate-50 text-start font-serif font-bold lg:text-3xl text-2xl">
          <div className=" w-fit">About Me :-</div>
        </div>
        <div className="flex">
          <div className="lg:flex hidden">
            <div className=" ml-3 mb-3 justify-center  flex flex-col flex-wrap gap-8 text-slate-50 text-xl text-start p-1">
              <div>
                <img
                  className="w-80 rounded-3xl"
                  src="https://www.icegif.com/wp-content/uploads/2022/12/icegif-505.gif"
                  alt=""
                />

                <div className="text-center w-80 py-3">
                  MERN-stack Developer
                </div>
              </div>
              <div>
                <img
                  className="w-80  rounded-3xl"
                  src="/Football.jpeg"
                  alt=" no img"
                />
                <div className="text-center w-80 p-3">Football</div>
              </div>
              <div>
                <img
                  className="w-80 rounded-3xl"
                  src="https://media.tenor.com/rpngWE0xZu0AAAAM/badminton.gif"
                  alt=""
                />
                <div className="text-center w-80 p-3">Badminton </div>
              </div>
              <div>
                <img
                  className="w-80 h-56 rounded-3xl"
                  src="https://i.pinimg.com/originals/a6/df/ae/a6dfae596fffbf8657844a8ca90ed5f0.gif"
                  alt=""
                />
                <div className="text-center w-80 p-3">Chess </div>
              </div>
              <div>
                <img
                  className="w-80  rounded-3xl"
                  src="https://i.pinimg.com/originals/1f/37/7a/1f377a713044a0a3ff47410b5fe07561.gif"
                  alt=""
                />
                <div className="text-center w-80 p-3">Swimming </div>
              </div>
            </div>
          </div>
          <div className=" text-slate-200 mx-auto lg:w-[50%] ">
            <div>
              <h2 className="my-3 font-semibold lg:text-3xl text-2xl text-slate-50">
                Professional Summary:
              </h2>
              <p>
                I am a proficient MERN Stack web developer hailing from
                Jabalpur, Madhya Pradesh, India. My journey into the world of
                web development began during my internship at Wipro, where I
                received comprehensive training in MEAN stack development. Over
                time, I have honed my skills and expertise, transitioning into a
                proficient developer with hands-on experience in various
                frameworks and technologies.
              </p>
              <h2 className="my-3 font-semibold lg:text-3xl text-2xl text-slate-50">
                Education:
              </h2>
              <p>
                <strong>12th:</strong> Completed 12th from Shri Chaitanya
                Educational Institution, Vizag.
              </p>
              <p>
                <strong>College:</strong> Completed college education in
                Electronics and Telecommunication from Jabalpur Engineering
                College.
              </p>

              <h2 className="my-3 font-semibold lg:text-3xl text-2xl text-slate-50">
                Professional Experience:
              </h2>
              <p>
                <ul className="list-disc ml-3">
                  <li>
                    <strong>Internship at Wipro:</strong> During my tenure at
                    Wipro, I underwent rigorous training in MEAN stack
                    development, which laid the foundation for my career in web
                    development.
                  </li>
                  <li>
                    <strong>Internship at Wipro:</strong> During my 1-year
                    tenure at Wipro, I underwent rigorous training in MERN stack
                    development and Software Development Engineer in Test
                    (SDET). I successfully completed multiple projects in both
                    domains, enhancing my skills and expertise.
                  </li>
                </ul>
              </p>
              <h2 className="my-3 font-semibold lg:text-3xl text-2xl text-slate-50">
                Technical Skills:
              </h2>
              <ul className="list-disc ml-4">
                <li>
                  MERN Stack Development: Proficient in developing web
                  applications using MongoDB, Express.js, React.js, and Node.js.
                </li>
                <li>
                  Selenium Java: Skilled in utilizing Selenium with Java for
                  automated testing purposes.
                </li>
                <li>
                  Frameworks and Tools: Experienced in utilizing TestNG,
                  Cucumber BDD, Extent Reports, Data-Driven framework, and Page
                  Object Model for efficient project development and testing.
                </li>
              </ul>
              <h2 className="my-3 font-semibold lg:text-3xl text-2xl text-slate-50">
                Achievements:
              </h2>
              <ul className="list-disc ml-4">
                <li>
                  Robotics Club: Actively participated in the Robotics club
                  during my college years, fostering an interest in coding and
                  technology.
                </li>
                <li>
                  Technirion Bhopal Zonal: Participated in the Maze Solver
                  event, where my exposure tech gave a sparking passion for
                  coding.
                </li>
              </ul>
              <h2 className="my-3 font-semibold lg:text-3xl text-2xl text-slate-50">
                Projects:
              </h2>
              <p>
                Leveraging my expertise in MERN stack development, I have
                successfully delivered multiple projects, demonstrating
                proficiency in designing and implementing scalable and efficient
                web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
