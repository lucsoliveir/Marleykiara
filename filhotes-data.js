/* =====================================================================
   FILHOTES DISPONIVEIS  -  e aqui que voce edita quem aparece no site
   Cada categoria e uma lista. Para ADICIONAR um filhote, copie uma linha
   { ... } e mude os dados. Para REMOVER (vendido), apague a linha.
   Campos:  foto (obrigatorio) | cor | nome | idade | info (texto livre)
   Opcionais: cartaz: true (foto/arte com texto: aparece inteira, sem cortar, no mesmo tamanho dos outros cartoes)
              mensagem: "texto" (mensagem pronta do WhatsApp deste filhote)
   Deixe um campo de fora (ou "") e ele simplesmente nao aparece.
   Listas vazias = a pagina mostra "Sem ... disponiveis no momento".
   Exemplo de linha:  { foto: "images/galeria/filhote-5.jpg", cor: "Creme", nome: "Thor", idade: "2 meses" }
   ===================================================================== */
window.FILHOTES = {
  machos: [
    { foto: "images/filhotes/macho-reserva.jpg", nome: "Macho para reserva", cartaz: true,
      mensagem: "Olá! Tenho interesse em reservar o filhote macho que vi no site do Canil Marley Kiara." },
    { foto: "images/filhotes/lindo-blue.jpg", nome: "Lindo Blue", cartaz: true,
      mensagem: "Olá! Tenho interesse no filhote Lindo Blue (macho) que vi no site do Canil Marley Kiara." },
    { foto: "images/filhotes/machinho-chocolate.jpg", nome: "Machinho Chocolate", cartaz: true,
      mensagem: "Olá! Tenho interesse no filhote macho Chocolate que vi no site do Canil Marley Kiara." }
  ],
  femeas: [
    { foto: "images/filhotes/linda-menina.jpg", nome: "Linda menina", cartaz: true,
      mensagem: "Olá! Tenho interesse na filhote fêmea Linda menina que vi no site do Canil Marley Kiara." },
    { foto: "images/filhotes/linda-menina-reserva.jpg", nome: "Linda menina para reserva", cartaz: true,
      mensagem: "Olá! Tenho interesse em reservar a filhote fêmea Linda menina que vi no site do Canil Marley Kiara." },
    { foto: "images/filhotes/princesa.jpg", nome: "Princesa", cartaz: true,
      mensagem: "Olá! Tenho interesse na filhote fêmea Princesa que vi no site do Canil Marley Kiara." }
  ],
  adultos: [
  ]
};
