import React from "react";
import { Link } from "react-router-dom";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";
import PortfolioIcon from "./icons/PortfolioIcon";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-10 bg-fill w-full h-24 md:h-16 text-xl shadow-footer">
      <div className="grid grid-cols-2 md:grid-cols-3 py-4 w-full">
        <div className="flex gap-x-8 md:col-span-1 pl-8">
          <Link
            to={"https://github.com/kiminel"}
            className="hover:-translate-y-1 transition duration-200"
            target="_blank"
          >
            {" "}
            <GithubLogo className={"h-5 w-auto"} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/kimi-monique-nel-67a289191/"}
            className="hover:-translate-y-1 transition duration-200"
            target="_blank"
          >
            <LinkedInLogo className={"h-5 w-auto"} />
          </Link>
          <Link
            to={"https://portfolio-kimi-nel.vercel.app/"}
            className="hover:-translate-y-1 transition duration-200"
            target="_blank"
          >
            <PortfolioIcon className={"h-6 w-auto animate-bounce"} />
          </Link>
        </div>

        <div className="col-span-1 md:col-span-1 flex justify-end pr-8 md:justify-center">
          <Link
            to={"/about"}
            className="transition duration-200 bg-dark text-fill rounded-lg mr-4 px-3 py-1 border-[2px] hover:bg-fill hover:text-dark font-semibold"
            target="_blank"
          >
            About
          </Link>
        </div>

        <div className="text-lg col-span-3 md:col-span-1 flex justify-start pl-8 pt-2 md:pt-0 md:justify-end md:pr-8">
          {new Date().getFullYear()} &copy; All Rights Reserve
        </div>
      </div>
    </footer>
  );
};

export default Footer;
