import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Importar datos
import { PROFILE, PROFESSIONAL_OBJECTIVE, ABOUT_ME, EXPERIENCES, PROJECTS, SKILLS, METHODOLOGIES, TECH_PROFICIENCY, EDUCATION, LANGUAGES } from '../src/constants.js';

const generatePDF = () => {
  const pdfPath = path.join(__dirname, '../public/cv.pdf');
  const imagePath = path.join(__dirname, '../public/images/yo.jfif');
  
  const doc = new PDFDocument({ margin: 50, size: 'A4' });
  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;
  const leftMargin = 50;
  const rightMargin = 50;
  const contentWidth = pageWidth - leftMargin - rightMargin;
  
  // Crear archivo
  doc.pipe(fs.createWriteStream(pdfPath));

  // ========== HEADER CON IMAGEN Y DATOS ==========
  let yPosition = doc.y;
  
  // Imagen de perfil (circular)
  if (fs.existsSync(imagePath)) {
    doc.image(imagePath, leftMargin, yPosition, { width: 100, height: 100 });
  }
  
  // Datos de contacto al lado de la imagen
  doc.fontSize(24).font('Helvetica-Bold').fillColor('#000').text(PROFILE.name, leftMargin + 110, yPosition, { width: contentWidth - 110 });
  doc.fontSize(12).font('Helvetica').fillColor('#0891b2').text(PROFILE.title, leftMargin + 110, yPosition + 30, { width: contentWidth - 110 });
  doc.moveDown(0.5);
  
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(`Email: ${PROFILE.email}`, leftMargin + 110, yPosition + 50, { width: contentWidth - 110 });
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(`Telefono: ${PROFILE.phone}`, leftMargin + 110, yPosition + 65, { width: contentWidth - 110 });
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(`Ubicacion: ${PROFILE.location}`, leftMargin + 110, yPosition + 80, { width: contentWidth - 110 });
  
  doc.moveTo(leftMargin, yPosition + 115).lineTo(pageWidth - rightMargin, yPosition + 115).stroke();
  doc.moveDown(6);

  // ========== OBJETIVO PROFESIONAL ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('OBJETIVO PROFESIONAL', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1.2);
  
  doc.fontSize(10).font('Helvetica').fillColor('#333').text(PROFESSIONAL_OBJECTIVE, leftMargin, doc.y, {
    align: 'center',
    width: contentWidth,
    lineGap: 0
  });
  doc.moveDown(1);
  
  // Línea de separación con efecto shadow
  doc.strokeColor('#e5e7eb').lineWidth(1).moveTo(leftMargin + 50, doc.y).lineTo(pageWidth - rightMargin - 50, doc.y).stroke();
  doc.strokeColor('#f3f4f6').lineWidth(0.5).moveTo(leftMargin + 50, doc.y + 1.5).lineTo(pageWidth - rightMargin - 50, doc.y + 1.5).stroke();
  
  doc.moveDown(1.2);

  // ========== SOBRE MÍ ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('SOBRE MÍ', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  // Descripción con más detalle
  doc.fontSize(10).font('Helvetica').fillColor('#333').text(ABOUT_ME.description, leftMargin, doc.y, {
    align: 'justify',
    width: contentWidth,
    lineGap: -0.1
  });
  doc.moveDown(1.2);

  // Highlights en dos columnas mejorados - LAYOUT CORRECTO
  const highlightWidth = (contentWidth - 25) / 2;
  const startY = doc.y;
  
  // Primera fila: Objetivo y Enfoque
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#0891b2').text(ABOUT_ME.highlights[0].title, leftMargin, startY);
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(ABOUT_ME.highlights[0].text, leftMargin, doc.y, {
    width: highlightWidth - 5,
    lineGap: -0.2
  });
  
  // Segunda columna primera fila: Enfoque
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#0891b2').text(ABOUT_ME.highlights[1].title, leftMargin + highlightWidth + 25, startY);
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(ABOUT_ME.highlights[1].text, leftMargin + highlightWidth + 25, startY + 16, {
    width: highlightWidth - 5,
    lineGap: -0.2
  });
  
  // Mover a la siguiente fila
  doc.y = Math.max(doc.y, startY + 40);
  doc.moveDown(0.5);
  
  const secondRowY = doc.y;
  
  // Tercera columna: Motivación
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#0891b2').text(ABOUT_ME.highlights[2].title, leftMargin, secondRowY);
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(ABOUT_ME.highlights[2].text, leftMargin, doc.y, {
    width: highlightWidth - 5,
    lineGap: -0.2
  });
  
  // Cuarta columna: Valores
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#0891b2').text(ABOUT_ME.highlights[3].title, leftMargin + highlightWidth + 25, secondRowY);
  doc.fontSize(9).font('Helvetica').fillColor('#555').text(ABOUT_ME.highlights[3].text, leftMargin + highlightWidth + 25, secondRowY + 16, {
    width: highlightWidth - 5,
    lineGap: -0.2
  });
  
  // Ajustar posición final
  doc.y = Math.max(doc.y, secondRowY + 40);
  doc.moveDown(1);
  doc.strokeColor('#e5e7eb').lineWidth(1).moveTo(leftMargin + 50, doc.y).lineTo(pageWidth - rightMargin - 50, doc.y).stroke();
  doc.moveDown(1.2);

  // ========== EXPERIENCIA PROFESIONAL ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('EXPERIENCIA PROFESIONAL', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  EXPERIENCES.forEach((exp, idx) => {
    // Título del puesto en negrita y destacado
    doc.fontSize(11).font('Helvetica-Bold').fillColor('#000').text(exp.title, leftMargin);
    
    // Periodo y categoría en gris
    doc.fontSize(9).font('Helvetica').fillColor('#888').text(`${exp.period}  |  ${exp.category}`, leftMargin);
    doc.moveDown(0.2);
    
    // Descripción justificada
    doc.fontSize(10).font('Helvetica').fillColor('#555').text(exp.description, leftMargin, doc.y, {
      align: 'justify',
      width: contentWidth,
      lineGap: -0.15
    });
    
    if (idx < EXPERIENCES.length - 1) {
      doc.moveDown(0.35);
      doc.strokeColor('#e5e7eb').lineWidth(0.5).moveTo(leftMargin, doc.y).lineTo(pageWidth - rightMargin, doc.y).stroke();
      doc.moveDown(0.35);
    } else {
      doc.moveDown(1.2);
    }
  });

  // ========== PROYECTOS DESTACADOS ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('PROYECTOS DESTACADOS', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  PROJECTS.forEach((proj, idx) => {
    // Título del proyecto en negrita
    doc.fontSize(11).font('Helvetica-Bold').fillColor('#000').text(proj.title, leftMargin);
    doc.moveDown(0.1);
    
    // Descripción
    doc.fontSize(10).font('Helvetica').fillColor('#333').text(proj.description, leftMargin, doc.y, {
      align: 'justify',
      width: contentWidth,
      lineGap: -0.15
    });
    
    // Stack en color cyan
    doc.moveDown(0.2);
    doc.fontSize(9).font('Helvetica').fillColor('#0891b2').text(`Stack: ${proj.stack}`, leftMargin);
    
    if (idx < PROJECTS.length - 1) {
      doc.moveDown(0.35);
      doc.strokeColor('#e5e7eb').lineWidth(0.5).moveTo(leftMargin, doc.y).lineTo(pageWidth - rightMargin, doc.y).stroke();
      doc.moveDown(0.35);
    } else {
      doc.moveDown(1.5);
    }
  });

  // ========== PROFICIENCIA TÉCNICA ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('PROFICIENCIA TÉCNICA', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  TECH_PROFICIENCY.forEach((tech, idx) => {
    doc.fontSize(10).font('Helvetica').fillColor('#000').text(tech.name, leftMargin);
    
    // Barra de progreso
    const barWidth = contentWidth - 100;
    const filledWidth = (barWidth * tech.percentage) / 100;
    
    // Fondo de la barra
    doc.strokeColor('#e5e7eb').lineWidth(4).moveTo(leftMargin, doc.y).lineTo(leftMargin + barWidth, doc.y).stroke();
    
    // Barra rellena (gradiente visual con cyan)
    doc.strokeColor('#0891b2').lineWidth(4).moveTo(leftMargin, doc.y).lineTo(leftMargin + filledWidth, doc.y).stroke();
    
    // Porcentaje
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#0891b2').text(`${tech.percentage}%`, leftMargin + barWidth + 10, doc.y - 2);
    
    doc.moveDown(0.8);
  });
  
  doc.moveDown(1);

  // ========== HABILIDADES TECNICAS ==========
  // Forzar salto de página si no hay suficiente espacio
  if (doc.y > pageHeight - 200) {
    doc.addPage();
  }
  
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('HABILIDADES TECNICAS', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  doc.fontSize(10).font('Helvetica').fillColor('#555').text(SKILLS.join(' • '), leftMargin, doc.y, {
    align: 'justify',
    width: contentWidth,
    lineGap: -0.15
  });
  doc.moveDown(1.5);

  // ========== FORMACION ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('FORMACION', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  doc.fontSize(11).font('Helvetica-Bold').fillColor('#000').text(EDUCATION.school, leftMargin);
  doc.fontSize(10).font('Helvetica').fillColor('#555').text(EDUCATION.program, leftMargin);
  doc.fontSize(9).font('Helvetica').fillColor('#888').text(`${EDUCATION.startDate} - ${EDUCATION.endDate}`, leftMargin);
  doc.moveDown(1.5);

  // ========== IDIOMAS ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('IDIOMAS', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  doc.fontSize(10).font('Helvetica').fillColor('#555').text(
    LANGUAGES.map(l => `${l.name} (${l.level})`).join(' • '),
    leftMargin, doc.y, { width: contentWidth, lineGap: -0.15 }
  );
  
  doc.moveDown(1.5);

  // ========== METODOLOGÍAS ==========
  doc.fontSize(13).font('Helvetica-Bold').fillColor('#0891b2').text('METODOLOGÍAS', leftMargin, doc.y, { align: 'center', width: contentWidth });
  doc.moveDown(0.2);
  doc.moveTo(leftMargin + contentWidth / 2 - 40, doc.y).lineTo(leftMargin + contentWidth / 2 + 40, doc.y).strokeColor('#0891b2').lineWidth(2).stroke();
  doc.moveDown(1);
  
  doc.fontSize(10).font('Helvetica').fillColor('#555').text(
    METHODOLOGIES.join(' • '),
    leftMargin, doc.y, { width: contentWidth, lineGap: -0.15, align: 'justify' }
  );

  doc.end();

  console.log(`\n✓ PDF generado correctamente en: ${pdfPath}\n`);
};

generatePDF();
