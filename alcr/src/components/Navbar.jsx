'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Detectar scroll para cambiar la densidad del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },  
    { name: 'Portafolio', href: '#portafolio' }, 
  ];

  // Función para hacer scroll suave manual
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileOpen(false); // Cerrar menú móvil si está abierto
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled || isMobileOpen
            ? 'bg-slate-950/80 border-teal-500/10 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
            : 'bg-transparent border-transparent backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* --- LOGO --- */}
            <a 
              href="#inicio" 
              onClick={(e) => handleScrollTo(e, '#inicio')}
              className="relative group flex items-center gap-3 z-50"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Glow effect detrás del logo */}
                <div className="absolute inset-0 bg-teal-500/30 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-all duration-500" />
                
                <div className="relative bg-slate-900 border border-slate-700 p-1.5 rounded-xl group-hover:border-teal-500/50 transition-colors duration-300">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-teal-200 transition-all duration-300">
                  ALCR <span className="text-teal-400">DEV</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5 group-hover:text-teal-200/70 transition-colors">
                  Software Solutions
                </span>
              </div>
            </a>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Contenedor de Links con efecto "Floating Pill" */}
              <div className="flex items-center bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm mr-4" onMouseLeave={() => setHoveredIndex(null)}>
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)} // Usamos el handler manual
                    className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    style={{ color: hoveredIndex === index ? '#fff' : '#94a3b8' }}
                  >
                    {/* Fondo animado que sigue al cursor */}
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-slate-800 rounded-full z-[-1]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Botón CTA Principal */}
              <motion.a
                href="#contacto" // CORREGIDO: #Contact -> #contacto
                onClick={(e) => handleScrollTo(e, '#contacto')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:brightness-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-300" />
                
                <span className="relative flex items-center gap-2">
                  Contacto
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                </span>
              </motion.a>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative z-50 p-2 text-slate-300 hover:text-white transition-colors"
            >
              <div className="relative w-6 h-6">
                <AnimatePresence mode='wait'>
                    {isMobileOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            className="absolute inset-0"
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            className="absolute inset-0"
                        >
                            <Menu size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-8 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="block p-4 rounded-xl text-lg font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group flex justify-between items-center cursor-pointer"
                  >
                    {link.name}
                    <ChevronAnimated />
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                    <a
                        href="#contacto" // CORREGIDO: #Contact -> #contacto
                        onClick={(e) => handleScrollTo(e, '#contacto')}
                        className="flex items-center justify-center w-full p-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg shadow-teal-500/20 active:scale-95 transition-transform cursor-pointer"
                    >
                        Iniciar Proyecto
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer para evitar que el contenido salte al inicio si el nav es fixed */}
      <div className="h-0" /> 
    </>
  );
}

// Pequeño componente para la animación de la flecha en mobile
function ChevronAnimated() {
  return (
    <motion.span 
      className="text-teal-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
    >
      <ArrowRight size={18} />
    </motion.span>
  );
}