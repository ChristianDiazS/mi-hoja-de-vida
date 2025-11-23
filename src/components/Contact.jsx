import React from 'react';

export default function Contact() {
  return (
    <div className="rounded-2xl p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
      <h4 className="text-sm font-semibold text-gray-200 mb-4">Contacto</h4>
      <nav className="mt-3 text-sm text-gray-300 space-y-3">
        <div>
          <a 
            href="mailto:christian_diazSanchez@hotmail.com"
            className="hover:text-cyan-300 transition duration-200 flex items-center gap-2"
          >
            <span>📧</span>
            <span className="truncate">christian_diazSanchez@hotmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span>📱</span>
          <span>+51 950 310 152</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>Lima, Perú</span>
        </div>
      </nav>
    </div>
  );
}
