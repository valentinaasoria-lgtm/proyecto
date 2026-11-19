/* Sitio autónomo ET20: todas las funciones trabajan sin servidor ni peticiones externas. */
(()=>{'use strict';
const menuButton=document.querySelector('[data-menu-toggle]'), menu=document.querySelector('[data-nav-links]');
if(menuButton&&menu){const close=()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')};menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));}
const yearData=window.ET20_CURRICULA||{};
const container=document.querySelector('#year-content'),tabs=[...document.querySelectorAll('[data-year]')];
if(container&&tabs.length){
 const render=year=>{
  container.replaceChildren();
  const data=yearData[year];if(!data)return;
  const title=document.createElement('h2');title.className='curricular-year-heading';title.textContent=year+'.º año';container.append(title);
  const layout=document.createElement('div');layout.className='curricular-columns';
  const add=(heading,items)=>{if(!items.length)return;const section=document.createElement('section');section.className='curricular-panel';const h=document.createElement('h3');h.textContent=heading;section.append(h);const ol=document.createElement('ol');ol.className='curricular-list';items.forEach(item=>{const li=document.createElement('li');li.textContent=item;ol.append(li)});section.append(ol);layout.append(section)};
  add(year==='1'?'Materias':'Materias de formación general',data.general);
  add('Materias técnicas',data.tecnicas);
  container.append(layout);
  tabs.forEach(t=>{const selected=t.dataset.year===year;t.classList.toggle('selected',selected);t.setAttribute('aria-pressed',String(selected))});
 };
 tabs.forEach(t=>t.addEventListener('click',()=>render(t.dataset.year)));render('1');
}
const lightbox=document.querySelector('[data-modal]'),large=lightbox?.querySelector('img'),caption=lightbox?.querySelector('[data-modal-caption]');let previousFocus=null;
if(lightbox){const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';previousFocus?.focus()};document.querySelectorAll('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;large.src=button.dataset.lightbox;large.alt=button.querySelector('img')?.alt||'Fotografía ampliada';caption.textContent=button.dataset.caption||'';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';lightbox.querySelector('button').focus()}));lightbox.querySelector('button').addEventListener('click',close);lightbox.addEventListener('click',event=>{if(event.target===lightbox)close()});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&lightbox.classList.contains('open'))close()})}
const year=document.querySelector('[data-year-current]');if(year)year.textContent=String(new Date().getFullYear());
})();