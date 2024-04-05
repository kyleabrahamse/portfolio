import React from "react";
import Button from "../components/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-800">
        <ul className="flex justify-between w-11/12 sm:w-2/3 mx-auto  p-2">
          <li className="c-white-100 text-white content-center text-lg">
            <Link href="/">Kyle Abrahamse</Link>
          </li>
          <li>
            <Link href="/Contact">
            <Button text="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
