"use client";

import React, { JSX, useState } from "react";

import useFirebaseAuth from "@/firebase/hook/useFirebaseAuth";

const SingUp = (): JSX.Element => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const { createUserWithEmailAndPassword } = useFirebaseAuth();

  const handleCredChange = (key: keyof typeof cred, value: string): void => {
    setCred((prev) => ({ ...prev, [key]: value }));
  };

  const handleManualSingIn = (): void => {
    createUserWithEmailAndPassword(cred.email, cred.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-slate-600 mb-6">
          Sign Up
        </h1>
        <div className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Email Input */}
            <input
              type="email"
              value={cred.email}
              onChange={(e) => void handleCredChange("email", e.target.value)}
              placeholder="Email"
              className="w-full border text-stone-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Password Input */}
            <input
              type="password"
              value={cred.password}
              onChange={(e) =>
                void handleCredChange("password", e.target.value)
              }
              placeholder="Password"
              className="w-full text-stone-900 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              onClick={() => void handleManualSingIn()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Sing Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
