import React from 'react';
import { PROFESSIONAL_OBJECTIVE } from '../constants';

export default function Hero() {
  return (
    <section className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] rounded-2xl p-8 mb-8 shadow-inner backdrop-blur-sm">
      <div className="flex flex-col items-center gap-8">
        {/* Foto de perfil */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <img 
              src="/images/yo.jfif" 
              alt="Christian Enrique Díaz Sánchez"
              className="w-full h-full object-cover object-top rounded-full border-4 border-cyan-400 shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-linear-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-6xl font-bold">CD</div>';
              }}
            />
          </div>
        </div>

        {/* Contenido centrado */}
        <div className="text-center flex flex-col items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Objetivo Profesional</h2>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              {PROFESSIONAL_OBJECTIVE}
            </p>
          </div>                    
        </div>
      </div>
    </section>
  );
}
