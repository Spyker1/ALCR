'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  BarChart3, 
  Palette, 
  ArrowRight, 
  CheckCircle2,
  Cpu,
  Smartphone
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "Software a Medida",
      description: "Arquitecturas robustas diseñadas para resolver problemas complejos. Automatizamos procesos empresariales con software escalable y seguro.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "group-hover:border-blue-500/50",
      tags: ["SaaS", "Automatización", "APIs", "Cloud"]
    },
    {
      icon: Globe,
      title: "Web Apps Modernas",
      description: "Desarrollo frontend de alto rendimiento con Next.js y React. Sitios ultrarrápidos, optimizados para SEO y con experiencia de usuario fluida.",
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "group-hover:border-teal-500/50",
      tags: ["Next.js", "React", "PWA", "Performance"]
    },
    {
      icon: BarChart3,
      title: "Growth & Marketing",
      description: "No solo creamos tu web, la hacemos visible. Estrategias de posicionamiento y campañas digitales enfocadas en el retorno de inversión (ROI).",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "group-hover:border-purple-500/50",
      tags: ["SEO/SEM", "Analytics", "Ads", "Branding"]
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Interfaces que enamoran. Diseñamos prototipos interactivos centrados en la usabilidad, asegurando que tus usuarios disfruten cada clic.",
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "group-hover:border-pink-500/50",
      tags: ["Figma", "Prototyping", "User Flow", "Mobile First"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      {/* Blob de luz ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Nuestras Especialidades
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Soluciones Digitales <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              360 Grados
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Desde la concepción de la idea hasta el lanzamiento y crecimiento. Cubrimos todo el ciclo de vida de tu producto digital con los más altos estándares.
          </motion.p>
        </div>

        {/* Grid de Servicios */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 ${service.border} transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/50`}
            >
              {/* Gradiente sutil al hacer hover en el fondo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icono */}
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-50 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags / Tecnologías */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                {service.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-semibold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Icono decorativo esquina */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className={`w-4 h-4 ${service.color}`} />
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Integrado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 relative overflow-hidden text-center lg:text-left lg:flex lg:items-center lg:justify-between"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10 lg:pl-4">
            <h3 className="text-2xl font-bold text-white mb-2">¿Tienes una idea en mente?</h3>
            <p className="text-slate-400">Podemos combinar estos servicios para crear tu solución ideal.</p>
          </div>
          <div className="relative z-10 mt-6 lg:mt-0 lg:pr-4">
            <a 
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:scale-105"
            >
              <Smartphone className="w-5 h-5" />
              Hablar con un experto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}