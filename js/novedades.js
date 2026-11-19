(() => {
 'use strict';
 const defaultItems=Array.isArray(window.ET20_NOVEDADES_INICIALES)?window.ET20_NOVEDADES_INICIALES:[];
 const permitidos=new Set(['index.html','novedades.html','proyectos.html','proyectos.html#galeria-arduino','practicas.html','contacto.html','institucion.html','nivel-educativo.html','inscripciones.html']);
 function escapeLink(url){return permitidos.has(String(url||''))?url:'novedades.html';}
 function normalizar(data){
   return (Array.isArray(data)?data:[]).filter(item=>item && item.estado==='publicada' && /^\d{4}-\d\d-\d\d$/.test(item.fecha||'') && item.titulo && item.resumen)
    .map(item=>({...item,enlace:escapeLink(item.enlace),imagen:/^img\/[\w\-\/]+\.(jpg|jpeg|png|webp)$/.test(item.imagen||'')?item.imagen:'img/fachada-et20.jpg'}))
    .sort((a,b)=>b.fecha.localeCompare(a.fecha));
 }
 function formatFecha(str){const [y,m,d]=str.split('-');return `${d}/${m}/${y}`;}
 function card(item){
  const article=document.createElement('article');article.className='noticia-card';
  const imageLink=document.createElement('a');imageLink.className='noticia-imagen';imageLink.href=item.enlace;
  const img=document.createElement('img');img.src=item.imagen;img.alt='Imagen de la novedad: '+item.titulo;img.loading='lazy';imageLink.append(img);
  const content=document.createElement('div');content.className='noticia-contenido';
  const meta=document.createElement('div');meta.className='noticia-meta';
  const tag=document.createElement('span');tag.textContent=item.categoria||'Novedades';
  const time=document.createElement('time');time.dateTime=item.fecha;time.textContent=formatFecha(item.fecha)+(item.fechaFin?' al '+formatFecha(item.fechaFin):'');meta.append(tag,time);
  const h=document.createElement('h3');h.textContent=item.titulo;
  const p=document.createElement('p');p.textContent=item.resumen;
  const a=document.createElement('a');a.className='text-link';a.href=item.enlace;a.textContent=item.textoEnlace||'Leer más';
  content.append(meta,h,p,a);article.append(imageLink,content);return article;
 }
 function mostrar(items){
  const todas=normalizar(items);window.ET20_NOVEDADES=todas;
  document.querySelectorAll('[data-noticias-lista]').forEach(grid=>{
    const featured=grid.dataset.noticiasLista==='destacadas';
    const visibles=featured?todas.filter(n=>n.destacada).slice(0,3):todas;
    grid.replaceChildren(...visibles.map(card));
  });
  document.dispatchEvent(new CustomEvent('et20:novedades-actualizadas',{detail:{cantidad:todas.length}}));
 }
 // Datos locales incorporados al ZIP para que el sitio funcione también sin Internet.
 mostrar(defaultItems);
 const endpoint=String(window.ET20_NOVEDADES_ENDPOINT||'').trim();
 if(!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) return;
 // JSONP exclusivamente para datos públicos. No incluir información personal ni credenciales en Sheets.
 const callback='et20NewsCallback_'+Math.random().toString(36).slice(2);
 const script=document.createElement('script');script.async=true;
 const clear=()=>{script.remove();delete window[callback];};
 const watchdog=setTimeout(clear,12000);
 window[callback]=(response)=>{
   clearTimeout(watchdog);clear();
   if(response && response.ok && Array.isArray(response.noticias)) mostrar(response.noticias);
 };
 script.onerror=()=>{clearTimeout(watchdog);clear();};
 script.src=endpoint+'?callback='+encodeURIComponent(callback)+'&t='+Date.now();
 document.head.append(script);
})();
