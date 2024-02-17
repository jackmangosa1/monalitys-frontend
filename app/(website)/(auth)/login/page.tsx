"use client";
import Container from "@/app/landing/components/layouts/Container";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Illustration from "../assets/illustration.svg";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <Container className="flex gap-10 p-14">
      <div className="flex flex-1 flex-col gap-8 lg:px-20 lg:pt-16">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold sm:text-3xl">Sign In</p>
          <p className="text-themeGrayText  text-sm  font-medium sm:text-base">
            Welcome please enter your details
          </p>
        </div>

        <div className="flex flex-col gap-8 text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <button className="bg-themeBlack text-themeWhite px-8 py-2 rounded-md">
            Sign In
          </button>
          <button className="flex gap-2 items-center justify-center bg-transparent border-2 border-gray-300 text-themeBlack px-8 py-2 rounded">
            <FcGoogle className="text-xl" />
            Sign In with Google
          </button>

          <p className="text-center" onClick={() => router.push("/register")}>
            Do not have an account?{" "}
            <span className="font-bold hover:cursor-pointer">Sign Up</span>
          </p>
        </div>
      </div>

      <div className="hidden w-full  md:flex md:items-center md:justify-center md:flex-1 ">
        <Image src={Illustration} alt="illustration" loading="lazy" />
      </div>
    </Container>
  );
};

export default page;
