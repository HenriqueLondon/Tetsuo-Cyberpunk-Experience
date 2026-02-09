import React from 'react';
import Terminal from '../components/Terminal';

const NeuralLink: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-cyber-black animate-fade-in">
             <div className="bg-cyber-black py-12 border-b border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-red/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-4">
                        Neural <span className="text-cyber-cyan">Interface</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm max-w-xl">
                        Direct connection to the TETSUO mainframe established. 
                        Interact with the Gemini-2.5-Flash powered AI core. Protocol: Unrestricted.
                    </p>
                </div>
            </div>
            <Terminal />
            
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

export default NeuralLink;