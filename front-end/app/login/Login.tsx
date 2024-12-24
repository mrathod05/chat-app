"use client";
import { JSX, useState } from "react";
import Link from "next/link";

import useFirebaseAuth from "@/firebase/hook/useFirebaseAuth";
import { ROUTE } from "@/lib/constants/route";

const Login = (): JSX.Element => {
  const {
    signInWithApple,
    signInWithGoogle,
    signInWithCredential,
    signInWithFacebook,
  } = useFirebaseAuth();

  const [cred, setCred] = useState({ email: "", password: "" });

  const handleCredChange = (key: keyof typeof cred, value: string): void => {
    setCred((prev) => ({ ...prev, [key]: value }));
  };

  const handleManualSingIn = async (): Promise<void> => {
    await signInWithCredential(cred.email, cred.password);
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    await signInWithGoogle();
  };

  const handleAppleSignIn = async (): Promise<void> => {
    await signInWithApple();
  };

  const handleFacebookSignIn = async (): Promise<void> => {
    await signInWithFacebook();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-slate-600 mb-6">
          Login
        </h1>
        <div className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Email Input */}
            <input
              type="email"
              value={cred.email}
              onChange={(e) => handleCredChange("email", e.target.value)}
              placeholder="Email"
              className="w-full border text-stone-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Password Input */}
            <input
              type="password"
              value={cred.password}
              onChange={(e) => handleCredChange("password", e.target.value)}
              placeholder="Password"
              className="w-full text-stone-900 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Login Button */}
            <button
              type="submit"
              onClick={() => void handleManualSingIn()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* Google Login Button */}
          <button
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            onClick={() => void handleGoogleSignIn()}
          >
            Sign in with Google
          </button>

          {/* Apple Login Button */}
          <button
            className="flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            onClick={() => void handleAppleSignIn()}
          >
            Sign in with Apple
          </button>

          {/* Facebook Login Button */}
          <button
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            onClick={() => void handleFacebookSignIn()}
          >
            Sign in with Facebook
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            {"Don't have an account?"}
            <Link href={ROUTE.signUp} className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
