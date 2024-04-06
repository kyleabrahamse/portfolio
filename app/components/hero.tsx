import React from "react";
import Link from "next/link";
import "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="hero-container text-white content-center text-center pt-16 sm:p-40">
      <div className="w-11/12 sm:w-2/3 mx-auto">
        <h1 className="text-6xl pb-5 ">Hi, Im Kyle</h1>
        <p className="text-2xl pb-10">
          I&apos;m a front-end developer with expertise in React and Typescript.
          I specialise in leveraging Next.js to optimise runtime performance and
          enhance user experiences.
        </p>
        <h2 className="text-3xl">Javascript | React | Typescript | Next.JS</h2>
        <i className="fa-brands fa-facebook"></i>
        <div className="flex justify-center p-10 gap-2 ">
          <div className="bg-blue-500 rounded hover:bg-green-600">
            <Link href="https://github.com/kyleabrahamse" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-12 text-white p-2 rounded"
              />
            </Link>
          </div>
          <div className="bg-gray-950 rounded hover:bg-green-600">
            <Link href="https://github.com/kyleabrahamse" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon h-12 p-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
