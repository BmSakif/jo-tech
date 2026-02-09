import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Heart, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';

export const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isLoved = isInWishlist(product.id);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="group bg-white dark:bg-dark/40 backdrop-blur-md border border-dark/10 dark:border-white/10 rounded-[40px] p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
            <div className="absolute top-4 right-4 z-20">
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => toggleWishlist(product)}
                    className={`p-2 backdrop-blur-md rounded-full shadow-sm transition-colors ${isLoved ? 'bg-red-500 text-white' : 'bg-white/80 dark:bg-dark/80 text-red-500'}`}
                >
                    <Heart size={18} fill={isLoved ? "currentColor" : "none"} />
                </motion.button>
            </div>

            <Link to={`/product/${product.id}`}>
                <div className="aspect-square bg-white dark:bg-black/20 rounded-[30px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 overflow-hidden relative shadow-inner">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-dark/5 dark:to-light/5 opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
            </Link>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-dark/40 dark:text-light/40 uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                        <Star size={14} fill="currentColor" /> {product.rating}
                    </div>
                </div>
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-bold leading-tight text-dark dark:text-light hover:text-blue-500 transition-colors">{product.name}</h3>
                </Link>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-2xl font-black text-dark dark:text-light">{product.price}</span>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(product)}
                        className="p-3 bg-dark dark:bg-light text-light dark:text-dark rounded-2xl shadow-lg hover:shadow-dark/20 dark:hover:shadow-light/20 transition-shadow"
                    >
                        <ShoppingBag size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const ProductGrid = () => {
    // Show only first 6 products as featured
    const featuredProducts = allProducts.slice(0, 6);

    return (
        <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-4xl font-bold mb-4 italic">Featured Products</h2>
                    <p className="text-dark/60 dark:text-light/60">Explore our most popular and high-performance devices.</p>
                </div>
                <Link to="/shop">
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="text-dark dark:text-light font-bold flex items-center gap-2 border-b-2 border-dark/20 dark:border-light/20 pb-1"
                    >
                        View All <ArrowRight size={18} />
                    </motion.button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
