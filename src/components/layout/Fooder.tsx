"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Facebook, Twitter, Instagram, Linkedin,
    Mail, Phone, GraduationCap, BookOpen, Pencil, AtSign, Send, ArrowUp
} from "lucide-react";

const FooterPage = () => {
    const currentYear = new Date().getFullYear();

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Floating animation for background icons
    const floatingVariants = {
        animate: (i: number) => ({
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            transition: {
                duration: 5 + i,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1], // Framer Motion compatible cubic-bezier
            },
        }),
    };

    return (
        <footer className="relative bg-white dark:bg-black pt-20 pb-10 overflow-hidden border-t border-slate-100 dark:border-slate-900">

            {/* --- Floating Background Icons (Deep Colors) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    custom={1}
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-10 left-[5%] text-blue-400 dark:text-blue-500 opacity-70 dark:opacity-80"
                >
                    <GraduationCap size={50} strokeWidth={1.5} />
                </motion.div>

                <motion.div
                    custom={2}
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-40 right-[10%] text-orange-500 dark:text-orange-600 opacity-70 dark:opacity-80"
                >
                    <BookOpen size={40} strokeWidth={1.5} />
                </motion.div>

                <motion.div
                    custom={3}
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-20 left-[15%] text-emerald-500 dark:text-emerald-600 opacity-70 dark:opacity-80"
                >
                    <Pencil size={35} strokeWidth={1.5} />
                </motion.div>

                <motion.div
                    custom={4}
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-1/2 right-[5%] text-purple-500 dark:text-purple-600 opacity-70 dark:opacity-80"
                >
                    <AtSign size={45} strokeWidth={1.5} />
                </motion.div>
            </div>


            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/20">
                                <GraduationCap className="" size={28} />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">SkillBridge</h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                            Empowering learners worldwide with expert-led courses and a supportive community.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: "#2563eb", color: "#fff" }}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all duration-300 border border-slate-200 dark:border-slate-800"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-7 uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4">
                            {["About us", "Courses", "Instructor", "FAQs", "Blogs"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium flex items-center gap-2 group">
                                        <span className="w-0 h-[2px] bg-blue-600 group-hover:w-4 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-7 uppercase tracking-widest">Contact Us</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-blue-600 dark:text-blue-500"><Phone size={20} /></div>
                                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                    <p>(207) 555-0119</p>
                                    <p>(704) 555-0127</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-blue-600 dark:text-blue-500"><Mail size={20} /></div>
                                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium italic">
                                    <p>support@eduall.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="relative">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-7 uppercase tracking-widest">Subscribe</h4>
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-[30px] border border-slate-100 dark:border-slate-800">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Get latest updates & offers.</p>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white dark:bg-black border border-slate-200 dark:border-slate-700 rounded-full py-3 px-5 text-sm focus:ring-2 focus:ring-blue-600 outline-none dark:text-white"
                                />
                                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2.5 rounded-full hover:scale-105 transition-transform">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        © {currentYear} <span className="text-blue-600 dark:text-blue-500 font-bold">EduAll</span>. All Rights Reserved.
                    </p>

                    <div className="flex gap-8 text-sm font-bold text-slate-400 dark:text-slate-600">
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
                    </div>

                    {/* --- Back To Top Button --- */}
                    <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="md:absolute -top-6 right-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40 border-4 border-white dark:border-black z-20 group"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
