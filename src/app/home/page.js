"use client";

import { useSession, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {session ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Welcome, {session.user.name || session.user.email}!
          </h1>
          <p className="mb-6 text-gray-700">You have successfully logged in.</p>
          <button
            onClick={() => signOut({ callbackUrl: "/mentee" })}
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p className="text-gray-700">You are not logged in.</p>
      )}
    </div>
  );
}
