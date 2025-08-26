"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GoogleIcon from "@/assets/google-svg.svg";

export default function MentorSignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ NEW: toggle state

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // console.log({ firstName, lastName, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
        <h1 className=" font-serif text-2xl font-bold mb-6 text-gray-900">
          Apply for the role of Mentor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              required
            />
          </div>

          {/* ✅ Password field */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-teal-600 hover:underline"
              >
                {showPassword ? "Hide Passwords" : "Show Passwords"}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"} // ✅ toggle applied
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              required
            />
          </div>
          <p className="text-black pt-2 text-sm leading-5">
            <span>– Must be at least 8 characters</span>
            <br />
            <span>– Must include one lowercase character</span>
            <br />
            <span>– Must include one uppercase character</span>
            <br />
            <span>– Must include one special character</span>
          </p>

          <button
            type="submit"
            className="cursor-pointer w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium text-sm"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-xs">Or</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/home" })}
          className="cursor-pointer w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors mb-4 text-sm"
        >
          <Image
            src={GoogleIcon}
            alt="Google"
            width={18}
            height={18}
            className="mr-2"
          />
          <span className="text-black">Sign up with Google</span>
        </button>

        <p className="cursor-pointer text-xs text-gray-600 text-center">
          Already have an account?{" "}
          <a
            href="/mentee"
            className="cursor-pointer text-teal-600 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
