# Sitio web institucional ET N.º 20 «Antonio Berni»

> *Aprender haciendo. Proyectar el futuro.*

Proyecto escolar de sitio web institucional de la **Escuela Técnica N.º 20 «Antonio Berni»** (Villa Mercedes, San Luis, Argentina), desarrollado por estudiantes de **4.º y 7.º año** para la Jornada de Puertas Abiertas 2026.

## Descripción

Es un sitio web estático de **12 páginas** que presenta la escuela: su historia, su propuesta educativa, los espacios curriculares de 1.º a 7.º año, las prácticas y proyectos de los estudiantes (con una galería de proyectos Arduino), las salidas laborales, las oportunidades de becas, la información para inscribirse y los datos de contacto.

Además incluye:

- **BerniBot**: asistente integrado en todas las páginas que responde consultas frecuentes.
- **Novedades**: noticias institucionales que pueden actualizarse desde una planilla de Google Sheets, sin editar el HTML.
- **Radio Remolacha**: sección dedicada a la radio estudiantil de la escuela.
- **Formulario de contacto**: preparado para enviar las consultas a una planilla privada de la escuela (desactivado hasta configurarlo).

## Tecnologías utilizadas

- **HTML5**: estructura de las páginas, con accesibilidad (enlace "Saltar al contenido", textos alternativos, etiquetas ARIA).
- **CSS3**: diseño responsive (se adapta a celulares) y estilos por componente.
- **JavaScript** (sin frameworks): menú, galería de imágenes ampliables, BerniBot, novedades y formulario.
- **Google Sheets + Apps Script**: para las novedades automáticas y la recepción de consultas.
- **Google Maps** (mapa incrustado) para mostrar la ubicación de la escuela.

## Cómo ver el proyecto

1. Descargar o clonar el repositorio:
   ```bash
   git clone https://github.com/valentinaasoria-lgtm/proyecto.git
   ```
2. Entrar a la carpeta del proyecto.
3. Abrir el archivo **`index.html`** con Chrome o Edge.

El sitio funciona **sin conexión a Internet**. Solo necesitan conexión el mapa, el enlace a Instagram, la web de la radio, las novedades desde Google Sheets y el envío del formulario.

> El formulario de contacto está **deshabilitado a propósito** hasta que la escuela configure la planilla (ver `integracion_planilla/README_CONFIGURACION.md`). Mientras tanto no se envían ni se guardan datos.

## Páginas del sitio

| Página | Contenido |
|---|---|
| `index.html` | Inicio, novedades destacadas, galería Arduino y contacto |
| `institucion.html` | Historia de la escuela |
| `nivel-educativo.html` | Propuesta educativa |
| `materias.html` | Espacios curriculares de 1.º a 7.º año |
| `practicas.html` | Prácticas y talleres con otras instituciones |
| `proyectos.html` | Proyectos de estudiantes y galería Arduino |
| `salidas-laborales.html` | Proyección laboral |
| `becas.html` | Oportunidades de capacitación y becas |
| `inscripciones.html` | Información para ingresar |
| `novedades.html` | Noticias y fechas importantes |
| `contacto.html` | Ubicación, correo, Instagram y formulario |
| `radio.html` | Radio Remolacha |

## Estructura del repositorio

```
├── README.md                  → este archivo
├── index.html                 → página principal
├── *.html                     → resto de las páginas del sitio
├── css/                       → hojas de estilo (base, componentes, sitio, contacto, bernibot)
├── js/                        → scripts (menú, BerniBot, novedades, contacto, currícula)
├── img/                       → imágenes, íconos, fotos y videos de proyectos Arduino
├── data/novedades.json        → copia de respaldo de las novedades
├── app-novedades-google/      → código y guía para administrar novedades desde Google Sheets
├── integracion_planilla/      → código y guía para recibir consultas en una planilla
└── documentacion/             → informes de cambios, pendientes y guías de mantenimiento
```

## Mantenimiento básico

- **Cambiar las respuestas de BerniBot:** editar `js/bernibot-data.js`.
- **Agregar una novedad:** cargar una fila en la planilla de Google (ver `app-novedades-google/GUIA_ACTIVACION.md`) o, sin planilla, editar `novedades.html` y `js/novedades-local.js`.
- **Activar el formulario de contacto:** seguir `integracion_planilla/README_CONFIGURACION.md` y completar `js/contacto-config.js`.
- **Más detalles:** ver la carpeta `documentacion/`, en especial `INFORME_INTEGRACION_FINAL.md`.

## Antes de publicar en Internet

- Verificar con la escuela los textos, las fechas y los horarios.
- Confirmar las autorizaciones de difusión de fotos y videos de estudiantes.
- Revisar los derechos de las imágenes y los recursos gráficos utilizados.
- Probar el formulario con una consulta real.

## Material de presentación

Además del sitio, el proyecto cuenta con material para la Jornada de Puertas Abiertas (27/11/2026) y una proyección futura: presentaciones, guiones de exposición, una planilla de prueba piloto y un cartel A3.

## Integrantes

- Giuliano Marconi: README

## Contexto

Proyecto realizado en la Escuela Técnica N.º 20 «Antonio Berni», Villa Mercedes, San Luis, año 2026.
Contacto de la escuela: et20sanluis@gmail.com · Instagram: [@et20aberni](https://www.instagram.com/et20aberni/)
