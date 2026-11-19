# Administrador de novedades ET20 — Google Sheets

## Objetivo
Una docente autorizada actualiza una hoja de cálculo y las noticias se muestran automáticamente en **Inicio**, **Novedades** y **BerniBot**, sin editar HTML. La página sigue siendo estática; las noticias nuevas necesitan Internet y una hoja publicada.

## Instalación inicial (una sola vez)
1. En Google Drive, crear una hoja de cálculo llamada **ET20 — Novedades institucionales**.
2. Importar `PLANTILLA_NOVEDADES.csv` en una pestaña y nombrarla exactamente `NOVEDADES`. Si Google Sheets convierte fechas, dejar las columnas **fecha** y **fechaFin** como *Texto sin formato* y utilizar `AAAA-MM-DD`.
3. Abrir **Extensiones > Apps Script**, pegar `Codigo.gs` y guardar.
4. Elegir **Implementar > Nueva implementación > Aplicación web**; ejecutar como **Yo** y acceso **Cualquier persona** (es una API pública de lectura). Autorizar el despliegue con la cuenta institucional.
5. Copiar la URL que termina en `/exec` y pegarla entre las comillas de `window.ET20_NOVEDADES_ENDPOINT` en `js/novedades-config.js`.
6. Publicar la carpeta del sitio en su alojamiento web. Al abrir/reabrir la web, leerá las novedades publicadas de la planilla.

## Uso cotidiano
- Para agregar noticias, incorporar una nueva fila a la hoja **NOVEDADES**.
- Escribir `publicada` en la columna **estado** únicamente después de revisar datos e imágenes. Para ocultar una noticia, cambiar a `borrador`.
- `destacada`: `Sí` muestra la noticia en el inicio (máximo tres). Todas las publicadas aparecen en `novedades.html`, ordenadas por fecha.
- **No cambiar los nombres de columnas**. El campo `enlace` debe corresponder a una ruta del sitio permitida; `imagen` debe apuntar a una foto existente dentro de `img/`.
- Para fotos o videos nuevos, subir los archivos al alojamiento web en `img/proyectos/` y usar esa ruta relativa. La hoja no sube automáticamente los archivos.
- No incluir nombres, fotos identificables o datos personales de menores sin la autorización correspondiente.

## Fechas incorporadas (revisión institucional antes de publicar)
- 15/11/2026: Día de la Educación Técnica.
- A partir del 17/11/2026: evaluaciones del tercer trimestre (consultar cronogramas por curso).
- 27/11/2026: Jornada de Puertas Abiertas (horario no confirmado).
- 02/12/2026, 19:00: acto de egresados en UPrO.
- 03 al 09/12/2026: exámenes previos.
- 10 al 16/12/2026: exámenes regulares y finales.
Las fechas escolares se recuperaron de la planificación previa del sitio, pero antes de difusión pública debe corroborarlas la Secretaría.

## Sin conexión / sin configurar Google Sheets
El ZIP conserva una copia inicial de las noticias en `js/novedades-local.js`. Sin URL de Apps Script configurada, esa copia se muestra y **no se actualiza desde Google Sheets**. El archivo `data/novedades.json` es una copia editable/exportable de respaldo, no un servidor automático.

## Seguridad
La hoja debe dedicarse exclusivamente a las noticias públicas. Usar permisos de edición limitados al personal autorizado. El endpoint es público solo para lectura; el código no acepta escrituras anónimas. No almacenar contraseñas en HTML o JS.
