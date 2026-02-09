import React from 'react';
import { PortfolioItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Neon Genesis",
        category: "Cybernetics",
        imageUrl: "https://picsum.photos/800/600?random=1",
        size: "large"
    },
    {
        id: 2,
        title: "Data Void",
        category: "Network",
        imageUrl: "https://picsum.photos/400/600?random=2",
        size: "tall"
    },
    {
        id: 3,
        title: "Chrome Heart",
        category: "Augmentation",
        imageUrl: "https://picsum.photos/400/300?random=3",
        size: "small"
    },
    {
        id: 4,
        title: "Ghost City",
        category: "Architecture",
        imageUrl: "https://picsum.photos/800/400?random=4",
        size: "wide"
    },
    {
        id: 5,
        title: "Neuro Link",
        category: "Interface",
        imageUrl: "https://picsum.photos/400/400?random=5",
        size: "small"
    }
];

const Portfolio: React.FC = () => {
    return (
        <section className="py-12 bg-cyber-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-4">
                    <div>
                        <span className="text-cyber-red font-mono text-xs tracking-widest mb-2 block">SELECTED_WORKS // 2077</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                            Visual <span className="text-transparent stroke-white" style={{WebkitTextStroke: '1px white'}}>Database</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                         <p className="text-gray-500 text-xs font-mono max-w-xs">
                             ARCHIVE ACCESS GRANTED. <br/> BROWSING PERMITTED.
                         </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {portfolioItems.map((item) => (
                        <div 
                            key={item.id}
                            className={`group relative overflow-hidden bg-gray-900 border border-gray-800 hover:border-cyber-red transition-colors duration-500 cursor-pointer
                                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${item.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                                ${item.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
                                ${item.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                            `}
                        >
                            <img 
                                src={item.imageUrl} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-cyber-cyan font-mono text-xs uppercase mb-1">{item.category}</span>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white font-display font-bold text-xl uppercase">{item.title}</h3>
                                    <div className="bg-cyber-red p-2 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;