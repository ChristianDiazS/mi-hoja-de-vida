// ============================================
// CONFIGURACIÓN DEL PROYECTO
// ============================================

/**
 * COLORES Y TEMA
 * Paleta de colores utilizada en el CV
 */
export const THEME = {
  colors: {
    primary: "#06b6d4",      // cyan-400
    secondary: "#6366f1",    // indigo-500
    background: {
      main: "#000000",
      secondary: "#071024",
      tertiary: "#05060a"
    },
    text: {
      primary: "#e5e7eb",    // gray-200
      secondary: "#d1d5db",  // gray-300
      tertiary: "#9ca3af"    // gray-400
    },
    borders: {
      light: "rgba(255,255,255,0.04)",
      lighter: "rgba(255,255,255,0.03)",
      lightest: "rgba(255,255,255,0.02)"
    }
  },
  
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "4rem",
    "3xl": "6rem"
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem"
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  }
};

/**
 * SECCIONES DEL CV
 * Define qué secciones mostrar
 */
export const SECTIONS = {
  header: true,
  hero: true,
  experience: true,
  projects: true,
  education: true,
  skills: true,
  contact: true,
  languages: true,
  footer: true
};

/**
 * CONFIGURACIÓN DE ANIMACIONES
 */
export const ANIMATIONS = {
  fadeIn: {
    duration: "0.6s",
    easing: "ease-out"
  },
  hoverScale: {
    transform: "scale(1.05)",
    duration: "200ms"
  },
  transition: "all 300ms ease",
  smoothScroll: true
};

/**
 * METADATA Y SEO
 * Información para meta tags
 */
export const METADATA = {
  title: "Christian Enrique Díaz Sánchez | Desarrollador Frontend",
  description: "Portafolio profesional de Christian Díaz - Especialista en React, Vite y TailwindCSS",
  keywords: "React, Frontend, TailwindCSS, Vite, Desarrollador Web, JavaScript",
  author: "Christian Enrique Díaz Sánchez",
  ogImage: "/og-image.png",
  ogUrl: "https://tudominio.com",
  twitterHandle: "@tutwitter",
  language: "es-ES"
};

/**
 * SOCIAL MEDIA LINKS
 * Conexiones en redes sociales
 */
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  twitter: "https://twitter.com/tu-usuario",
  portfolio: "https://tu-sitio.com"
};

/**
 * CONFIGURACIÓN DE EMAIL
 * Para formularios y contacto
 */
export const EMAIL_CONFIG = {
  to: "christian_diazSanchez@hotmail.com",
  subject: "Contacto desde mi portfolio",
  cc: null,
  bcc: null
};

/**
 * VALIDACIONES
 */
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Por favor, ingrese un email válido"
  },
  phone: {
    pattern: /^[0-9+\-\s()]+$/,
    message: "Por favor, ingrese un teléfono válido"
  },
  name: {
    minLength: 2,
    maxLength: 100,
    message: "El nombre debe tener entre 2 y 100 caracteres"
  }
};

/**
 * API ENDPOINTS
 * Para futuras integraciones
 */
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || "https://api.ejemplo.com",
  timeout: 5000,
  endpoints: {
    contact: "/contact",
    projects: "/projects",
    blog: "/blog"
  }
};

/**
 * FEATURE FLAGS
 * Activar/desactivar características
 */
export const FEATURES = {
  contactForm: true,
  blog: false,
  testimonials: false,
  darkMode: true,
  animations: true,
  analytics: false
};

export default {
  THEME,
  SECTIONS,
  ANIMATIONS,
  METADATA,
  SOCIAL_LINKS,
  EMAIL_CONFIG,
  VALIDATION,
  API_CONFIG,
  FEATURES
};
