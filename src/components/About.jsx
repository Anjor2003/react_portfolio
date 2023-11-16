import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="max-w-[1440px] h-screen bg-[#0a192f] text-gray-300 p-4"
    >
      <div className="w-full h-full flex flex-col justify-center items-center py-0">
        <div className="max-w-[900px] w-full px-3 grid sm:grid-cols-2 gap-8">
          <div className="pb-4 sm:pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className=" max-w-[900px] w-full  grid sm:grid-cols-2 gap-8 px-3 text-gray-400">
          <div className="w-full text-3xl md:text-4xl font-bold">
            <p>Hi.I'm Alfredo, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg">
              I am passionate about building excellent software that improves
              the live of those around me. I specelize in creating software for
              clients ranging from individualssmall-businesses all the way to
              large enterprise corporations. What would you do if you had a
              software expert avaible at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
