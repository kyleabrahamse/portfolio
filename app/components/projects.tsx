import Link from "next/link";
import React from "react";

import Image from "next/image";
import Button from "./button";

const Projects = () => {
  return (
    <div className="pt-20 pb-20">
      <h1 className="text-center text-4xl">Projects</h1>
      <div className="flex gap-12 justify-center text-center pt-10">
        <div className="P-container flex flex-col">
          <Image
            src="/images/leopard.png"
            alt="Project"
            width={1000}
            height={1000}
            className="bg-cover h-80 w-96 object-cover"
          />
          <h2 className="text-2xl pt-4">Pilanesberg Leopard Project</h2>
          <p className="text-lg pt-4">
            A website to help track and identify leopards fostering conservation
            efforts within the Pilanesberg Game Reserve in South Africa.
          </p>
          <div className="">
            <p className="text-2xl pt-5 pb-5">React | SCSS</p>
            <Link
              href="https://pilanesberg-leopard-project.netlify.app/"
              target="_blank"
            >
              <Button text="launch" />
            </Link>
          </div>
        </div>
        <div className="P-container flex flex-col">
          <Image
            src="/images/holiday.png"
            alt="project"
            width={500}
            height={500}
            className="bg-cover h-80 w-96 object-cover"
          />
          <h2 className="text-2xl pt-4">A Holiday Keeper</h2>
          <p className="text-lg pt-4">
            An app to keep track of holiday destinations a user wants to visit
          </p>
          <div className="mt-auto">
            <p className="text-2xl pt-5 pb-5 mt-auto">
              {" "}
              Javascript | Firebase{" "}
            </p>
            <Link
              href="https://our-holiday-planner.netlify.app/"
              target="_blank"
            >
              <Button text="launch" />
            </Link>
          </div>
        </div>
        <div className="P-container flex flex-col">
          <Image
            src="/images/recipe.png"
            alt="project"
            width="500"
            height="500"
            className="bg-cover h-80 w-96 object-cover"
          />
          <h2 className="text-2xl pt-4">Recipe Planner</h2>
          <p className="text-lg pt-4">
            A recipe planner that generates recipes and a shopping list for the
            number of days selected.
          </p>
          <div className="mt-auto">
            <p className="text-2xl pt-5 pb-5">Javascript | HTML | CSS</p>
            <Link
              href="https://our-recipe-planner.netlify.app/"
              target="_blank"
            >
              <Button text="launch" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
