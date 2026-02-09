import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <Link to="/">
                        <div className="text-3xl font-black tracking-tighter flex items-center gap-2">
                            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                                <img src="/logo.svg" alt="JO TECH Logo" className="w-full h-full object-contain" />
                            </div>
                            JO TECH
                        </div>
                    </Link>
                    <p className="text-light/50 font-medium">
                        বাংলাদেশের সবচেয়ে বিশ্বস্ত গ্যাজেট শপ। আমরা আপনার জীবনকে সহজ করতে নিয়ে আসি আধুনিক প্রযুক্তি।
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ y: -5, color: '#e3e1da' }}
                                className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center text-light/40 transition-colors"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-8">লিংকসমূহ</h3>
                    <ul className="space-y-4">
                        {[
                            { name: 'হোম', path: '/' },
                            { name: 'শপ', path: '/shop' },
                            { name: 'ক্যাটেগরি', path: '/#categories' },
                            { name: 'আমাদের সম্পর্কে', path: '/#about' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="text-light/40 hover:text-light transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-xl font-bold mb-8">কাস্টমার সার্ভিস</h3>
                    <ul className="space-y-4">
                        {['ডেলিভারি পলিসি', 'রিটার্ন পলিসি', 'ওয়ারেন্টি গাইড', 'যোগাযোগ'].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-light/40 hover:text-light transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-8">সরাসরি যোগাযোগ</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 text-light/40">
                            <MapPin size={20} className="text-light flex-shrink-0" />
                            <span>বনানী, ঢাকা-১২১৩, বাংলাদেশ</span>
                        </li>
                        <li className="flex items-center gap-4 text-light/40">
                            <Phone size={20} className="text-light flex-shrink-0" />
                            <span>+৮৮০ ১৮০০-০০০০০০</span>
                        </li>
                        <li className="flex items-center gap-4 text-light/40">
                            <Mail size={20} className="text-light flex-shrink-0" />
                            <span>support@jotech.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-light/20 font-bold">
                <p>© ২০২৬ জো টেক। সকল স্বত্ব সংরক্ষিত।</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-light transition-colors">প্রাইভেসি পলিসি</a>
                    <a href="#" className="hover:text-light transition-colors">টার্মস অফ সার্ভিস</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
