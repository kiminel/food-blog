import React from "react";
import Wave from "../components/icons/Wave";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex items-center">
      <div className="px-4 grid lg:grid-cols-2">
        <div className="w-full flex justify-center pb-12 md:pb-0">
          <img
            className="w-auto h-auto max-h-[800px]"
            src={"/images/Buffalo.png"}
            alt={"South African Food Blog"}
          />
        </div>

        <div className="self-center text-center col-span-1 flex flex-col">
          <div className="text-3xl font-extrabold animate-bounce">
            Hello there!
          </div>
          <h2 className="text-xl py-4">
            My name is Kimi{" "}
            <div className="self-center py-2 flex justify-center animate-wave">
              <Wave className={"h-10 w-10"} />
            </div>
          </h2>
          <p className="italic">
            I'm a passionate Software Engineer/ Full Stack Developer who enjoys
            learning and creating new things!
          </p>
          <div className="py-8">
            <div className="transform hover:scale-125 transition duration-500 ease-in-out">
              <Link
                className="bg-dark text-fill p-4 rounded-lg text-lg "
                target="_blank"
                to="https://portfolio-kimi-nel.vercel.app/"
              >
                Check out my Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
