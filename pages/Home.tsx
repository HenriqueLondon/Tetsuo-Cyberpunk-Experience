import React, { useRef, useEffect } from 'react';
import GlitchText from '../components/GlitchText';
import RadarChart from '../components/RadarChart';
import { Play, ArrowRight, ChevronLeft, ChevronRight, Send } from 'lucide-react';

const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        console.log(' Initializing background video...');

        video.src = '/assets/cyber-bg.mp4';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'auto';

        const playVideo = () => {
            video.play()
                .then(() => {
                    console.log('Video playing successfully');
                })
                .catch(error => {
                    console.log('Autoplay prevented');
                    
                    const playOnInteraction = () => {
                        video.play().catch(() => {});
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('touchstart', playOnInteraction);
                    };
                    
                    document.addEventListener('click', playOnInteraction);
                    document.addEventListener('touchstart', playOnInteraction);
                });
        };

        setTimeout(playVideo, 300);

    }, []);

    return (
        <div className="bg-cyber-black text-white overflow-hidden">
            {/* SEÇÃO DO VÍDEO NO TOPO */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Vídeo de fundo */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{
                            filter: 'brightness(0.6) contrast(1.2)'
                        }}
                    />
                    
                    {/* Overlays para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
                </div>

                {/* Seu conteúdo original do Hero - MAS AGORA SOBRE O VÍDEO */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-display font-bold leading-tight mb-8 uppercase tracking-wider">
                        I've seen <span className="line-through decoration-cyber-red decoration-4">things</span> you people wouldn't believe. 
                        All those moments will be lost in time, like <GlitchText text="TEARS IN RAIN." />
                    </h1>
                </div>

                {/* Elementos decorativos do seu Hero original */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase writing-vertical-rl text-gray-300">Scroll Down</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-cyber-cyan to-transparent"></div>
                </div>

                <div className="absolute bottom-20 left-10 hidden md:block border border-gray-700 p-4 hover:border-cyber-cyan transition-colors cursor-pointer group z-10">
                    <Play size={16} className="text-white group-hover:text-cyber-cyan fill-current" />
                </div>
            </section>

            {/* RESTANTE DO SEU CÓDIGO ORIGINAL (tudo abaixo continua igual) */}
            
            {/* 2. SKILLSET SECTION */}
            <section className="relative py-24 border-t border-gray-900 bg-cyber-black">
                {/* Vertical Side Label */}
                <div className="absolute top-32 left-8 hidden md:block">
                    <span className="text-xs font-mono font-bold tracking-widest text-white uppercase writing-vertical-rl rotate-180">
                        MY SKILLSET
                    </span>
                    <div className="w-[2px] h-8 bg-cyber-red mt-4 mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Chart */}
                    <div className="flex justify-center md:justify-end relative">
                         <RadarChart />
                         {/* Decorative Dates */}
                         <div className="absolute top-10 right-0 font-mono text-xs text-gray-500 hidden md:block">
                             <div className="flex items-center gap-2 mb-1">
                                 <div className="w-4 h-4 bg-[#c83c00] opacity-80"></div> 2016AD
                             </div>
                             <div className="flex items-center gap-2">
                                 <div className="w-4 h-4 bg-[#e64a19]"></div> 2018AD
                             </div>
                         </div>
                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6 leading-none">
                            Reality is an <br/> <span className="text-white">Illusion</span>
                        </h2>
                        <div className="w-16 h-1 bg-white mb-8"></div>
                        <p className="text-gray-400 font-sans leading-relaxed mb-8 max-w-md">
                            Lorem ipsum phis isvers roin gravida nibh vel velit auctor aliquet. 
                            Aenean sollicitudin, lorem quis bibendum ion auctor, nisi elit hotosh 
                            conse quat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit 
                            amet nibh vulputate cursus a sit amet mauris.
                        </p>
                        <button className="border border-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
                
                {/* Decorative Play Button */}
                <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden md:block border border-gray-800 p-4 hover:border-cyber-red transition-colors cursor-pointer group">
                    <Play size={16} className="text-white group-hover:text-cyber-red fill-current" />
                </div>
            </section>

            {/* 3. KEYWORDS LIST SECTION */}
            <section className="relative py-24 bg-cyber-black overflow-hidden">
                {/* Vertical Side Label Right */}
                <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:block">
                     <span className="text-xs font-mono font-bold tracking-widest text-white uppercase writing-vertical-rl rotate-180">
                        BROWSE PROJECTS
                    </span>
                     <div className="w-[2px] h-8 bg-cyber-red mt-4 mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-2 text-center">
                        {['VISUALS', 'VIDEO GAMES', 'UNREAL', 'SF GAMES', 'REDESIGN', 'RED FACES', 'PURPLE RED', 'PATTERNS', 'INSIDE', 'HEROES', 'DOUBLE', 'DIGITAL', 'DARK SOULS'].map((word, i) => (
                            <span key={i} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase text-white hover:text-cyber-red transition-colors cursor-pointer select-none">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HOME CONTACT FORM SECTION */}
            <section className="relative py-24 border-t border-gray-900">
                {/* Vertical Side Label */}
                <div className="absolute top-32 left-8 hidden md:block">
                    <span className="text-xs font-mono font-bold tracking-widest text-white uppercase writing-vertical-rl rotate-180">
                        CONTACT ME
                    </span>
                    <div className="w-[2px] h-8 bg-cyber-red mt-4 mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto px-6">
                    <form className="space-y-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="bg-transparent border border-gray-700 p-4 text-white placeholder-gray-500 focus:border-cyber-red focus:outline-none transition-colors"
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="bg-transparent border border-gray-700 border-l-0 md:border-l p-4 text-white placeholder-gray-500 focus:border-cyber-red focus:outline-none transition-colors"
                            />
                        </div>
                        <textarea 
                            rows={6} 
                            placeholder="Message" 
                            className="w-full bg-transparent border border-gray-700 border-t-0 p-4 text-white placeholder-gray-500 focus:border-cyber-red focus:outline-none transition-colors resize-none"
                        ></textarea>
                        <button type="submit" className="w-full border border-cyber-red text-cyber-red py-4 uppercase text-sm font-bold tracking-widest hover:bg-cyber-red hover:text-white transition-all mt-4">
                            Send
                        </button>
                    </form>
                </div>

                {/* Right side controls decorative */}
                <div className="absolute right-10 top-1/2 hidden md:flex flex-col gap-4">
                    <div className="border border-gray-800 p-2"><ArrowRight size={14} className="-rotate-90"/></div>
                </div>
            </section>

            {/* 5. IMAGE CONTENT SECTION */}
            <section className="relative py-24">
                {/* Vertical Side Label */}
                <div className="absolute top-32 left-8 hidden md:block">
                    <span className="text-xs font-mono font-bold tracking-widest text-white uppercase writing-vertical-rl rotate-180">
                        MY SKILLSET
                    </span>
                    <div className="w-[2px] h-8 bg-cyber-red mt-4 mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative">
                        <img 
                            src="../assets/cybergirl.gif" 
                            alt="Cyberpunk Girl" 
                            className="w-full h-auto grayscale contrast-125 border border-gray-800"
                        />
                        {/* Glitch Overlay effect (simulated with border) */}
                        <div className="absolute top-2 left-2 w-full h-full border border-cyber-red/30 pointer-events-none -z-10"></div>
                    </div>

                    {/* Text */}
                    <div className="md:pl-10">
                         <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6 leading-none">
                            Reality is an <br/> <span className="text-white">Illusion</span>
                        </h2>
                        <div className="w-16 h-1 bg-white mb-8"></div>
                         <p className="text-gray-400 font-sans leading-relaxed mb-8">
                            Lorem ipsum phis isvers roin gravida nibh vel velit auctor aliquet. 
                            Aenean sollicitudin, lorem quis bibendum ion auctor, nisi elit hotosh 
                            conse quat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit 
                            amet nibh vulputate cursus a sit amet mauris.
                        </p>
                    </div>
                </div>
                
                 {/* Right side controls decorative */}
                <div className="absolute right-10 top-1/2 hidden md:flex flex-col gap-4">
                    <div className="border border-gray-800 p-2"><ArrowRight size={14} className="-rotate-90"/></div>
                </div>
            </section>

            {/* 6. TESTIMONIALS SECTION */}
            <section className="relative py-32 bg-cyber-black text-center">
                 {/* Vertical Side Label Right */}
                 <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:block">
                     <span className="text-xs font-mono font-bold tracking-widest text-white uppercase writing-vertical-rl rotate-180">
                        THEY SAY
                    </span>
                     <div className="w-[2px] h-8 bg-cyber-red mt-4 mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto px-6">
                    <h3 className="text-2xl font-display font-bold uppercase mb-8">Testimonials</h3>
                    <p className="text-lg md:text-xl text-gray-400 italic font-serif leading-loose mb-10">
                        "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio."
                    </p>
                    <cite className="not-italic font-display font-bold text-white uppercase tracking-widest">
                        Anna Mondo
                    </cite>
                    
                    {/* Carousel Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                         <div className="w-1 h-4 bg-cyber-red"></div>
                         <div className="w-1 h-4 bg-gray-700"></div>
                         <div className="w-1 h-4 bg-gray-700"></div>
                    </div>
                </div>

                 {/* Left side controls decorative */}
                 <div className="absolute left-10 top-1/2 hidden md:flex items-center">
                    <ChevronLeft size={24} className="text-gray-600"/>
                </div>
                <div className="absolute right-20 top-1/2 hidden md:flex items-center">
                    <ChevronRight size={24} className="text-gray-600"/>
                </div>
            </section>

            {/* 7. CLIENT LOGOS */}
            <section className="py-20 border-t border-gray-900 border-b">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-2xl font-black font-display tracking-widest">CHIAVONNE</div>
                    <div className="text-xl font-bold font-display tracking-wider flex items-center gap-2">
                        <div className="w-6 h-6 border-2 border-white rounded-full"></div> Strongwave
                    </div>
                    <div className="text-xl font-black font-mono border-2 border-white p-1">C-GROUP</div>
                    <div className="text-2xl font-black font-sans lowercase italic">arasaki</div>
                    <div className="text-xl font-bold font-mono tracking-widest">SEGMENTS</div>
                    <div className="text-xl font-bold font-display">SIMPLE TECH</div>
                    <div className="text-2xl font-black font-display italic">L-BOAT</div>
                </div>
            </section>

            <style>{`
                .writing-vertical-rl {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </div>
    );
};

export default Home;