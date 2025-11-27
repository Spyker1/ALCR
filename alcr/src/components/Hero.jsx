'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Globe, Sparkles, Terminal, ChevronDown, Cpu } from 'lucide-react';

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section 
      id="inicio" 
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* --- BACKGROUND FX --- */}
      
      {/* 1. Noise Texture (Cohesión con el resto del sitio) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-[1]" />

      {/* 2. Grid Pattern & Vignette */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 3. Ambient Spotlights (Aurora Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />

      {/* 4. Floating Tech Elements */}
      <FloatingIcon icon={Code2} className="top-[20%] left-[10%] text-teal-500/20 w-16 h-16 hidden lg:block" delay={0} />
      <FloatingIcon icon={Terminal} className="bottom-[20%] right-[10%] text-blue-500/20 w-14 h-14 hidden lg:block" delay={2} />
      <FloatingIcon icon={Cpu} className="top-[25%] right-[15%] text-cyan-500/20 w-10 h-10 hidden lg:block" delay={1} />

      {/* --- CONTENT WRAPPER --- */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center"
      >
        
        {/* LOGO "REACTOR CORE" */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="relative mb-12 group"
        >
            {/* Glows traseros */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/40 rounded-full blur-3xl group-hover:bg-teal-400/50 transition-colors duration-500 animate-pulse" />
            
            {/* Contenedor Cristal */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_-12px_rgba(20,184,166,0.3)] flex items-center justify-center transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:border-teal-500/30">
                {/* Shine interno */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
                
                <Image 
                    src="/logo.png" 
                    alt="ALCR DEV Logo" 
                    width={120} 
                    height={120}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
                    priority
                />
            </div>

            {/* Orbit Ring Decorativo */}
            <div className="absolute inset-0 -m-4 border border-teal-500/20 rounded-[2.5rem] animate-spin-slow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
            Disponibles para nuevos retos
          </span>
        </motion.div>

        {/* HEADLINE */}
        <div className="max-w-5xl mx-auto space-y-6 mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9]"
          >
            IMPULSANDO EL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
              FUTURO DIGITAL
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            No solo escribimos código. Diseñamos <span className="text-white font-medium">arquitecturas escalables</span> y experiencias inmersivas que posicionan a tu empresa en la cima del mercado.
          </motion.p>
        </div>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <a href="#portafolio" className="group relative px-8 py-4 bg-teal-500 text-slate-950 font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Ver Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a href="#contacto" className="group px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 text-white font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
             <Sparkles className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
             Cotizar Solución
          </a>
        </motion.div>

        {/* STATS HUD */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 border-t border-slate-800/60 pt-8 w-full max-w-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <StatItem value="100%" label="Code Quality" />
            <StatItem value="24/7" label="Soporte VIP" />
            <StatItem value="Global" label="Alcance" />
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-70">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <ChevronDown className="w-4 h-4 text-teal-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Componente para iconos flotantes (Más sutiles)
function FloatingIcon({ icon: Icon, className, delay }) {
  return (
    <motion.div 
      className={`absolute ${className} pointer-events-none`}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
    >
      <Icon className="w-full h-full" strokeWidth={1} />
    </motion.div>
  );
}

// Componente Stats Minimalista
function StatItem({ value, label }) {
    return (
        <div className="flex flex-col items-center group cursor-default p-2 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-3xl font-black text-white group-hover:text-teal-400 transition-colors duration-300 font-mono">
                {value}
            </span>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1 group-hover:text-slate-400">
                {label}
            </span>
        </div>
    )
}