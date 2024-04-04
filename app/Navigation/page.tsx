import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-teal-900">
        <ul className="flex justify-between w-1/2 mx-auto  p-2">
          <li className="c-white-100 text-white content-center text-lg">
            Kyle Abrahamse
          </li>
          <li>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
