import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { useCart } from '../CartContext';
import { Moon, Sun, ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { totalItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'হোম', path: '/' },
        { name: 'শপ', path: '/shop' },
        { name: 'ক্যাটেগরি', path: '/#categories' },
        { name: 'আমাদের সম্পর্কে', path: '/#about' }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] max-w-7xl z-50 pt-2"
        >
            <div className="bg-white/40 dark:bg-dark/40 backdrop-blur-xl border border-dark/10 dark:border-light/10 rounded-[50px] px-6 py-3 flex items-center justify-between shadow-xl">
                {/* Logo */}
                <Link to="/">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold tracking-tighter flex items-center gap-2"
                    >
                        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                            <img src="/logo.svg" alt="JO TECH Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-dark dark:text-light">JO TECH</span>
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <motion.div key={item.name}>
                            <Link
                                to={item.path}
                                className={`transition-colors hover:text-dark dark:hover:text-light ${location.pathname === item.path
                                    ? 'text-dark dark:text-light font-bold underline underline-offset-4'
                                    : 'text-dark/70 dark:text-light/70'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-dark/5 dark:bg-light/10 text-dark dark:text-light transition-colors relative h-10 w-10 flex items-center justify-center overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{ y: 20, opacity: 0, rotate: -45 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: -20, opacity: 0, rotate: 45 }}
                                transition={{ duration: 0.3 }}
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>

                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/cart">
                            <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-dark dark:text-light relative">
                                <ShoppingCart size={20} />
                                <AnimatePresence>
                                    {totalItems > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold"
                                        >
                                            {totalItems}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </Link>
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-dark dark:text-light"><User size={20} /></motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-dark dark:text-light"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-light/95 dark:bg-dark/95 backdrop-blur-xl rounded-3xl p-6 border border-light/20 dark:border-dark/60 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl font-medium text-dark dark:text-light border-b border-dark/10 dark:border-light/10 pb-2"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex justify-between items-center pt-4">
                                <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="flex gap-4 items-center">
                                    <div className="relative">
                                        <ShoppingCart size={24} className="text-dark dark:text-light" />
                                        {totalItems > 0 && (
                                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                                                {totalItems}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-dark dark:text-light font-medium">কার্ট দেখুন</span>
                                </Link>
                                <User size={24} className="text-dark dark:text-light" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
