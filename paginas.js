/* monta a lista de filhotes da pagina a partir de filhotes-data.js */
(function(){
  if(!window.FILHOTES)return;
  [].forEach.call(document.querySelectorAll('.lista[data-cat]'),function(box){
  var cat=box.getAttribute('data-cat'),tit=box.getAttribute('data-titulo'),itens=window.FILHOTES[cat]||[];
  var WA='https://wa.me/5521967079481?text=';
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  if(!itens.length){
    box.className='lista vazia';
    box.innerHTML='<div class="empty"><h2>'+esc(box.getAttribute('data-vazio')||'Sem disponíveis no momento')+'</h2></div>';
    return;
  }
  box.innerHTML=itens.map(function(p){
    var nome=p.nome||p.cor||tit,alt='Chihuahua '+(p.cor||'')+(p.nome?' - '+p.nome:'');
    var msg=p.mensagem||'Olá! Tenho interesse no(a) '+(p.nome?p.nome+' - ':'')+(p.cor?p.cor+' ':'')+'('+tit+') que vi no site do Canil Marley Kiara.';
    var meta=[];if(p.nome&&p.cor)meta.push(esc(p.cor));if(p.idade)meta.push(esc(p.idade));
    return '<article class="pup"><div class="pic'+(p.cartaz?' cartaz':'')+'"'+'>'+(p.cartaz?'<span class="bg" aria-hidden="true" style="background-image:url(\''+esc(p.foto)+'\')"></span>':'')+'<img src="'+esc(p.foto)+'" alt="'+esc(alt)+'" loading="lazy"></div>'+
      '<div class="inf"><h3>'+esc(nome)+'</h3>'+(meta.length?'<p class="meta">'+meta.join(' · ')+'</p>':'')+(p.info?'<p>'+esc(p.info)+'</p>':'')+
      '<a class="ask" href="'+WA+encodeURIComponent(msg)+'" target="_blank" rel="noopener">Tenho interesse</a></div></article>';
  }).join('');
  });
})();
