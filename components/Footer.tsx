import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-cyber-black text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Huge Logo */}
                <div className="mb-12">
                    <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter text-white select-none">
                        TETSUO
                    </h1>
                    <p className="text-xs font-mono tracking-[0.5em] text-gray-500 mt-4 uppercase">
                        A Theme For A Creative Society
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                    {['Home', 'About', 'Blog', 'Shop', 'Contact Us'].map((item) => (
                        <Link 
                            key={item} 
                            to="/" 
                            className="text-xs font-bold uppercase tracking-widest hover:text-cyber-red transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
                    © 2025 Tetsuo React Reconstruction. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;