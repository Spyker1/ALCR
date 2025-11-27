'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Layers, ShoppingCart, Truck, Search, ShieldCheck, Zap, Smartphone } from 'lucide-react';

export default function Portafolio() {
  const projects = [
    {
      name: "Proamsys",
      category: "E-Commerce Industrial",
      description: "Plataforma especializada para el sector ferretero y construcción. Diseñada para manejar catálogos masivos con búsqueda inteligente, gestión de inventario en tiempo real y una experiencia de compra B2B/B2C optimizada.",
      link: "https://proamsys.com",
      image: "/proamsys.png",
      status: "En Producción",
      // Mezclamos tecnología clave con beneficios de negocio
      features: [
        { icon: Search, text: "Búsqueda Avanzada" },
        { icon: Truck, text: "Logística Integrada" },
        { icon: ShieldCheck, text: "Pagos Seguros" },
        { icon: Zap, text: "Alto Rendimiento" }
      ],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "PlayexMarket",
      category: "Fashion & Lifestyle Market",
      description: "Boutique digital moderna para moda urbana (sneakers, gorras y accesorios). Enfocada totalmente en la experiencia visual del usuario, con navegación intuitiva 'Mobile-First' y un proceso de compra (checkout) ultra rápido.",
      link: "https://gorras-play.netlify.app/",
      image: "/playex.png",
      status: "En Desarrollo",
      features: [
        { icon: Smartphone, text: "100% Mobile First" },
        { icon: ShoppingCart, text: "Carrito Dinámico" },
        { icon: Zap, text: "Carga Instantánea" },
        { icon: ShieldCheck, text: "Pasarela Segura" }
      ],
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="portafolio" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Layers className="w-4 h-4" />
            Casos de Éxito
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Impulsamos negocios con <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Tecnología de Alto Nivel
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            No solo escribimos código; creamos experiencias de venta digitales que conectan marcas con sus clientes de forma rápida, segura y efectiva.
          </motion.p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <SpotlightCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente de Tarjeta
function SpotlightCard({ project, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative border border-slate-800 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Efecto Spotlight (Luz seguidora) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 184, 166, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col z-0">
        
        {/* 2. Área de Imagen (Screenshot) */}
        <div className="relative h-64 md:h-72 w-full overflow-hidden border-b border-slate-800 bg-slate-950">
            {/* Imagen del proyecto con Zoom al hover */}
            <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover"
                    priority={index === 0} // Priorizar carga de la primera imagen
                />
                {/* Overlay sutil para que el texto resalte si hubiera, y para unificar el tono */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Badge Status Flotante */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-slate-950/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg z-20">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'En Producción' ? 'bg-green-400' : 'bg-amber-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'En Producción' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                </span>
                <span className="text-[10px] uppercase font-bold text-white tracking-wider">
                    {project.status}
                </span>
            </div>
            
            {/* Botón flotante para visitar */}
            <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 p-3 bg-white text-slate-950 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-teal-400 z-20"
                title="Visitar Sitio Web"
            >
                <ArrowUpRight className="w-5 h-5" />
            </a>
        </div>

        {/* 3. Contenido de Texto */}
        <div className="p-8 flex flex-col flex-grow relative bg-slate-900/50">
          
          <div className="mb-4">
            <span className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mb-2 block`}>
                {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-teal-50 transition-colors">
                {project.name}
            </h3>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-slate-700 pl-4">
            {project.description}
          </p>

          {/* Features Grid (Beneficios en lugar de solo tecnologías) */}
          <div className="mt-auto">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Características Clave
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 text-slate-300 text-xs font-medium"
                >
                  <feature.icon className="w-4 h-4 text-teal-500/70" />
                  {feature.text}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}