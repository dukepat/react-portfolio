import React from "react";
import Typed from "react-typed";
import Heroimg from "../images/hero-img.png";
import CVpdf from "../images/CV_Ojo_Patrick_Duke.pdf";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1000px] w-full h-screen mt-24 mx-auto flex justify-center text-left p-4 flex-col md:flex-row items-center md:mt-[-96px] md:p-0">
        <div className="p-3 md:flex-col md:mr-20">
          <p className="text-[#38AFC7] font-bold ">Welcome to My world</p>
          <div className="md:flex-col">
            <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold lg:py-4 ">
              I'm
            </h1>
            <p className="lg:text-5xl md:text-4xl text-3xl font-bold md:py-3 md:pb-5 text-[#4ADE80]  "> 
              Ojo Patrick Duke
            </p>
            <Typed
              className="lg:text-3xl md:text-3xl text-3xl font-bold md:py-3 md:pb-5 text-white  "
              strings={["a Blockchain Developer", "a Remote Sensing Researcher", "a GIS Specialist"]}
              typeSpeed={70}
              backSpeed={30}
              loop
            />
          </div>
          <p className="text-[#38AFC7] text-sm font-bold pt-2">
           Hello! I'm Patrick.
           Blockchain Developer and Teacher from Lagos, Nigeria.
           Building smart contracts,learning new things.
           I'm very glad indeed to connect with you!
          </p>
          <button
            type="button"
            className=" border border-green-500 font-bold bg-[#4ADE80] text-black rounded-md px-4 py-3 mt-4 hover:scale-110 duration-300"
          > <a href= {CVpdf} download >
              Download CV
          </a>
            
          </button>
        </div>

        <img
          src={Heroimg}
          alt=""
          className="w-3/4 mx-auto md:w-2/3 mt-40 object-contain rounded-2xl shadow-2xl block md:mt-10 hover:scale-110 duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
