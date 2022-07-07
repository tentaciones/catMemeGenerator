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
        <div className="w-2/4 flex">
          <ul className="flex space-x-5">
            <li>About</li>
            <li>Contact</li>
            <li>Write</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className=" w-1/4 flex">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-7 h-7 rounded-full"
          />
          <BsSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
