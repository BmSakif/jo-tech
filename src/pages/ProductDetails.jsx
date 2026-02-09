import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowLeft, Shield, Truck, RotateCcw, Heart } from 'lucide-react';
import { useWishlist } from '../WishlistContext';

import { products as allProducts } from '../data/products';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const product = allProducts.find(p => p.id === parseInt(id));
    const isLoved = product ? isInWishlist(product.id) : false;

    if (!product) {
        return <div className="pt-40 text-center">প্রোডাক্ট পাওয়া যায়নি!</div>;
    }

    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <Link to="/shop" className="flex items-center gap-2 text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light mb-8 font-bold transition-colors">
                <ArrowLeft size={20} /> কেনাকাটায় ফিরে যান
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-dark/40 rounded-[50px] p-8 aspect-square flex items-center justify-center shadow-inner overflow-hidden border border-dark/5 dark:border-white/5 relative"
                >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-[30px]" />
                    <button
                        onClick={() => toggleWishlist(product)}
                        className={`absolute top-8 right-8 p-4 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 ${isLoved ? 'bg-red-500 text-white scale-110' : 'bg-white/80 dark:bg-dark/80 text-red-500 hover:scale-110'}`}
                    >
                        <Heart size={24} fill={isLoved ? "currentColor" : "none"} />
                    </button>
                </motion.div>

                {/* Details */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col"
                >
                    <span className="text-sm font-black text-dark/40 dark:text-light/40 uppercase tracking-[4px] mb-4">{product.category}</span>
                    <h1 className="text-5xl font-black mb-6 leading-tight">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-1 text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1 rounded-full">
                            <Star size={18} fill="currentColor" /> {product.rating} ({((product.id * 13) % 40) + 10} টি রিভিও)
                        </div>
                        <span className="text-green-500 font-bold">স্টক আছে</span>
                    </div>

                    <p className="text-xl text-dark/70 dark:text-light/70 mb-10 leading-relaxed font-medium italic">
                        "{product.desc}"
                    </p>

                    <div className="text-5xl font-black mb-10">{product.price}</div>

                    <div className="flex gap-4 mb-12">
                        <motion.button
                            onClick={() => addToCart(product)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-grow py-5 bg-dark dark:bg-light text-light dark:text-dark rounded-3xl font-black text-xl shadow-2xl flex items-center justify-center gap-3"
                        >
                            <ShoppingBag size={24} /> কার্টে যোগ করুন
                        </motion.button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 border-t border-dark/10 dark:border-white/10 pt-10">
                        <div className="flex flex-col items-center text-center gap-2">
                            <Shield className="text-blue-500" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">১ বছরের ওয়ারেন্টি</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <Truck className="text-green-500" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">দ্রুত ডেলিভারি</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <RotateCcw className="text-orange-500" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">৭ দিনের রিটার্ন পলিসি</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ProductDetails;
