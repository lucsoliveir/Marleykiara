/* monta a pagina "Pais" a partir de pais-data.js e abre as fotos em pop-up */
(function(){
  var D=window.PAIS,box=document.getElementById('pais');if(!D||!box)return;
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  var WA='https://wa.me/5521967079481?text=';
  var lista=[],cols=[['pais','Padreador','Padreadores','do'],['maes','Matriz','Matrizes','da']];
  box.innerHTML=cols.map(function(c){
    var itens=D[c[0]]||[];
    return '<div class="pcol"><h2 class="ptit">'+(itens.length>1?c[2]:c[1])+'</h2>'+(itens.length?itens.map(function(p){
      var i=lista.push(p)-1,fotos=p.fotos||[];
      var meta=[];if(p.cor)meta.push(esc(p.cor));meta.push(fotos.length+(fotos.length>1?' fotos':' foto'));
      var msg='Olá! Gostaria de agendar uma reserva de um filhote de '+p.nome+' ('+c[1]+') que vi no site do Canil Marley Kiara.';
      return '<div class="pai"><button type="button" class="fotos" data-i="'+i+'" aria-label="Ver fotos de '+esc(p.nome)+'">'+
        '<span class="pic"><img src="'+esc(fotos[0])+'" style="object-position:'+esc(p.posicao||'center 30%')+'" alt="'+esc(c[1]+' '+p.nome)+'" loading="lazy"></span>'+
        '<span class="inf"><span class="papel">'+c[1]+'</span><span class="nome">'+esc(p.nome)+'</span>'+(meta.length?'<span class="meta">'+meta.join(' · ')+'</span>':'')+(p.info?'<span class="txt">'+esc(p.info)+'</span>':'')+
        '<span class="more">Ver fotos <i aria-hidden="true">→</i></span></span></button>'+
        '<a class="reserva" href="'+WA+encodeURIComponent(msg)+'" target="_blank" rel="noopener">Agendar reserva '+c[3]+' '+esc(p.nome)+'</a></div>';
    }).join(''):'<p class="pvazio">Em breve.</p>')+'</div>';
  }).join('');

  /* pop-up com as fotos do pai/mae */
  var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Fotos');
  lb.innerHTML='<button class="x" type="button" aria-label="Fechar">&times;</button><button class="p" type="button" aria-label="Foto anterior">&#8249;</button><figure class="fig"><img alt=""><figcaption></figcaption></figure><button class="n" type="button" aria-label="Próxima foto">&#8250;</button>';
  document.body.appendChild(lb);
  var big=lb.querySelector('img'),cap=lb.querySelector('figcaption'),cur=null,k=0,last=null;
  function show(n){var f=cur.fotos;k=(n+f.length)%f.length;big.src=f[k];big.alt=cur.nome;cap.textContent=cur.nome+(f.length>1?'  ·  '+(k+1)+'/'+f.length:'');lb.classList.toggle('uma',f.length<2)}
  function open(i){cur=lista[i];if(!cur||!cur.fotos||!cur.fotos.length)return;last=document.activeElement;show(0);lb.classList.add('on');requestAnimationFrame(function(){lb.classList.add('show')});document.body.style.overflow='hidden';lb.querySelector('.x').focus()}
  function close(){lb.classList.remove('show');lb.classList.remove('on');document.body.style.overflow='';if(last&&last.focus)last.focus()}
  box.addEventListener('click',function(e){var b=e.target.closest('.fotos');if(b)open(+b.getAttribute('data-i'))});
  lb.addEventListener('click',function(e){
    if(e.target.closest('.p')){show(k-1);return}
    if(e.target.closest('.n')){show(k+1);return}
    if(e.target!==big)close()});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('on'))return;
    if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(k-1);else if(e.key==='ArrowRight')show(k+1)});
})();
