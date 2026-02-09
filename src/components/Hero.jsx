import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-dark/10 dark:bg-light/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        x: [0, -100, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-dark/5 dark:bg-light/5 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 dark:bg-light/5 text-dark/70 dark:text-light/70 text-sm font-medium mb-6 border border-dark/10 dark:border-light/10"
                    >
                        <Zap size={16} className="text-yellow-500" />
                        জো টেক - আগামী প্রজন্মের প্রযুক্তি
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        আপনার পছন্দের <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark/60 to-dark dark:from-light/60 dark:to-light">টেকনোলজি এখন</span> <br />
                        আরও হাতের কাছে।
                    </h1>

                    <p className="text-lg md:text-xl text-dark/60 dark:text-light/60 mb-10 max-w-lg">
                        সেরা মানের গ্যাজেট এবং ইলেকট্রনিক্স পণ্যগুলো খুঁজে নিন জো টেক-এ। আমরা দিচ্ছি ১০০% অরিজিনাল পণ্যের নিশ্চয়তা।
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/shop">
                            <motion.button
                                whileHover={{ scale: 1.05, x: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-dark dark:bg-light text-light dark:text-dark px-10 py-5 rounded-full font-black text-xl flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all"
                            >
                                এখনই শপ করুন <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-dark/20 dark:border-light/20 text-dark dark:text-light rounded-full font-bold"
                        >
                            সব প্রোডাক্ট দেখুন
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-dark/10 to-dark/5 dark:from-light/10 dark:to-light/5 rounded-[60px] border border-light/20 dark:border-dark/60 overflow-hidden flex items-center justify-center group">
                        {/* Dynamic Image Placeholder */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-4/5 h-4/5 bg-dark/20 dark:bg-light/20 rounded-3xl blur-2xl absolute group-hover:scale-110 transition-transform duration-700"
                        />
                        <motion.img
                            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000"
                            alt="Hero Product"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="z-20 w-4/5 h-4/5 object-cover rounded-[40px] shadow-2xl"
                        />
                    </div>

                    {/* Stats Badges */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-10 -right-10 px-6 py-4 bg-light/90 dark:bg-dark/90 backdrop-blur-md rounded-2xl border border-dark/10 dark:border-light/10 shadow-xl z-30 hidden md:block"
                    >
                        <div className="text-2xl font-bold uppercase tracking-widest text-dark dark:text-light">5k+</div>
                        <div className="text-xs text-dark/60 dark:text-light/60">সন্তুষ্ট গ্রাহক</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
