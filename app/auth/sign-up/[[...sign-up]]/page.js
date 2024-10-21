"use client";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import home from "/public/images/home.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center lg:flex-row lg:w-3/4 lg:space-x-10">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Us!</h2>
          <p className="text-gray-600 text-lg mb-8">
            Save, organize, and manage your passwords with ease.
          </p>
          <Image className="rounded-xl" src={home} alt="Home" width={400} priority />
          <div className="flex items-center mt-6 text-indigo-600 font-semibold">
            <FaLongArrowAltRight className="mr-2" />
            with security
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <SignUp path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" redirectUrl="/main" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
