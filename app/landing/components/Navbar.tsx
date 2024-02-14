"use client";
import Container from "./layouts/Container";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className="relative px-4 sm:px-16">
      <nav className="flex justify-between items-center pt-5">
        <p className="font-bold text-xl hover:cursor-pointer">Monalytics</p>
        <ul className="hidden lg:flex md:gap-8 md:font-bold md:hover:cursor-pointer">
          <li className=" hover:text-slate-500">Home</li>
          <li className=" hover:text-slate-500">Features</li>
          <li className=" hover:text-slate-500">Products</li>
          <li className=" hover:text-slate-500">Pricing</li>
          <li className=" hover:text-slate-500">Contact</li>
        </ul>

        <div className="hidden lg:flex md:gap-8">
          <button className="hover:text-slate-500">Sign In</button>
          <button className="bg-themeBlack px-6 py-2 rounded-3xl text-themeWhite  hover:bg-slate-700">
            Sign Up
          </button>
        </div>

        <RiMenu3Fill
          className="lg:hidden text-xl"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </nav>
    </Container>
  );
};

export default Navbar;
