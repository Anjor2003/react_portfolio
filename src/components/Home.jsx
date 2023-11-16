import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="max-w-[1440px] h-screen bg-[#0a192f] lg:px-4">
      {/* container */}
      <div className="max-w-[900px] mx-auto px-4 py-14 flex flex-col justify-center h-full">
        <p className="text-orange-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alfredo Martinez
        </h1>
        <h2 className="text-3xl md:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full stack developer specializing in building (and ocassionally
          designing) excepional digital experiences. Currently, I'm focused on
          buiding responsive full-stack web application.
        </p>
        <buttton className="group text-white border-2 px-3 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600 max-w-[160px]">
          <Link to="skills" smooth={true} duration={500}>
            View More
          </Link>
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </buttton>
      </div>
    </div>
  );
};

export default Home;
