import React from 'react';
import Portfolio from '../components/Portfolio';

const Works: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen animate-fade-in">
            {/* Page Header */}
            <div className="bg-cyber-dark py-12 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-4">
                        Selected <span className="text-cyber-red">Works</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm max-w-xl">
                        A curated archive of digital experiments, client projects, and visual explorations. 
                        Each entry represents a node in our expanding network.
                    </p>
                </div>
            </div>
            
            <Portfolio />
            
            <style>{`
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Works;