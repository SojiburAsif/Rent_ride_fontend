"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ChevronRight, Mail, Lock, Home } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black font-sans">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[30px] shadow-lg dark:shadow-black/30 border border-slate-100 dark:border-gray-700">

        {/* --- Home Button --- */}
        <div className="mb-6 text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Home size={16} /> Home
          </Link>
        </div>

        {/* --- Header --- */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Sign in to your account
          </p>
        </div>

        {/* --- Form --- */}
        <form className="space-y-6">
          {/* Email/Phone */}
          <div className="space-y-2 relative">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Email / Phone*
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300 pointer-events-none">
                <Mail size={16} />
              </span>
              <input
                type="text"
                placeholder="Enter your email or phone"
                className="w-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl py-3 px-4 pl-10 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-900 dark:text-white"
                aria-label="Email or phone"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2 relative">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Password*
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300 pointer-events-none">
                <Lock size={16} />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl py-3 px-4 pl-10 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-900 dark:text-white"
                aria-label="Password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300 hover:text-slate-600 dark:hover:text-white transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="#"
              className="text-sm font-semibold text-slate-400 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Sign In <ChevronRight size={20} />
          </button>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-900 px-2 text-slate-400 font-bold tracking-widest">
                Or
              </span>
            </div>
          </div>

          {/* Sign Up Link (small, not rounded) */}
          <div className="text-center">
            <Link
              href="/register"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
