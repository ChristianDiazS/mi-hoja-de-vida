import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.05)]">
      <div className="text-center text-gray-400 text-sm">
        <p className="mb-4">¿Interesado en mi perfil? <a href="mailto:christian_diazSanchez@hotmail.com" className="text-cyan-300 hover:underline transition duration-200">Contáctame</a></p>
        <p className="text-gray-500 text-xs">Disponible para roles frontend con React, Vite y TailwindCSS</p>
        <p className="mt-4 text-gray-600 text-xs">© {currentYear} Christian Enrique Díaz Sánchez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
