"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GoogleIcon from "@/assets/google-svg.svg";

import { signIn } from "next-auth/react";

export default function MenteeSignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("mentee");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ username, password, userType: activeTab });
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    if (tab === "mentor") {
      router.push("/mentor");
    } else {
      router.push("/mentee");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Log in</h1>
        <div className="flex mb-8 border-b border-gray-200">
          <button
            className={`flex-1 py-3 text-base font-medium transition-colors ${
              activeTab === "mentee"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabSwitch("mentee")}
          >
            I&apos;m a mentee
          </button>
          <button
            className={`flex-1 py-3 text-base font-medium transition-colors ${
              activeTab === "mentor"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabSwitch("mentor")}
          >
            I&apos;m a mentor
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>
        <button
          onClick={() => signIn("google", { callbackUrl: "/home" })}
          className="w-full flex items-center justify-center border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors mb-6"
        >
          <Image
            src={GoogleIcon}
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-black">Log in with Google</span>
        </button>
        <a href="#" className="text-teal-600 hover:underline text-sm">
          Forgot password?
        </a>
      </div>
    </div>
  );
}
