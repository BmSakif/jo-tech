import React, { useState } from 'react';
import { ProductCard } from '../components/ProductGrid';
import { Search } from 'lucide-react';

import { products as allProducts } from '../data/products';

const ShopPage = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ['All', 'ল্যাপটপ', 'ফোন', 'অডিও', 'এক্সেসরিজ', 'ক্যামেরা', 'গ্যাজেটস'];

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = filter === 'All' || product.category === filter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            {/* Top Search Bar Row */}
            <div className="w-full mx-auto mb-10">
                <div className="flex items-center bg-white dark:bg-dark/40 rounded-full border-2 border-dark/10 dark:border-white/10 overflow-hidden shadow-lg transition-all focus-within:border-dark/30 dark:focus-within:border-white/30">
                    <input
                        type="text"
                        placeholder="Search in Jo Tech..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-grow pl-8 pr-4 py-2.5 bg-transparent outline-none font-bold text-lg text-dark dark:text-light placeholder:text-dark/30 dark:placeholder:text-light/30"
                    />
                    <button className="bg-dark dark:bg-light hover:bg-dark/80 dark:hover:bg-light/80 text-light dark:text-dark px-10 py-2.5 transition-colors flex items-center justify-center">
                        <Search size={22} strokeWidth={3} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-black italic mb-1 tracking-tighter">আমাদের শপ</h1>
                    <p className="text-dark/40 dark:text-light/40 font-medium text-sm">আপনার কাঙ্খিত প্রোডাক্টগুলো খুঁজে নিন এখানে।</p>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-2xl border text-[10px] font-black uppercase tracking-wider transition-all ${filter === cat
                                ? 'bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light shadow-lg scale-105'
                                : 'border-dark/10 dark:border-light/10 hover:border-dark/30 dark:hover:border-light/30 text-dark/60 dark:text-light/60'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-32 bg-dark/5 dark:bg-light/5 rounded-[60px] border border-dashed border-dark/10 dark:border-white/10">
                    <div className="w-16 h-16 bg-dark/5 dark:bg-light/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search size={32} className="text-dark/20 dark:text-light/20" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">কোনো প্রোডাক্ট পাওয়া যায়নি</h2>
                    <p className="text-dark/40 dark:text-light/40">অনুগ্রহ করে অন্য কোনো কি-ওয়ার্ড দিয়ে চেষ্টা করুন।</p>
                    <button
                        onClick={() => { setSearchQuery(''); setFilter('All'); }}
                        className="mt-6 text-dark dark:text-light font-bold underline underline-offset-4"
                    >
                        সবগুলো দেখুন
                    </button>
                </div>
            )}
        </main>
    );
};

export default ShopPage;
