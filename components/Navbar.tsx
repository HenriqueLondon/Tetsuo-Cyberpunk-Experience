import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Pages', href: '/works' },
        { name: 'Neural Link', href: '/neural-link' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                ? 'bg-cyber-black/95 backdrop-blur-sm py-4 border-b border-gray-800' 
                : 'bg-transparent py-8'
            }`}
        >
            <div className="max-w-[95%] mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsOpen(false)}>
                    <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-cyber-red transition-colors">
                        TETSUO
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href}
                            className={`font-sans font-bold uppercase text-[11px] tracking-[0.2em] transition-colors ${
                                isActive(link.href) ? 'text-cyber-red' : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Icons */}
                <div className="hidden md:flex items-center gap-6 text-white">
                    <ShoppingBag size={18} className="hover:text-cyber-red cursor-pointer transition-colors" />
                    <Search size={18} className="hover:text-cyber-red cursor-pointer transition-colors" />
                    <Menu size={20} className="hover:text-cyber-red cursor-pointer transition-colors" onClick={() => setIsOpen(!isOpen)}/>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-white">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-cyber-black border-b border-cyber-red/30 p-8 md:hidden flex flex-col gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-bold uppercase tracking-widest hover:text-cyber-red transition-all ${
                                isActive(link.href) ? 'text-cyber-red' : 'text-gray-300'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;