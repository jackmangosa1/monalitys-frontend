"use client";
import Container from "@/app/landing/components/layouts/Container";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Illustration from "../assets/illustration.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormInput {
  companyName: string;
  sectorOfOperation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormError {
  companyName: string;
  sectorOfOperation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormInput>({
    companyName: "",
    sectorOfOperation: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState<FormError>({
    companyName: "",
    sectorOfOperation: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormError(errors);
    if (Object.values(formError).every((error) => !error)) {
      console.log("send data to the backend");
    }
  };

  const validate = (formInput: FormInput): FormError => {
    const errors: FormError = {
      companyName: "",
      sectorOfOperation: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formInput.companyName) {
      errors.companyName = "Company name is required!";
    }
    if (!formInput.sectorOfOperation) {
      errors.sectorOfOperation = "Sector of operation is required!";
    }
    if (!formInput.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(formInput.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!formInput.password) {
      errors.password = "Password is required!";
    } else if (formInput.password.length < 4) {
      errors.password = "Password should be more than 4 characters";
    } else if (formInput.password.length > 15) {
      errors.password = "Passwords cannot exceed 15 characters";
    }

    if (!formInput.confirmPassword) {
      errors.confirmPassword = "Retype the password";
    } else if (formInput.password !== formInput.confirmPassword) {
      errors.confirmPassword = "Passwords do not macth!";
    }

    return errors;
  };

  return (
    <Container className="flex gap-10 p-14">
      <form
        className="flex flex-1 flex-col gap-8 lg:px-20"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold sm:text-3xl">Sign Up</p>
          <p className="text-themeGrayText  text-sm  font-medium sm:text-base">
            Welcome please enter your details
          </p>
        </div>

        <div className="flex flex-col gap-8 text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <label htmlFor="companyName" className="font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleFormInput}
              className="p-2 w-full outline-none border border-gray-300 rounded sm:w-auto"
            />
            <p className="text-red-500 text-lg">{formError.companyName}</p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="sectorOfOperation" className="font-medium">
              Sector of operation
            </label>
            <input
              type="text"
              name="sectorOfOperation"
              id="sectorOfOperation"
              value={formData.sectorOfOperation}
              onChange={handleFormInput}
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
            <p className="text-red-500 text-lg">
              {formError.sectorOfOperation}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormInput}
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
            <p className="text-red-500 text-lg">{formError.email}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormInput}
              id="password"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
            <p className="text-red-500 text-lg">{formError.password}</p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirm Password" className="font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleFormInput}
              id="confirmPassword"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
            <p className="text-red-500 text-lg">{formError.confirmPassword}</p>
          </div>
        </div>

        <div className="flex flex-col  gap-5">
          <button className="bg-themeBlack text-themeWhite px-8 py-2 rounded-md">
            Sign Up
          </button>
          <button className="flex gap-2 items-center justify-center bg-transparent border-2 border-gray-300 text-themeBlack px-8 py-2 rounded">
            <FcGoogle className="text-xl" />
            Sign Up with Google
          </button>

          <p className="text-center" onClick={() => router.push("/login")}>
            Already have an account?{" "}
            <span className="font-bold hover:cursor-pointer">Sign In</span>
          </p>
        </div>
      </form>

      <div className="hidden w-full  md:flex md:items-center md:justify-center md:flex-1 ">
        <Image src={Illustration} alt="illustration" loading="lazy" />
      </div>
    </Container>
  );
};

export default page;
