/** ET20 — recepción de consultas en planilla institucional.
 * Configurar ID_PLANILLA en Propiedades de secuencia de comandos.
 * No utilizar con datos sensibles. Publicar sólo con autorización institucional.
 */
const HOJA = 'Consultas';
const HEADERS = ['Fecha y hora','Nombre y apellido','Correo','Tema','Mensaje','Estado','Respuesta / observaciones'];
function doGet(){return HtmlService.createHtmlOutput('<h2>Formulario ET20</h2><p>Ingresá al sitio institucional para enviar una consulta.</p>');}
function doPost(e){
  const p=(e&&e.parameter)||{};
  const result=(ok,message)=>HtmlService.createHtmlOutput('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Consulta ET20</title><style>body{font:17px/1.6 Arial;max-width:600px;margin:10vh auto;padding:20px;color:#2b2021}h1{color:#7b1e2b}</style><h1>'+ (ok?'Consulta recibida':'No se pudo registrar la consulta')+'</h1><p>'+message+'</p><p>Escuela Técnica N.º 20 «Antonio Berni»</p></html>');
  if(p.website) return result(false,'No se procesó la consulta.');
  const clean=(v,n)=>String(v||'').trim().slice(0,n);
  const nombre=clean(p.nombre,100),correo=clean(p.correo,150),tema=clean(p.tema,100),mensaje=clean(p.mensaje,1500),consent=clean(p.consentimiento,10);
  if(!nombre||!correo||!tema||!mensaje||consent!=='Si'||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) return result(false,'Revisá los campos del formulario y volvé a intentarlo.');
  const id=PropertiesService.getScriptProperties().getProperty('ID_PLANILLA');
  if(!id) return result(false,'El sistema de recepción todavía no está configurado. Escribí al correo institucional.');
  const safe=s=> /^[=+@-]/.test(s) ? "'"+s : s; // impedir fórmulas inyectadas al exportar Excel
  const lock=LockService.getScriptLock();
  try{
    lock.waitLock(15000);
    const book=SpreadsheetApp.openById(id);
    const sh=book.getSheetByName(HOJA)||book.insertSheet(HOJA);
    if(sh.getLastRow()===0){sh.appendRow(HEADERS);sh.setFrozenRows(1);}
    sh.appendRow([new Date(),safe(nombre),safe(correo),safe(tema),safe(mensaje),'Pendiente','']);
    return result(true,'Tu mensaje se guardó correctamente. La institución podrá contactarse mediante el correo que indicaste.');
  }catch(err){console.error(err);return result(false,'Ocurrió un problema al guardar el mensaje. Escribí directamente al correo institucional.');}
  finally{try{lock.releaseLock()}catch(err){}}
}
