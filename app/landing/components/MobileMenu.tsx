import React from "react";
import { IoMdClose } from "react-icons/io";

interface MobileModalProps {
  setIsOpen: (state: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: MobileModalProps) => {
  return (
    <div className="bg-themeWhite border shadow-2xl shadow-themeGrayShadow px-10 py-5 rounded-xl w-52  absolute top-5 right-5 l">
      <IoMdClose
        className="text-3xl absolute right-5"
        onClick={() => setIsOpen(false)}
      />
      <ul className="flex flex-col mt-10 font-medium hover:cursor-pointer">
        <li className="hover:text-slate-500">Home</li>
        <li className="hover:text-slate-500">Features</li>
        <li className="hover:text-slate-500">Products</li>
        <li className="hover:text-slate-500">Pricing</li>
        <li className="hover:text-slate-500">Contacts</li>
      </ul>
      <br />
      <div className="flex flex-col gap-3 items-start">
        <button className="bg-transparent border border-themeBlack px-6 py-2 rounded-3xl text-themeBlack  hover:bg-themeBlack hover:text-themeWhite w-full">
          Sign In
        </button>
        <button className="bg-themeBlack px-6 py-2 rounded-3xl text-themeWhite  hover:bg-slate-700 w-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
