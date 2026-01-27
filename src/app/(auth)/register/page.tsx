"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Eye, EyeOff, User, Phone, Mail, Camera,
  GraduationCap, Home, Lock, ArrowRight
} from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState("STUDENT");
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! Add real validation logic here.");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center py-8 px-4 transition-colors duration-500">
      <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl shadow-blue-500/5 dark:shadow-none border border-slate-100 dark:border-slate-800/50 p-8 md:p-10 text-center relative overflow-hidden">

        {/* --- Home Button Inside Form --- */}
        <Link href="/" className="absolute top-4 left-4 flex items-center gap-2 bg-white dark:bg-slate-900 p-2.5 rounded-2xl shadow-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all border border-slate-200 dark:border-slate-800 group text-[12px] font-bold tracking-wider">
          <Home size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          HOME
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-xl shadow-blue-500/20 transform -rotate-6 transition-transform">
            <User className="text-white" size={28} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Join <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-[11px] mt-1.5 font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            Create your profile in seconds
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1 rounded-2xl mb-6">
          {["STUDENT", "TUTOR"].map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${role === item
                ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
            >
              {item === "STUDENT" ? <User size={14} /> : <GraduationCap size={14} />}
              {item}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Avatar Upload */}
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="w-full h-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              {image ? <img src={image} className="w-full h-full object-cover" /> : <User className="text-slate-300 dark:text-slate-600" size={24} />}
            </div>
            <label className="absolute -bottom-1 -right-1 bg-blue-600 dark:bg-blue-500 p-1.5 rounded-lg text-white cursor-pointer hover:scale-110 transition-transform shadow-lg border-2 border-white dark:border-slate-900">
              <Camera size={12} />
              <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
            </label>
          </div>

          {/* Inputs */}
          {[
            { label: "NAME", icon: User, placeholder: "John Doe", type: "text" },
            { label: "PHONE", icon: Phone, placeholder: "+880...", type: "tel" },
            { label: "EMAIL", icon: Mail, placeholder: "hello@example.com", type: "email" }
          ].map((field) => (
            <div key={field.label} className="relative group">
              <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white text-xs font-medium"
                required
              />
            </div>
          ))}

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500" size={16} />
              <input type={showPass ? "text" : "password"} placeholder="Password" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-3 outline-none focus:border-blue-500 dark:text-white text-xs" required />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500" size={16} />
              <input type={showRePass ? "text" : "password"} placeholder="Confirm" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-3 outline-none focus:border-blue-500 dark:text-white text-xs" required />
              <button type="button" onClick={() => setShowRePass(!showRePass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {showRePass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] mt-4 text-xs tracking-widest flex items-center justify-center gap-2">
            GET STARTED
            <ArrowRight size={16} />
          </button>

          {/* Footer */}
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Already a member? <Link href="/login" className="text-blue-600 dark:text-blue-400 font-bold hover:underline ml-1">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
