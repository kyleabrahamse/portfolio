import React from "react";
import Button from "../components/button";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <nav className="bg-slate-800">
        <ul className="flex justify-between sm:w-2/3 w-11/12 mx-auto  p-2" />
        <ul className="flex justify-between w-11/12 sm:w-2/3 mx-auto  p-2">
          <li className="c-white-100 text-white content-center text-lg">
            <Link href="/">Kyle Abrahamse</Link>
          </li>
          <div className="flex justify-center p-1 gap-2 ">
            <div className="bg-slate-900 rounded hover:bg-green-600">
              <Link
                href="https://www.linkedin.com/in/kyle-abrahamse/"
                target="_blank"
              />
              <Link href="https://www.linkedin.com/feed/" target="_blank" />
              <Link href="https://www.linkedin.com/feed/" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-10 text-teal-600 p-2 rounded hover:text-white"
                />
              </Link>
            </div>
            <div className="bg-slate-900 rounded hover:bg-green-600">
              <Link href="https://github.com/kyleabrahamse" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-teal-600 h-10 p-2 hover:text-white"
                />
              </Link>
            </div>
          </div>
          <li className="content-center">
            <Link href="/Contact">
              <Button text="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
