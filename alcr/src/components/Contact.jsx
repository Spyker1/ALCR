'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Send
} from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      role: "Soporte & Ventas",
      number: "+52 833 283 3427",
      whatsapp: "5218332833427",
      region: "Tampico / Nacional"
    },
    {
      role: "Proyectos Especiales",
      number: "+52 55 4893 2429",
      whatsapp: "5255489324229",
      region: "CDMX / Central"
    }
  ];

  return (
    <section id="contacto" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#0f172a,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Columna Izquierda: Texto e Info General */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                Hablemos de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  tu próximo gran proyecto
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Ya sea que tengas una idea lista para desarrollar o necesites asesoría técnica, nuestro equipo está listo para responder. Sin compromisos.
              </p>
            </motion.div>

            {/* Info Adicional (Email / Ubicación) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 border-t border-slate-800 pt-8"
            >
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email General</p>
                  <a href="mailto:contacto@alcrdev.com" className="hover:text-teal-400 transition-colors">alexrdz1221@gmail.com</a>
                  </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider"> </p>
                  <a href="mailto:contacto@alcrdev.com" className="hover:text-teal-400 transition-colors">leonardo.cantulara@hotmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Base de Operaciones</p>
                  <p>México (Servicio Global Remoto)</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Tarjetas de Contacto */}
          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <ContactCard key={index} contact={contact} index={index} />
            ))}
            
            {/* Nota de disponibilidad */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-sm text-slate-500 bg-slate-900/50 py-2 rounded-full border border-slate-800/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Respuesta promedio: Menos de 1 hora
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Componente Tarjeta de Contacto Individual
function ContactCard({ contact, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all duration-300 overflow-hidden shadow-2xl"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        {/* Info del Contacto */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-6 h-6 text-slate-400 group-hover:text-teal-400 transition-colors" />
            </div>
            {/* Status Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-950 rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-slate-950" />
            </div>
          </div>
          
          <div>
            <p className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-1">
              {contact.role}
            </p>
            <h3 className="text-xl font-bold text-white tabular-nums tracking-wide">
              {contact.number}
            </h3>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {contact.region}
            </p>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Botón WhatsApp */}
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-green-900/20 group/btn"
            title="Enviar WhatsApp"
          >
            <MessageCircle className="w-5 h-5 group-hover/btn:animate-bounce" />
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Botón Llamar (Solo móvil usualmente, pero útil en desktop si hay integración) */}
          <a 
            href={`tel:${contact.number}`}
            className="flex-1 sm:flex-none flex items-center justify-center px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors border border-slate-700"
            title="Llamar ahora"
          >
            <Phone className="w-5 h-5" />
            <span className="sm:hidden ml-2">Llamar</span>
          </a>

          {/* Botón Copiar */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all"
            title="Copiar número"
          >
            <AnimatePresence mode='wait'>
                {copied ? (
                    <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <Check className="w-5 h-5 text-green-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <Copy className="w-5 h-5" />
                    </motion.div>
                )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  );
}