import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <div className="w-1/4 flex space-x-3">
          <BsFacebook className="text-blue-600" />
          <BsTwitter className="text-blue-400" />
          <BsPinterest className="text-red-600" />
          <BsInstagram className="text-red-800" />
        </div>
        <div className="w-2/4">jjj</div>
        <div className="bg-black w-1/4">hhh</div>
      </div>
    </nav>
  );
};

export default Navbar;
