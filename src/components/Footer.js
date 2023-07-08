import React from "react";
import { Link } from "react-router-dom";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";
import PortfolioIcon from "./icons/PortfolioIcon";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-10 bg-fill w-full h-14 text-xl flex justify-between px-6 shadow-footer">
      <div className="self-center text-lg">
        {new Date().getFullYear()} &copy; All Rights Reserved
      </div>

      <div className="self-center gap-x-8 flex">
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
          to={"https://portfolio-nine-ruddy-91.vercel.app/"}
          className="hover:-translate-y-1 transition duration-200"
          target="_blank"
        >
          <PortfolioIcon className={"h-6 w-auto animate-bounce"} />
        </Link>
      </div>
      <Link
        to={"/about"}
        className="self-center transition duration-200 hover:bg-dark hover:text-fill rounded-lg px-3 py-1"
        target="_blank"
      >
        About
      </Link>
    </footer>
  );
};

export default Footer;
