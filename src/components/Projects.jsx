import React from "react";

const Projects = () => {
  const List=[
    {
    Link:"https://netflix-clone-am0ngv45m-priyanshs-projects-0a216056.vercel.app/",
src:"/Netflix.png",
Projectname:"Netflix-Clone",
Projectdescription:"Html, CSS"
  },
    {
    Link:"https://priyansh-spotify-clone.vercel.app/",
src:"/Spotify.png",
Projectname:"Spotify Clone",
Projectdescription:"Vite+ React - JSX ,Songs-Localstorage"
  },
    {
    Link:"https://priyansh-todo-list.netlify.app/",
src:"/Todoapp.png",
Projectname:"Todo List App",
Projectdescription:"Vite + React - JSX , Locally-Stored"
  },
    {
    Link:"https://priyansh-twitter-clone.netlify.app/",
src:"/Twitter.png",
Projectname:" Twitter Clone",
Projectdescription:"Html , CSS"
  },
    {
    Link:"https://priyansh-password-manager.vercel.app/",
src:"/passman.png",
Projectname:"Password Manager",
Projectdescription:"MERN Stack Project"
  },
    {
    Link:"https://priyansh-weather-app.vercel.app/",
src:"/Weather-app.png",
Projectname:"Weather App",
Projectdescription:"Frontend Project"
  },
  



]


  return (
    <div>
      <div className="w-[90%] mt-20 h-1 bg-slate-400 mx-auto"></div>

      <div className="container my-14 flex items-center flex-col gap-6 mx-auto">
        <div className="mt-10 py-5  text-slate-50 text-start font-serif font-bold text-3xl">
          Personal Projects:-
        </div>
        
       
        
        {List.map((item,index)=>(

        <a key={index} href={item.Link} target="_blank" className=" lg:w-full dark rounded-xl lg:gap-10 text-slate-100 flex flex-col items-center lg:flex-row">
          <img className="w-72 p-5" src={item.src} alt="" />
          <div className="p-5  ">
            <div className=" mb-3 text-3xl">{item.Projectname}</div>
            <div>{item.Projectdescription}</div>
          </div>
        </a>
        ))}


      </div>
    </div>
  );
};

export default Projects;
