import React from 'react';

export default function Header() {
  const handleDownloadPDF = async () => {
    try {
      // Agregar timestamp para evitar caché
      const timestamp = new Date().getTime();
      const response = await fetch(`/cv.pdf?t=${timestamp}`);
      if (!response.ok) throw new Error('Error al descargar');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV-Christian-Diaz.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error descargando PDF:', error);
      window.location.href = `/cv.pdf?t=${new Date().getTime()}`;
    }
  };

  return (
    <header className="flex flex-col items-center justify-center mb-12 text-center gap-6">
      {/* Logo y nombre */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-lg bg-linear-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-2xl">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M3 12h18" stroke="#021826" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3v18" stroke="#021826" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Christian Enrique Díaz Sánchez</h1>
          <p className="text-base text-gray-400 mt-1">Desarrollador Web Frontend — React · Vite · TailwindCSS</p>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button 
          onClick={() => window.location.href = 'mailto:christian_diazSanchez@hotmail.com'}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold shadow-lg hover:scale-105 transform transition duration-200"
          aria-label="Enviar correo a Christian Díaz"
        >
          📧 Contactar
        </button>
        <button 
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-linear-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold shadow-lg hover:scale-105 transform transition duration-200 cursor-pointer"
          aria-label="Descargar CV en PDF"
        >
          📄 Descargar CV
        </button>
      </div>
    </header>
  );
}
