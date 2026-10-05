var t=document.getElementById('track');
var L=document.querySelector('.arr.l'),R=document.querySelector('.arr.r');
function ends(){var m=t.scrollWidth-t.clientWidth-2;L.classList.toggle('off',t.scrollLeft<=2);R.classList.toggle('off',t.scrollLeft>=m)}
function go(d){t.scrollBy({left:d*t.clientWidth*.6,behavior:'smooth'})}
L.onclick=function(){go(-1)};R.onclick=function(){go(1)};
/* fotos que chegam ao canto esquerdo (embaixo do titulo) diminuem de forma continua, junto com a rolagem */
var items=t.children,raf=0,gh=document.querySelector('.track-w .gh');
function shrink(){raf=0;var tl=t.getBoundingClientRect().left,pad=parseFloat(getComputedStyle(t).paddingLeft)||0,w=items[0].offsetWidth,g=8;
  if(gh)gh.style.width=(w-g)+'px';
  for(var i=0;i<items.length;i++){var el=items[i].firstElementChild;if(!el)continue;
    var rel=items[i].getBoundingClientRect().left-tl-pad;
    var f=Math.max(0,Math.min(1,(rel-.75*w)/(.25*w+g)));
    el.style.height=(62+38*f)+'%'}}
function upd(){ends();if(!raf)raf=requestAnimationFrame(shrink)}
t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);
/* roda do mouse (vertical) rola a galeria para o lado enquanto houver fotos; nas pontas a pagina volta a rolar */
t.addEventListener('wheel',function(e){
  if(Math.abs(e.deltaX)>Math.abs(e.deltaY))return;
  var max=t.scrollWidth-t.clientWidth;if(max<=0)return;
  var next=t.scrollLeft+e.deltaY;
  if((e.deltaY<0&&t.scrollLeft<=0)||(e.deltaY>0&&t.scrollLeft>=max))return;
  e.preventDefault();t.scrollLeft=Math.max(0,Math.min(max,next));
},{passive:false});
/* arrastar com o mouse */
var down=false,sx=0,sl=0,moved=false;
t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.button!==0)return;down=true;moved=false;sx=e.clientX;sl=t.scrollLeft});
window.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;t.classList.add('drag')}if(moved)t.scrollLeft=sl-dx});
window.addEventListener('pointerup',function(){if(!down)return;down=false;t.classList.remove('drag')});
t.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
upd();
/* galeria: clicar na foto abre ampliada; fecha no X, fora da foto ou com Esc */
(function(){
  var imgs=[].map.call(t.querySelectorAll('img'),function(i){return i}),cur=0;
  if(!imgs.length)return;
  var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Foto ampliada');
  lb.innerHTML='<button class="x" type="button" aria-label="Fechar">&times;</button><button class="p" type="button" aria-label="Foto anterior">&#8249;</button><img alt=""><button class="n" type="button" aria-label="Próxima foto">&#8250;</button>';
  document.body.appendChild(lb);
  var big=lb.querySelector('img'),last=null;
  function show(i){cur=(i+imgs.length)%imgs.length;big.src=imgs[cur].currentSrc||imgs[cur].src;big.alt=imgs[cur].alt}
  function open(i){last=document.activeElement;show(i);lb.classList.add('on');requestAnimationFrame(function(){lb.classList.add('show')});document.body.style.overflow='hidden';lb.querySelector('.x').focus()}
  function close(){lb.classList.remove('show');lb.classList.remove('on');document.body.style.overflow='';if(last&&last.focus)last.focus()}
  t.addEventListener('click',function(e){var d=e.target.closest?e.target.closest('.track>div'):null;if(!d)return;var im=d.querySelector('img');if(im)open(imgs.indexOf(im))});
  lb.addEventListener('click',function(e){
    if(e.target.closest('.p')){show(cur-1);return}
    if(e.target.closest('.n')){show(cur+1);return}
    if(e.target!==big)close()});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('on'))return;
    if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1)});
})();
