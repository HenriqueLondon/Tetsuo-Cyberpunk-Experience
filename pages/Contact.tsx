import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        // Simulate API call
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setFormState({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-cyber-black animate-fade-in">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <GlitchText 
                        text="INITIATE_CONTACT" 
                        as="h1" 
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-4 block" 
                    />
                    <div className="w-24 h-1 bg-cyber-red"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <p className="text-gray-400 font-sans text-lg leading-relaxed">
                            Ready to upgrade your digital presence? Transmit your data packets below. 
                            Our operatives are standing by on secure channels.
                        </p>

                        <div className="space-y-6 font-mono text-sm">
                            <div className="flex items-start gap-4 p-6 border border-gray-800 bg-gray-900/50 hover:border-cyber-cyan transition-colors group">
                                <div className="p-3 bg-black border border-gray-700 text-cyber-cyan group-hover:text-white group-hover:bg-cyber-cyan transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white uppercase font-bold mb-1">Base of Operations</h3>
                                    <p className="text-gray-500">Neo-Tokyo, Sector 7<br/>Industrial District, 2077</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 border border-gray-800 bg-gray-900/50 hover:border-cyber-cyan transition-colors group">
                                <div className="p-3 bg-black border border-gray-700 text-cyber-cyan group-hover:text-white group-hover:bg-cyber-cyan transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white uppercase font-bold mb-1">Neural Mail</h3>
                                    <p className="text-gray-500">projects@tetsuo.dev</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 p-6 border border-gray-800 bg-gray-900/50 hover:border-cyber-cyan transition-colors group">
                                <div className="p-3 bg-black border border-gray-700 text-cyber-cyan group-hover:text-white group-hover:bg-cyber-cyan transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white uppercase font-bold mb-1">Secure Line</h3>
                                    <p className="text-gray-500">+81 90 2077 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900/30 p-8 border-l-2 border-cyber-red backdrop-blur-sm relative">
                        {/* Decorative background elements */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-cyber-red"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-cyber-red"></div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-mono text-cyber-red mb-2 uppercase tracking-widest">Identity</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-black border border-gray-700 text-white p-4 focus:border-cyber-cyan focus:outline-none transition-colors font-mono"
                                    placeholder="ENTER_NAME"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-cyber-red mb-2 uppercase tracking-widest">Frequency</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-black border border-gray-700 text-white p-4 focus:border-cyber-cyan focus:outline-none transition-colors font-mono"
                                    placeholder="ENTER_EMAIL"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-cyber-red mb-2 uppercase tracking-widest">Data Packet</label>
                                <textarea 
                                    rows={5}
                                    required
                                    value={formState.message}
                                    onChange={e => setFormState({...formState, message: e.target.value})}
                                    className="w-full bg-black border border-gray-700 text-white p-4 focus:border-cyber-cyan focus:outline-none transition-colors font-mono resize-none"
                                    placeholder="ENTER_MESSAGE_DATA..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={sending || sent}
                                className={`w-full py-4 font-bold uppercase tracking-widest transition-all relative overflow-hidden group ${
                                    sent ? 'bg-green-500 text-black' : 'bg-white text-black hover:bg-cyber-red hover:text-white'
                                }`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {sending ? 'TRANSMITTING...' : sent ? 'TRANSMISSION COMPLETE' : 'SEND TRANSMISSION'} 
                                    {!sending && !sent && <Send size={16} />}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
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

export default Contact;