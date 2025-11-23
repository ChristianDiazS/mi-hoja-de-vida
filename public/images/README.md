# Carpeta de Imágenes

## 📷 Cómo Agregar tu Foto de Perfil

1. **Guarda tu foto** como `profile.jpg` (o `profile.png`) en esta carpeta:
   ```
   public/images/profile.jpg
   ```

2. **Requisitos de la imagen:**
   - Formato: JPG, PNG o WebP
   - Tamaño recomendado: 400x400 px (mínimo)
   - Peso: Menos de 200KB (para optimizar carga)
   - Proporción: Cuadrada (1:1) para mejor presentación

3. **Opciones:**
   - Si no tienes foto, el sistema muestra un avatar con tus iniciales (CD)
   - Puedes usar cualquier foto profesional
   - Recomendación: Foto clara, bien iluminada, fondo neutro

4. **Cambiar el nombre:**
   Si prefieres otro nombre, edita en `src/components/Hero.jsx`:
   ```jsx
   src="/images/profile.jpg"  ← Cambia aquí
   ```

---

**Tu CV ya está configurado para mostrar la foto automáticamente cuando la coloques en esta carpeta.**
