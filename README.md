# Curriculum Profesional - Christian Enrique Díaz Sánchez

Portafolio web profesional creado con React, Vite y TailwindCSS. Una presentación moderna y optimizada de mi perfil como desarrollador Frontend.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos (mobile-first)
- **Dark Mode Profesional**: Interfaz elegante con gradientes y efectos visuales modernos
- **Componentes Modulares**: Arquitectura escalable y mantenible con React
- **Optimización de Rendimiento**: Construido con Vite para máxima velocidad
- **Accesibilidad**: Cumple con estándares WCAG para usuarios con discapacidades
- **SEO Friendly**: Estructura semántica y meta tags optimizados

## 📋 Contenido

- **Header/Navegación**: Presentación principal con CTA
- **Objetivo Profesional**: Declaración clara de intenciones y especialidades
- **Experiencia Laboral**: Historial profesional detallado
- **Proyectos Destacados**: Portafolio de trabajos representativos
- **Habilidades Técnicas**: Stack tecnológico dominado
- **Formación Académica**: Educación y certificaciones
- **Contacto**: Múltiples canales de comunicación
- **Idiomas**: Niveles de dominio

## 🛠️ Stack Tecnológico

```
Frontend:
- React 19.2.0
- Vite 7.2.4
- TailwindCSS (via CDN)
- JavaScript ES6+

Desarrollo:
- ESLint
- Node.js (npm)
```

## 💻 Instalación y Uso

### Requisitos Previos
- Node.js 16+ instalado
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar o descargar el proyecto
cd curriculum

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
curriculum/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.jsx        # Cabecera con navegación
│   │   ├── Hero.jsx          # Sección objetivo profesional
│   │   ├── Experience.jsx    # Experiencia laboral
│   │   ├── Projects.jsx      # Proyectos destacados
│   │   ├── Education.jsx     # Formación académica
│   │   ├── Skills.jsx        # Habilidades técnicas
│   │   ├── Contact.jsx       # Información de contacto
│   │   ├── Languages.jsx     # Idiomas
│   │   └── Footer.jsx        # Pie de página
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos globales
│   ├── constants.js          # Datos centralizados
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Reset CSS
├── public/                   # Archivos estáticos
├── eslint.config.js          # Configuración de ESLint
├── vite.config.js            # Configuración de Vite
├── package.json              # Dependencias del proyecto
└── README.md                 # Este archivo
```

## 🎨 Personalización

### Actualizar Información Personal

Edita `src/constants.js`:

```javascript
export const PROFILE = {
  name: "Nombre",
  email: "mi_email@ejemplo.com",
  // ... más campos
};
```

### Modificar Estilos

- **Colores**: Editar `App.jsx` para cambiar los gradientes
- **Tipografía**: Ajustar clases de TailwindCSS en componentes
- **Espaciado**: Modificar padding/margin en componentes

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/`
2. Importa en `App.jsx`
3. Añade el componente en el JSX

## ✨ Mejores Prácticas Implementadas

- ✅ Código limpio y bien comentado
- ✅ Componentes pequeños y reutilizables
- ✅ Separación de datos (constants.js)
- ✅ Atributos ARIA para accesibilidad
- ✅ Links semánticos (mailto, anchor)
- ✅ Responsive design
- ✅ Animaciones suaves
- ✅ Enfoque en rendimiento

## 🔗 Enlaces y Contacto

- **Email**: [mi_email@ejemplo.com](mailto:mi_email@ejemplo.com)
- **Teléfono**: +51 xxx xxx xxx
- **Ubicación**: Lima, Perú

## 📝 Notas de Desarrollo

- El proyecto utiliza **Vite** para desarrollo rápido con HMR
- **TailwindCSS** proporciona los estilos (vía CDN en HTML)
- Componentes de **React 19** con hooks modernos
- ESLint configurado para mantener calidad de código

## 🚀 Deploy

### Opciones recomendadas:

1. **Vercel** (Recomendado para Vite)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Conecta tu repositorio GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Configura en `vite.config.js`
   - Ejecuta `npm run build`
   - Sube carpeta `dist`

## 📄 Licencia

Este proyecto es personal. Siéntete libre de adaptarlo como base para tu propio portafolio.

---

**Última actualización**: Noviembre 2025
