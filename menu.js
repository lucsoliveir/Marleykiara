/* menu do celular: botao de 3 riscos abre/fecha a lista de paginas (telas ate 900px) */
(function(){
  var hd=document.querySelector('header'),nav=hd&&hd.querySelector('.nav nav');if(!nav)return;
  var row=hd.querySelector('.nav'),b=document.createElement('button');
  b.type='button';b.className='menu-btn';b.setAttribute('aria-label','Abrir menu');b.setAttribute('aria-expanded','false');
  b.innerHTML='<i></i><i></i><i></i>';row.appendChild(b);
  function set(o){hd.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')}
  b.addEventListener('click',function(){set(!hd.classList.contains('open'))});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('click',function(e){if(hd.classList.contains('open')&&!hd.contains(e.target))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>900)set(false)});
})();
