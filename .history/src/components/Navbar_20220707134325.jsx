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
        <div className="w-1/4 flex">
          <BsFacebook className="text-blue-600" />
          <BsTwitter />
          <BsPinterest />
          <BsInstagram />
        </div>
        <div className="w-2/4">jjj</div>
        <div className="bg-black w-1/4">hhh</div>
      </div>
    </nav>
  );
};

export default Navbar;
