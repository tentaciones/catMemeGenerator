import React from "react";
import { BsFacebook } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <div className="bg-black w-1/4">
          <BsFacebook />
        </div>
        <div className="w-2/4">jjj</div>
        <div className="bg-black w-1/4">hhh</div>
      </div>
    </nav>
  );
};

export default Navbar;
