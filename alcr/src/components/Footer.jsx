'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  Mail, 
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const footerLinks = {
    company: [
      { name: "Inicio", href: "#inicio" },
      { name: "Servicios", href: "#servicios" },
      { name: "Portafolio", href: "#portafolio" },
      { name: "Contacto", href: "#contacto" }
    ],
    legal: [
      { name: "Términos de Servicio", href: "#" },
      { name: "Política de Privacidad", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 pt-20 pb-10 overflow-hidden">
      
      {/* Luz ambiental decorativa */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Brand & Bio (4 columnas de ancho) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                <Image src="/logo.png" alt="ALCR DEV INC" width={32} height={32} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                ALCR <span className="text-teal-500">DEV</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Transformamos ideas complejas en experiencias digitales fluidas. 
              Expertos en desarrollo web moderno, optimizado para el crecimiento de tu negocio.
            </p>

          </div>

          {/* Columna 2: Links (2 columnas de ancho) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold mb-6">Explorar</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-teal-400 text-sm flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Legal (2 columnas de ancho) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Newsletter (4 columnas de ancho) */}
          <div className="lg:col-span-4 lg:col-start-10 md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Mantente actualizado</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">
                Recibe las últimas tendencias en tecnología y actualizaciones de nuestros servicios.
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-slate-900 border border-slate-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-teal-500 hover:bg-teal-400 text-white p-1.5 rounded-md transition-colors"
                >
                  <ArrowUp className="w-4 h-4 rotate-90" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} ALCR DEV INC.</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> en México
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                <a href="tel:+525548932429" className="hover:text-teal-400 transition-colors">
                    +52  55 4893 2429
                </a>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500 transition-all border border-slate-700"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}