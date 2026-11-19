/* Chatbot institucional ET20 - JavaScript nativo, sin librerías ni servicios externos.
   Se puede integrar con <script defer src="..."> en cualquier página. */
(() => {
  'use strict';
  const cfg = window.ET20_CHATBOT_CONFIG;
  if (!cfg || document.getElementById('etbot-root')) return;
  const root = document.createElement('section'); root.id='etbot-root'; root.className='etbot-root';
  root.setAttribute('aria-label','Asistente virtual de la escuela');
  const icon = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
  const launcher = document.createElement('button'); launcher.type='button'; launcher.className='etbot-launcher'; launcher.setAttribute('aria-label','Abrir asistente virtual'); launcher.setAttribute('aria-expanded','false'); launcher.innerHTML='<img src="img/escudo-et20.png" alt="" width="42" height="42">';
  const panel=document.createElement('div'); panel.className='etbot-window'; panel.id='etbot-panel'; panel.hidden=true; panel.setAttribute('role','dialog'); panel.setAttribute('aria-label','Chat institucional');
  launcher.setAttribute('aria-controls','etbot-panel');
  const header=document.createElement('header'); header.className='etbot-header';
  const emblem=document.createElement('span');emblem.className='etbot-emblem';emblem.innerHTML='<img src="img/escudo-et20.png" alt="" width="34" height="34">';emblem.setAttribute('aria-hidden','true');
  const headText=document.createElement('div');
  const title=document.createElement('p');title.className='etbot-title';title.textContent=cfg.nombre;
  const subtitle=document.createElement('p');subtitle.className='etbot-subtitle';subtitle.textContent=cfg.subtitulo;
  headText.append(title,subtitle);
  const close=document.createElement('button');close.className='etbot-close';close.type='button';close.setAttribute('aria-label','Cerrar asistente');close.textContent='×';
  header.append(emblem,headText,close);
  const messages=document.createElement('div');messages.className='etbot-messages';messages.setAttribute('role','log');messages.setAttribute('aria-live','polite');messages.setAttribute('aria-relevant','additions');
  const chips=document.createElement('div');chips.className='etbot-chips';chips.setAttribute('aria-label','Preguntas frecuentes');
  const form=document.createElement('form');form.className='etbot-form';
  const input=document.createElement('input');input.className='etbot-input';input.type='text';input.name='mensaje';input.maxLength=250;input.autocomplete='off';input.placeholder='Escribí tu consulta...';input.setAttribute('aria-label','Escribí tu consulta');
  const send=document.createElement('button');send.type='submit';send.className='etbot-send';send.textContent='Enviar';form.append(input,send);
  const foot=document.createElement('div');foot.className='etbot-foot';foot.textContent=cfg.privacidad;
  panel.append(header,messages,chips,form,foot);root.append(panel,launcher);document.body.append(root);
  const clean = v => String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9ñ\s]/g,' ').replace(/\s+/g,' ').trim();
  const words = s => clean(s).split(' ').filter(Boolean);
  function addMessage(text,byUser=false,link=null){
    const bubble=document.createElement('div');bubble.className='etbot-message '+(byUser?'etbot-message--user':'etbot-message--bot');
    const body=document.createElement('span');body.textContent=text;bubble.append(body);
    if(link && cfg.rutas[link.ruta]) { const a=document.createElement('a'); a.textContent=link.texto+' →';a.href=cfg.rutas[link.ruta];bubble.append(document.createElement('div'),a); }
    messages.append(bubble);messages.scrollTop=messages.scrollHeight;
  }
  function topicByText(message){
    const query=clean(message); if(!query) return null;
    let best=null,bestScore=0;
    for(const item of cfg.respuestas){let score=0;
      for(const phrase of item.palabras){const p=clean(phrase);if(!p)continue;
        if(query===p)score=Math.max(score,100+p.length);
        else if(query.includes(p) && (p.includes(' ')||p.length>=5))score+=p.length+8;
        else if(words(query).includes(p) && p.length>=4)score+=p.length+4;
      }
      if(score>bestScore){best=item;bestScore=score;}
    }
    return bestScore>=8?best:null;
  }
  function ask(text,topic){
 const q=String(text||'').trim().slice(0,250);if(!q)return;addMessage(q,true);
 const match=topic||topicByText(q);
 const newsKeywords=/novedad|noticia|fecha|examen|trimestral|previo|regular|colaci[oó]n|egresad|educaci[oó]n t[eé]cnica|acto|jornada|calendario/i;
 if((match && match.id==='novedades') || newsKeywords.test(q)){
   const all=window.ET20_NOVEDADES||[];
   const normalized=clean(q);
   const specific=all.filter(n=>clean(n.titulo+' '+n.categoria).split(' ').some(w=>w.length>=5 && normalized.includes(w)));
   const chosen=specific.length?specific.slice(0,3):all.slice(0,6);
   if(chosen.length){addMessage('Estas son las novedades del calendario escolar y actividades institucionales:');
     chosen.forEach(n=>{const parts=n.fecha.split('-');addMessage(`${parts[2]}/${parts[1]}/${parts[0]} · ${n.titulo}. ${n.resumen}`,false,{texto:'Ver novedades',ruta:'novedades'});});return;}
 }
 if(match)addMessage(match.texto,false,match.enlace);else addMessage(cfg.sinRespuesta);
}
  for(const item of cfg.respuestas){const btn=document.createElement('button');btn.type='button';btn.className='etbot-chip';btn.textContent=item.etiqueta;btn.addEventListener('click',()=>ask(item.etiqueta,item));chips.append(btn);}
  let initialized=false;
  function open(){panel.hidden=false;launcher.hidden=true;launcher.setAttribute('aria-expanded','true');if(!initialized){addMessage(cfg.bienvenida);initialized=true;}input.focus();}
  function shut(){panel.hidden=true;launcher.hidden=false;launcher.setAttribute('aria-expanded','false');launcher.focus();}
  launcher.addEventListener('click',open);close.addEventListener('click',shut);
  form.addEventListener('submit',event=>{event.preventDefault();const value=input.value;input.value='';ask(value);input.focus();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden)shut();});
})();
