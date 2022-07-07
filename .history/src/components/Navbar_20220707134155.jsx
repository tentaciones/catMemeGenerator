import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <div className="w-1/4 text-blue-600">
          <BsFacebook />
          <BsTwitter />
        </div>
        <div className="w-2/4">jjj</div>
        <div className="bg-black w-1/4">hhh</div>
      </div>
    </nav>
  );
};

export default Navbar;
