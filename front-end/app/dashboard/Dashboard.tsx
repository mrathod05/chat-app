"use client";

import { JSX } from "react";
import { useRouter } from "next/navigation";

import { ROUTE } from "@/lib/constants/route";
import { signOut } from "next-auth/react";

const Dashboard = (): JSX.Element => {
  const router = useRouter();

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut();
      router.push(ROUTE.login);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl text-black font-bold mb-4">
          Hello, Welcome Back!
        </h1>
        <p className="text-gray-600 mb-6">You are successfully logged in.</p>
        <button
          onClick={() => void handleSignOut()}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
