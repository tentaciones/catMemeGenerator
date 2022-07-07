import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsSearch,
} from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <div className="flex mt-3">
        <div className="w-1/4 flex space-x-3 justify-center">
          <BsFacebook className="text-blue-600 text-2xl" />
          <BsTwitter className="text-blue-400 text-2xl" />
          <BsPinterest className="text-red-600 text-2xl" />
          <BsInstagram className="text-red-800 text-2xl" />
        </div>
        <div className="w-2/4">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Write</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="bg-black w-1/4">
          <BsSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
