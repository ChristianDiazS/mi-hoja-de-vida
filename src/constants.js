/**
 * Datos de mi CV
 * Facilita el mantenimiento y actualización de la información
 */

export const PROFILE = {
  name: "Christian Enrique Díaz Sánchez",
  title: "Desarrollador Web Frontend",
  specialties: ["React", "Vite", "TailwindCSS"],
  email: "christian_diazSanchez@hotmail.com",
  phone: "+51 950 310 152",
  location: "Lima, Perú",
  fullAddress: "Pasaje Garcilaso de la Vega 327, Comas, Lima"
};

export const PROFESSIONAL_OBJECTIVE = `Desarrollador Frontend especializado en React, Vite y TailwindCSS. 
Busco integrarme en equipos de trabajo con buen clima laboral que valoren el esfuerzo y dedicación para crear productos digitales escalables.`;

export const EXPERIENCES = [
  {
    title: "Desarrollador Web Frontend — Freelance",
    period: "01/03/2025 — Al presente",
    category: "Programación · Frontend",
    description: "Provisión de servicios de desarrollo web frontend utilizando React, Vite y TailwindCSS. Creación de interfaces de usuario responsivas y optimizadas para mejorar la experiencia del usuario."
  },
  {
    title: "Chofer — Servicios Generales KMB",
    period: "01/09/2024 — 01/02/2025",
    category: "Logística · Operaciones",
    description: "Responsable de reparto, cumplimiento de rutas y coordinación con equipos de distribución. Desarrollé disciplina en la gestión del tiempo y trabajo bajo presión, priorización de tareas y cumplimiento de entregas."
  },
  {
    title: "Controlador de Despacho — Gloria S.A.",
    period: "01/10/2023 — 01/03/2024",
    category: "Logística · SAP",
    description: "Gestión de despacho, manejo de radiofrecuencia y control de inventarios; experiencia con sistemas empresariales (SAP) y procesos operativos."
  },
  {
    title: "Encargado Administrativo — Mevalu Estrategias Comerciales",
    period: "01/05/2023 — 01/09/2023",
    category: "Administración · Inventarios",
    description: "Control de inventarios, manejo de SAP y coordinación logística — atención al detalle y manejo de datos en procesos operativos."
  }
  
];

export const ADDITIONAL_EXPERIENCE = [
  { company: "Transporte Atlantida — Chofer de Colectivo", period: "01/06/2022 - 01/04/2023" },
  { company: "Villegas Resto / La Parolaccia — Valet Parking", period: "2018 - 2022" },
  { company: "Remisero — Chofer de auto", period: "15-04-2017 - 02-04-2018" },
  { company: "Cajero Repositor — Kiosko", period: "01-09-2016 - 01-04-2017" },
  { company: "Remisero — Chofer de auto", period: "01-03-2014 - 01-08-2016" }  
];

export const PROJECTS = [
  {
    title: "TradeMarket — Frontend eCommerce",
    description: "App creada con React + Vite + Tailwind. Implementación de filtros, búsqueda, carrito, y detalle de producto. Optimización de carga y experiencia mobile-first.",
    stack: "React · Vite · Tailwind · Context API"
  },
  {
    title: "Portfolio Web — Hoja de Vida Web",
    description: "Este mismo sitio (versión web) para presentar CV y proyectos.",
    stack: "React · Vite · Tailwind"
  }
];

export const SKILLS = [
  "React",
  "Vite",
  "TailwindCSS",
  "JavaScript",
  "HTML / CSS",
  "APIs REST",
  "Context API",
  "Git"
];

export const METHODOLOGIES = [
  "Responsive Design",
  "Mobile-First",
  "Clean Code",
  "Component-Based Architecture",
  "UI/UX Best Practices"
];

export const TECH_PROFICIENCY = [
  { name: "React", percentage: 85 },
  { name: "TailwindCSS", percentage: 80 },
  { name: "JavaScript", percentage: 75 },
  { name: "HTML/CSS", percentage: 90 },
  { name: "Vite", percentage: 80 }
];

export const EDUCATION = {
  school: "Oracle ONE - Alura Latam",
  program: "Programa de Desarrollo Web",
  startDate: "01/07/2022",
  endDate: "01/01/2023"
};

export const LANGUAGES = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico" }
];

export const ABOUT_ME = {
  title: "Sobre Mí",
  description: "Desarrollador Frontend apasionado por crear interfaces de usuario modernas, funcionales y escalables. Con formación en Oracle ONE - Alura Latam y experiencia práctica en React, Vite y TailwindCSS, busco constantemente mejorar mis habilidades técnicas y entregar soluciones que generen impacto real en los usuarios. Mi transición desde roles logísticos hacia desarrollo web refleja mi compromiso con el crecimiento profesional y las ganas de aprender algo nuevo para mejorar dia a dia.",
  highlights: [
    { icon: "🎯", title: "Objetivo", text: "Integrarme en equipos innovadores para crear productos digitales escalables y de calidad" },
    { icon: "💡", title: "Enfoque", text: "Código limpio, responsive design, UX optimizada y buenas prácticas de desarrollo" },
    { icon: "🚀", title: "Motivación", text: "Aprendizaje continuo, resolución de problemas y excelencia técnica en cada proyecto" },
    { icon: "🤝", title: "Valores", text: "Trabajo en equipo, comunicación clara, compromiso y responsabilidad profesional" }
  ]
};
