import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="sm:w-2/3 w-11/12 flex flex-col sm:flex-row mx-auto gap-12 pt-20 pb-20">
      <div className="w-10/12 sm:w-2/3 flex flex-col sm:flex-row mx-auto gap-12 pt-20 pb-20">
        <h1 className="text-4xl">
          I excel as a front-end developer, proficient in React and TypeScript.
          My focus lies in harnessing the capabilities of Next.js to improve
          runtime efficiency and elevate user interaction.
        </h1>
        <div>
          <p className="text-lg pb-1">
            I&apos;m a front-end developer with a strong command of React,
            TypeScript and NextJS.
          </p>
          <p className="text-lg pb-1">
            Recently, I have embarked on a journey into the realm of testing
            with Jest, a popular testing framework for JavaScript applications.
            I aim to ensure the resilience and reliability of the codebases I
            work on, delivering robust solutions that meet the highest standards
            of quality.
          </p>
          <p className="text-lg pb-1">
            To see examples of my work please visit my
            <span className="text-orange-600 hover:text-green-500">
              <Link href="https://github.com/kyleabrahamse" target="_blank">
                {" "}
                Github profile{" "}
              </Link>
            </span>
            or follow my work log on my
            <span className="text-orange-600 hover:text-green-500">
              <Link
                href="https://www.linkedin.com/in/kyle-abrahamse-1611202a1/"
                target="_blank"
              >
                {" "}
                LinkedIn
              </Link>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
