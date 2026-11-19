# Formulario ET20 conectado a planilla — puesta en marcha

## Qué funciona inmediatamente
La portada muestra la ubicación, el correo y el Instagram. El formulario está **desactivado** hasta que exista un destino seguro para guardar las consultas. El mapa y los enlaces externos requieren Internet.

## Habilitar recepción (requiere cuenta de Google institucional)
1. Crear una **planilla privada** de Google Sheets con acceso limitado a personal autorizado. Puede importarse `PLANTILLA_REGISTRO_CONSULTAS_ET20.xlsx`.
2. En la planilla, elegir **Extensiones → Apps Script**, crear un proyecto y pegar todo el contenido de `Codigo.gs`.
3. En **Configuración del proyecto → Propiedades de secuencia de comandos**, agregar `ID_PLANILLA` con el ID de la planilla (parte de la URL entre `/d/` y `/edit`).
4. En **Implementar → Nueva implementación → Aplicación web**, ejecutar como propietario/a y elegir el acceso que permita al público enviar consultas (en cuentas Workspace, la política institucional puede restringirlo). **No compartir la planilla con el público**.
5. Copiar exclusivamente la URL de la aplicación web terminada en `/exec` y pegarla como valor de `endpoint` dentro de `js/contacto-config.js`.
6. Volver a abrir `index.html` en Chrome. El botón **Enviar consulta** se habilitará. Realizar una consulta de prueba y confirmar que aparezca una fila en la pestaña **Consultas**; comprobar también la pantalla de confirmación.
7. Para obtener el Excel, en Google Sheets seleccionar **Archivo → Descargar → Microsoft Excel (.xlsx)**. La planilla de trabajo permanece online y las exportaciones son copias.

## Seguridad y operación
- No solicitar DNI, fecha de nacimiento, contraseñas ni datos médicos.
- Solicitar autorización institucional para tratar estos datos y designar personas responsables de responder.
- Mantener privada la planilla. Revisar diariamente y marcar el estado de cada consulta.
- Una aplicación web pública de Apps Script puede recibir spam: supervisar cuotas, implementar mitigación adicional si se publica masivamente y restringir acceso si hay abuso.
- El sitio puede visualizarse sin Internet, **pero el envío del formulario y el mapa interactivo requieren conexión**.
- Si cambia la implementación, actualizar `contacto-config.js` y volver a probar antes de difundir.
- No configurar la URL del formulario con una URL de la planilla: debe ser la aplicación web `/exec`.
