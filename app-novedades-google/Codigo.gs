/** ET20 • Publicación de novedades desde Google Sheets.
 * 1. Crear planilla con hoja llamada NOVEDADES.
 * 2. Copiar cabeceras desde PLANTILLA_NOVEDADES.csv e importar filas.
 * 3. Extensiones > Apps Script: pegar este código.
 * 4. Implementar > Nueva implementación > Aplicación web:
 *    Ejecutar como: Yo; acceso: Cualquier persona (solo lectura pública).
 * 5. Pegar URL /exec en js/novedades-config.js y subir el sitio.
 * IMPORTANTE: Solo divulgar datos públicos institucionales, sin datos de alumnos.
 */
function doGet(e) {
 const callback=String((e && e.parameter && e.parameter.callback)||'');
 if (!/^et20NewsCallback_[a-z0-9]{1,30}$/.test(callback)) {
   return ContentService.createTextOutput(JSON.stringify({ok:false,error:'Callback inválido'}))
     .setMimeType(ContentService.MimeType.JSON);
 }
 const sheet=SpreadsheetApp.getActiveSpreadsheet().getSheetByName('NOVEDADES');
 if (!sheet) return ContentService.createTextOutput(callback+'('+JSON.stringify({ok:false,error:'Falta hoja NOVEDADES'})+');')
  .setMimeType(ContentService.MimeType.JAVASCRIPT);
 const values=sheet.getDataRange().getDisplayValues();
 const headers=values.shift().map(s=>String(s).trim());
 const wanted=['id','fecha','fechaFin','categoria','titulo','resumen','imagen','enlace','textoEnlace','destacada','estado'];
 const out=values.map(row=>Object.fromEntries(headers.map((h,i)=>[h,row[i]])))
  .filter(item=>item.estado.toLowerCase()==='publicada' && /^\d{4}-\d{2}-\d{2}$/.test(item.fecha) && item.titulo && item.resumen)
  .map(item=>{
    const n={};wanted.forEach(k=>n[k]=String(item[k]||'').slice(0,k==='resumen'?1000:250));
    n.destacada=/^(si|sí|true|1)$/i.test(n.destacada);return n;
  });
 const payload=JSON.stringify({ok:true,noticias:out});
 return ContentService.createTextOutput(callback+'('+payload+');')
  .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
