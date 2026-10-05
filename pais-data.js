/* =====================================================================
   PAIS E MATRIZES  -  e aqui que voce edita a pagina "Pais"
   Duas listas: "pais" (machos, coluna da esquerda) e "maes" (matrizes,
   coluna da direita). Para ADICIONAR outro, copie um bloco { ... }.
   Campos:  nome | cor (opcional) | info (opcional, texto livre)
            posicao (opcional): enquadramento da capa, ex.: "62% 40%"
            fotos: lista de imagens. A PRIMEIRA e a foto de capa;
            todas aparecem no pop-up quando a pessoa clica.
   ATENCAO: as fotos abaixo sao EXEMPLOS (fotos da galeria) so para
   mostrar o layout. Troque pelas fotos reais do Pierre e da Catarina.
   ===================================================================== */
window.PAIS = {
  pais: [
    { nome: "Pierre", cor: "Lilac", info: "",
      fotos: ["images/pais/pierre-1.jpg", "images/pais/pierre-2.jpg"] },
    { nome: "Leoncio", cor: "", info: "",
      fotos: ["images/pais/loencia-1.jpg", "images/pais/loencia-2.jpg","images/pais/loencia-3.jpg"] },
    { nome: "Baby", cor: "", info: "", posicao: "62% 40%",
      fotos: ["images/pais/baby-1.jpg", "images/pais/baby-2.jpg"] },
    { nome: "Yuri", cor: "", info: "", posicao: "center 25%", fotos: ["images/pais/yuri-1.jpg"] },
    { nome: "Bento", cor: "", info: "", posicao: "center 30%", fotos: ["images/pais/bento-1.jpg"] },
    { nome: "Pedro", cor: "", info: "", posicao: "center 25%", fotos: ["images/pais/pedro-1.jpg"] },
    { nome: "Theo", cor: "", info: "", posicao: "center 35%",
      fotos: ["images/pais/theo-1.jpg", "images/pais/theo-2.jpg"] },
    { nome: "Yuki", cor: "", info: "", posicao: "60% 25%", fotos: ["images/pais/yuki-1.jpg"] }
  ],
  maes: [
    { nome: "Catarina", cor: "Preto e Branco", info: "",
      fotos: ["images/pais/catarina-1.jpg", "images/pais/catarina-2.jpg"] },
    { nome: "Priscila", cor: "", info: "",
      fotos: ["images/pais/priscila-1.jpg"] },
    { nome: "Antonella", cor: "", info: "",
      fotos: ["images/pais/antonella-1.jpg"] },
    { nome: "Melissa", cor: "", info: "", posicao: "center 55%",
      fotos: ["images/pais/melissa-1.jpg"] },
    { nome: "Dalila", cor: "", info: "", posicao: "center 10%",
      fotos: ["images/pais/dalila-1.jpg"] },
    { nome: "Maya", cor: "", info: "", posicao: "center 25%", fotos: ["images/pais/maya-1.jpg"] },
    { nome: "Mel", cor: "", info: "", posicao: "65% 25%", fotos: ["images/pais/mel-1.jpg"] },
    { nome: "Neve", cor: "", info: "", posicao: "30% 20%", fotos: ["images/pais/neve-1.jpg"] },
    { nome: "Lady", cor: "", info: "", posicao: "45% 40%",
      fotos: ["images/pais/lady-1.jpg", "images/pais/lady-2.jpg"] },
    { nome: "Penélope", cor: "", info: "", posicao: "75% 35%", fotos: ["images/pais/penelope-1.jpg"] },
    { nome: "Brenda", cor: "", info: "", posicao: "35% 35%", fotos: ["images/pais/brenda-1.jpg"] }
  ]
};
