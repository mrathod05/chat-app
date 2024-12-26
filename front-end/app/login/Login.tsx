"use client";
import { JSX, useState } from "react";
import Link from "next/link";

import { ROUTE } from "@/lib/constants/route";

const Login = (): JSX.Element => {
  const [cred, setCred] = useState({ email: "", password: "" });

  const handleCredChange = (key: keyof typeof cred, value: string): void => {
    setCred((prev) => ({ ...prev, [key]: value }));
  };

  const handleManualSignIn = async (): Promise<void> => {
    // Manual sign-in logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Log in to your account to continue
        </p>
        <div className="mb-6">
          <div className="flex flex-col gap-4">
            <input
              type="number"
              value={cred.email}
              onChange={(e) => handleCredChange("email", e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={cred.password}
              onChange={(e) => handleCredChange("password", e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              onClick={() => void handleManualSignIn()}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            Don’t have an account?
            <Link
              href={ROUTE.signUp}
              className="text-blue-500 hover:underline ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
