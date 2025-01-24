import React from "react";
// import HowTo from "./Modals/HowTo";
import { Link } from "react-router-dom";
import { IoLink } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import HowTo from "../Modals/HowTo";

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="font-grotesk flex items-center justify-between w-full  h-[10%] px-[20px] lg:px-[40px]">
    <div className="flex items-center justify-between lg:justify-start w-full lg:w-fit">
      <Link to="/" className="text-white text-[20px] lg:text-[24px] font-bold">
        Logo
      </Link>

      <div className="lg:hidden">
      <FiMenu className="text-[25px] text-white" />

      </div>
    </div>
    <div className="hidden lg:flex items-center space-x-[25px]">
      <button
        onClick={() => setIsOpen(true)}
        className="font-[500] cursor-pointer text-white text-[25px]"
      >
        How to Play?
      </button>
      <button>
      <FaXTwitter className="text-[30px] text-white" />
      </button>
      <button className="bg-[#1E3557] flex items-center space-x-[5px] p-[13px_25px] text-white text-[18px]">
        <p className="text-[20px] font-[500]">Connect Wallet</p>
        <IoLink className="text-[25px]" />
      </button>
    </div>

    <HowTo isOpen={isOpen} setIsOpen={setIsOpen} />
  </div>
  )
}

export default Navbar
