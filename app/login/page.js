"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
        <h1 className="text-white text-2xl mb-4">Welcome {session.user.email}</h1>
        <button
          onClick={() => signOut()}
          className="bg-white text-indigo-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition duration-300"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">CloudSky Login</h2>
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center w-full bg-gray-800 text-white px-4 py-2 rounded mb-4 shadow-md hover:bg-gray-700 transition duration-300"
        >
          <FaGithub className="mr-2" /> Sign in using GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center w-full bg-red-600 text-white px-4 py-2 rounded shadow-md hover:bg-red-500 transition duration-300"
        >
          <FaGoogle className="mr-2" /> Sign in using Google
        </button>
      </div>
    </div>
  );
}
