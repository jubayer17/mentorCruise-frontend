"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSendCode = (e) => {
    e.preventDefault();

    alert(`A code has been sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-black font-serif text-2xl font-bold font-sans mb-4 text-center">
          Forgot Password?
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Enter your email to receive a reset code.
        </p>
        <form onSubmit={handleSendCode} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email here..."
            className="w-full text-black p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition"
          >
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}
