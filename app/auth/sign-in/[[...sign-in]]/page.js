"use client";
import { SignIn } from "@clerk/nextjs";
import { FaLongArrowAltRight } from "react-icons/fa";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center lg:w-3/4">
        {/* Show Sign In section only */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome Back!</h2>
          <p className="text-gray-600 text-lg mb-8">
            Save, organize, and manage your passwords with security.
          </p>
          {/* Display the Sign In component below the welcome message */}
          <SignIn path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" redirectUrl="/main" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
