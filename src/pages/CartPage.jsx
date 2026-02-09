import React from 'react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    if (cart.length === 0) {
        return (
            <main className="pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-[60vh]">
                <ShoppingBag size={80} className="text-dark/10 dark:text-light/10 mb-6" />
                <h1 className="text-3xl font-bold mb-4">আপনার কার্ট খালি</h1>
                <p className="text-dark/60 dark:text-light/60 mb-8">কেনাকাটা শুরু করতে আমাদের শপে যান!</p>
                <Link to="/shop" className="px-8 py-3 bg-dark dark:bg-light text-light dark:text-dark rounded-full font-bold shadow-xl">শপে যান</Link>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">আপনার শপিং কার্ট</h1>

            <div className="space-y-6">
                <AnimatePresence>
                    {cart.map(item => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white/50 dark:bg-dark/50 backdrop-blur-md border border-dark/10 dark:border-light/10 p-6 rounded-[30px] flex items-center gap-6"
                        >
                            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-dark/60 dark:text-light/60 text-sm mb-2">{item.category}</p>
                                <p className="text-xl font-black">{item.price}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-dark/5 dark:bg-light/5 rounded-full px-2 py-1">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-red-500"><Minus size={16} /></button>
                                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-green-500"><Plus size={16} /></button>
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="p-3 text-red-500 hover:bg-red-500/10 rounded-full transition-colors">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-12 p-8 bg-dark dark:bg-light text-light dark:text-dark rounded-[40px] shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg opacity-80 font-medium">মোট আইটেম:</span>
                    <span className="text-2xl font-bold">{totalItems} টি</span>
                </div>
                <div className="flex justify-between items-center mb-8 border-t border-white/10 dark:border-black/10 pt-6">
                    <span className="text-2xl font-medium">সর্বমোট:</span>
                    <span className="text-4xl font-black">{totalPrice.toLocaleString('bn-BD')}৳</span>
                </div>
                <button className="w-full py-5 bg-white dark:bg-black text-dark dark:text-light rounded-3xl font-black text-xl shadow-xl hover:scale-[1.02] transition-transform">
                    চেকআউট করুন
                </button>
            </div>
        </main>
    );
};

export default CartPage;
