# ET20 — Sitio autónomo para la muestra (2026)

**Cómo abrir:** extraer el ZIP completo sin cambiar la estructura. Entrar a la carpeta `ET20_DEFINITIVO_AUTONOMO_2026` y abrir `index.html` con Chrome, Edge o Firefox. **No es necesario instalar software ni ejecutar servidor web.**

Todas las fotos, los estilos y los scripts usados se guardan dentro de esta misma carpeta. El contenido de las páginas, el filtro de espacios técnicos, el menú para celulares y el visor de fotografías funcionan sin acceso a Internet. No hay formularios que transmitan datos ni llamadas `fetch()`.

## Base y alcance

Se partió exclusivamente de la carpeta Drive proporcionada como base estructural: `sitio-escuela`, con sus páginas Inicio, Institución, Nivel educativo, Materias, Prácticas, Salidas laborales, Becas, Inscripciones, Contacto y Radio. Se preservaron nombres y estructura conceptual, con reescritura editorial y consolidación de scripts. Se creó una sección adicional, `proyectos.html`, para mostrar aprendizajes técnicos. Las tres fotografías y el escudo se tomaron **solo de los archivos compartidos por la docente en esta conversación**, no de versiones integradas anteriores.

## Correcciones principales

- Redacción institucional, ortografía, lenguaje coherente y navegación consolidada.
- Portada con foto real de la ET20 y colores del escudo.
- Contenidos históricos limitados a datos aportados por la escuela; línea de tiempo clara.
- Se sustituyeron imágenes SVG de ejemplo por fotografías disponibles aportadas por la docente.
- Materias: retirados los nombres genéricos; listado indicativo por año, sin confundirlo con el plan oficial.
- Becas: se explica que la escuela NO otorga becas; difunde convocatorias de Jala University y Sinergia.
- Trayectorias: Gastón Maidana, Ramiro Bordón, Abigail Arias y Julián Pérez, según testimonio institucional; antes de publicación pública confirmar autorizaciones.
- Inscripciones: eliminado el formulario de demostración que no enviaba datos; ahora informa los pasos sin simular recepción.
- Contacto: sin números, direcciones ni perfiles institucionales inventados.
- Radio Remolacha: espacio de presentación sin horarios ni audio falsos.
- Interactividad: menú móvil accesible, filtro de materias, visor de fotos, año automático.
- JavaScript local, sin `fetch()`; compatible con apertura por doble clic.

## Pendiente para publicar en Internet

1. Confirmar autorización para usar las fotografías y difundir nombres y experiencias de estudiantes, especialmente del alumno actualmente en 7.º.
2. Validar el título técnico exacto y el plan de estudios oficial de cada año.
3. Confirmar datos de contacto, dirección, horario y requisitos de inscripción.
4. Confirmar los detalles de programas externos, carrera e inicio académico directamente con Jala University y Sinergia.
5. Agregar nuevas fotografías originales autorizadas de laboratorios, proyectos y eventos.
6. Confirmar fechas y documentación de la reseña histórica con fuente oficial.

**Importante:** esta es una versión de muestra autónoma, lista para abrirse sin Internet. No equivale a la autorización institucional para publicarse como web oficial.

## Verificación técnica de la entrega

Se revisaron las 11 páginas HTML y se comprobaron todas las referencias relativas `href`/`src`: **0 archivos faltantes**. En Chromium se comprobaron los anchos de 1440, 768, 390 y 320 píxeles, sin desbordamientos horizontales ni errores de JavaScript. Se probaron los filtros de materias, el menú móvil y el visor de fotografías. La prueba automatizada se efectuó con los recursos insertados localmente en el navegador para sortear restricciones del entorno a navegación por archivos o localhost. La estructura entregada no usa solicitudes AJAX, fuentes remotas ni dependencias CDN.
