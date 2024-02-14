import Container from "./layouts/Container";
import { RiMailSendFill } from "react-icons/ri";
import {
  FaQuoteLeft,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="bg-themeBlack text-themeWhite py-8 px-4  flex flex-col gap-16 justify-start items-start relative lg:py-10 lg:px-16 ">
      <div className="mb-6 flex flex-col gap-16">
        <p className="font-bold">Monalytics</p>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-5">
            <p className="font-bold"> Product</p>
            <ul className=" text-themeGrayText hover:cursor-pointer">
              <li>Integration</li>
              <li>Customers</li>
              <li>Pricing</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold"> Product</p>
            <ul className=" text-themeGrayText hover:cursor-pointer">
              <li>Integration</li>
              <li>Customers</li>
              <li>Pricing</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold"> Product</p>
            <ul className="text-themeGrayText hover:cursor-pointer">
              <li>Integration</li>
              <li>Customers</li>
              <li>Pricing</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:absolute md:top-36 md:right-16">
        <div className="flex items-center gap-4 font-bold">
          <RiMailSendFill />
          <p>Join our newsletter</p>
          <FaQuoteLeft className="text-3xl text-themeYellow -mt-3" />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            className="bg-themeWhiteShadow border-none rounded-3xl px-6 py-3 focus:outline-none placeholder:text-sm placeholder:text-themeGrayText"
            placeholder="hello@gmail.com"
          />
          <div className="bg-themeYellow text-themeBlack text-sm font-bold rounded-3xl  px-3 py-[0.9rem] absolute top-0 right-0 hover:cursor-pointer">
            Subscribe
          </div>
        </div>

        <div className="flex gap-4 place-content-end hover:cursor-pointer">
          <FaLinkedinIn className="rounded-full bg-themeYellow p-2 text-themeBlack text-[2rem]" />
          <FaTwitter className="rounded-full bg-themeYellow p-2 text-themeBlack text-[2rem]" />
          <FaFacebookF className="rounded-full bg-themeYellow p-2 text-themeBlack text-[2rem]" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
