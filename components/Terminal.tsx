import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Terminal: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'init',
            role: 'model',
            text: 'Link established. I am T.E.T.S.U.O. Queries regarding system status or data retrieval permitted.',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        // Call Gemini API
        const responseText = await sendMessageToGemini(userMsg.text, messages);

        const modelMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, modelMsg]);
        setIsLoading(false);
    };

    return (
        <section className="py-12 bg-cyber-black relative overflow-hidden">
             {/* Decorative Background Text */}
            <div className="absolute top-10 right-0 text-9xl font-black text-gray-800 opacity-10 pointer-events-none select-none font-display">
                AI_CORE
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-display text-white uppercase mb-2">Neural <span className="text-cyber-red">Link</span></h2>
                    <p className="font-mono text-xs text-gray-400">CONNECTING TO GEMINI-2.5-FLASH NODES...</p>
                </div>

                {/* Terminal Window */}
                <div className="w-full bg-black border border-gray-700 rounded-sm shadow-[0_0_40px_rgba(255,0,60,0.1)] overflow-hidden">
                    {/* Terminal Header */}
                    <div className="bg-gray-900 p-2 flex items-center justify-between border-b border-gray-800">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
                            <TerminalIcon size={14} />
                            <span>TETSUO_SHELL_V1.0.exe</span>
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Chat Area */}
                    <div className="h-[400px] overflow-y-auto p-6 font-mono text-sm space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                        {messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div 
                                    className={`max-w-[80%] p-4 border-l-2 ${
                                        msg.role === 'user' 
                                        ? 'bg-gray-900 border-cyber-cyan text-gray-200' 
                                        : 'bg-black/50 border-cyber-red text-cyber-red'
                                    }`}
                                >
                                    <div className="text-[10px] opacity-50 mb-1 uppercase tracking-wider">
                                        {msg.role === 'user' ? '> USER' : '> SYSTEM'}
                                    </div>
                                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-black/50 border-l-2 border-cyber-red p-4 flex items-center gap-3">
                                    <Loader2 className="w-4 h-4 text-cyber-red animate-spin" />
                                    <span className="text-cyber-red animate-pulse">Processing Neural Data...</span>
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef}></div>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="border-t border-gray-800 bg-gray-900/50 p-4 flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter command..."
                            className="flex-1 bg-black border border-gray-700 text-white font-mono p-3 focus:outline-none focus:border-cyber-cyan transition-colors"
                        />
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="bg-cyber-red text-white px-6 font-bold uppercase hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Terminal;