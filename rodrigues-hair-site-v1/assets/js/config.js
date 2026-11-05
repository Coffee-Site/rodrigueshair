/* =====================================================================
   RODRIGUES HAIR — CONTEÚDO EDITÁVEL
   Altere textos, telefone, horários, serviços, avaliações e fotos aqui.
   Os textos fixos (título, "Sobre", etc.) ficam em index.html.
   ===================================================================== */
window.SITE = {
  whatsapp: "5511952076637", // só números: 55 + DDD + número
  mensagemWhatsApp: "Olá, Ramon! Vim pelo site da Rodrigues Hair e quero reservar um horário para cuidar do meu visual. Quais dias você tem disponíveis?",
  mensagemDomicilio: "Olá, Ramon! Vim pelo site e quero saber mais sobre o atendimento em casa. Você atende na minha região?",
  instagram: "https://www.instagram.com/rodrigueshaircabeleireiro/",
  mapaLink: "https://www.google.com/maps/place/Rodrigues+Hair+Cabeleireiro/@-23.4981391,-46.8494687,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf03fecfbd6ed7:0xe1f6ec3324c25115!8m2!3d-23.4981391!4d-46.8494687!16s%2Fg%2F11srg8wtkm",

  // Ordem do array = dia da semana (0 = domingo). Use null para fechado.
  horarios: [
    { dia: "Domingo", h: null },
    { dia: "Segunda-feira", h: ["09:00", "17:00"] },
    { dia: "Terça-feira", h: ["17:00", "19:00"] },
    { dia: "Quarta-feira", h: ["09:00", "17:00"] },
    { dia: "Quinta-feira", h: ["08:00", "17:00"] },
    { dia: "Sexta-feira", h: ["08:00", "17:00"] },
    { dia: "Sábado", h: ["08:00", "17:00"] }
  ],

  // Para adicionar um serviço, copie uma linha. Ícones: tesoura, navalha, crianca, secador, gota, brilho, pente, casa
  servicos: [
    { icone: "tesoura", titulo: "Corte masculino", texto: "Do clássico ao degradê, com acabamento limpo e um corte que combina com o seu estilo." },
    { icone: "navalha", titulo: "Barba", texto: "Modelagem e acabamento na navalha para deixar a barba alinhada." },
    { icone: "tesoura", titulo: "Corte feminino", texto: "Corte pensado para o seu tipo de cabelo, o seu rosto e a sua rotina." },
    { icone: "crianca", titulo: "Corte infantil", texto: "Atendimento paciente e carinhoso para os pequenos, inclusive os bem pequenos." },
    { icone: "secador", titulo: "Escova", texto: "Fios alinhados, com movimento e brilho para o dia a dia ou para uma ocasião especial." },
    { icone: "gota", titulo: "Coloração", texto: "Do tom natural às mechas e degradês, com a cor planejada para o seu estilo." },
    { icone: "brilho", titulo: "Botox e progressiva", texto: "Menos frizz e fios mais alinhados, macios e fáceis de cuidar." },
    { icone: "pente", titulo: "Tratamentos capilares", texto: "Cuidado com a saúde dos fios, com indicação de acordo com a necessidade do seu cabelo." }
  ],

  // Depoimentos reais do Google, na íntegra.
  avaliacoes: [
    { nome: "Bruna Fernandes", texto: "Recomendo para elevar a autoestima. Ramon é um profissional excelente, além de ser uma pessoa alto astral entrega um atendimento personalizado. Não é à toa que ele cuida do meu cabelo a mais de 10 anos." },
    { nome: "Jefferson Nascimento", texto: "Ramon é um ótimo profissional, além de estar sempre com uma energia lá em cima, está sempre bem humorado, proporcionando aos clientes um ambiente descontraído, sempre disposto a nos atender e quando não conseguimos busca sempre uma alternativa para não deixar na mão, com atendimento personalizado no salão ou em casa, não é a toa que corto cabelo com ele há 6 anos! Super recomendo!" },
    { nome: "Paty Brandão", texto: "Ramon cuida dos cabelos do meu filho e meu irmão. Tenho um bebê e não conheço ninguém mais dedicado do que ele para cortar dos pequenos. Fora que o corte fica lindo! Muito carinho com o seu trabalho, recomendo de olhos fechados!" },
    { nome: "Nayara França", texto: "O Ramon é um profissional incrível, faço meu cabelo com ele há anos e indico de olhos fechados. Ele é super alto astral e talentoso." },
    { nome: "Miriam Nascimento Yassutake", texto: "Ramon é uma pessoa incrível!!! Ótimo profissional! Me atende faz anos! Super recomendo!!!" },
    { nome: "Renan", texto: "O melhor de alphaville! Atendimento mto bom!!!" }
  ],

  // Fotos ficam em assets/img/. Para trocar, mantenha o nome do arquivo ou altere o "src".
  galeria: [
    { src: "g01.jpg", alt: "Barba feita na navalha" },
    { src: "g03.jpg", alt: "Cabelo longo com degradê loiro" },
    { src: "g07.jpg", alt: "Corte masculino degradê" },
    { src: "g02.jpg", alt: "Cabelo castanho longo com cachos" },
    { src: "g04.jpg", alt: "Barba e corte em preto e branco" },
    { src: "g09.jpg", alt: "Cabelo castanho com pontas claras" },
    { src: "g06.jpg", alt: "Corte feminino acobreado" },
    { src: "g05.jpg", alt: "Cabelo loiro com ondas" },
    { src: "g08.jpg", alt: "Ramon fazendo a barba de um cliente" },
    { src: "g10.jpg", alt: "Corte feminino com volume" },
    { src: "g11.jpg", alt: "Cliente no salão com Ramon" },
    { src: "g12.jpg", alt: "Ramon com um pequeno cliente" }
  ]
};
