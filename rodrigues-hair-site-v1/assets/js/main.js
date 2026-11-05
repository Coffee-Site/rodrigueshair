/* Rodrigues Hair — comportamento do site. O conteúdo vem de config.js */
(() => {
  const S = window.SITE, $ = (q) => document.querySelector(q);
  const wa = (m) => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(m || S.mensagemWhatsApp)}`;
  const P = {
    tesoura: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.6 7.6 20 18M8.6 16.4 20 6"/>',
    navalha: '<path d="M3 15 14 5l4 4-9 9z"/><path d="m14 5 3-2 4 4-2 3"/><path d="M6 12l3 3"/>',
    crianca: '<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 2.5 3 4 3s3-1 4-3M9 9.5h.01M15 9.5h.01"/>',
    secador: '<path d="M3 9a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z"/><path d="m10 13-1 7h4l-1-7M19 7h2"/>',
    gota: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    brilho: '<path d="m11 3 1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z"/><path d="M19 16v4M17 18h4"/>',
    pente: '<path d="M3 7h18v5H3z"/><path d="M6 12v6M9.5 12v6M13 12v6M16.5 12v6"/>',
    casa: '<path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.tesoura}</svg>`;

  // Links de WhatsApp, mapa e Instagram
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = wa(a.dataset.wa === "domicilio" ? S.mensagemDomicilio : S.mensagemWhatsApp);
    a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-maps]").forEach((a) => (a.href = S.mapaLink));
  document.querySelectorAll("[data-insta]").forEach((a) => (a.href = S.instagram));

  // Serviços
  $("#lista-servicos").innerHTML = S.servicos.map((s) =>
    `<li class="srv"><span class="ico">${icon(s.icone)}</span><div><h3>${s.titulo}</h3><p>${s.texto}</p>` +
    `<a href="${wa(`Olá, Ramon! Vim pelo site e quero agendar: ${s.titulo}.`)}" target="_blank" rel="noopener">Agendar este serviço</a></div></li>`).join("");

  // Avaliações
  $("#avaliacoes-lista").innerHTML = S.avaliacoes.map((r) =>
    `<figure class="card"><div class="stars" aria-label="5 estrelas">★★★★★</div><p>“${r.texto}”</p><cite>${r.nome}</cite></figure>`).join("");

  // Galeria + ampliação
  $("#galeria").innerHTML = S.galeria.map((g, i) =>
    `<button type="button" data-i="${i}" aria-label="Ampliar: ${g.alt}"><img src="assets/img/${g.src}" alt="${g.alt}" loading="lazy"></button>`).join("");
  const lb = $("#lb"), lbImg = lb.querySelector("img");
  $("#galeria").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const g = S.galeria[b.dataset.i]; lbImg.src = `assets/img/${g.src}`; lbImg.alt = g.alt; lb.showModal();
  });
  lb.addEventListener("click", () => lb.close());

  // Horários e "aberto agora" (horário de Brasília)
  const ordem = [1, 2, 3, 4, 5, 6, 0];
  const sp = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  const hoje = sp.getDay(), min = sp.getHours() * 60 + sp.getMinutes();
  const m = (t) => { const [a, b] = t.split(":"); return a * 60 + +b; };
  $("#horarios").innerHTML = ordem.map((d) => {
    const x = S.horarios[d];
    return `<div class="${d === hoje ? "hoje" : ""}"><dt>${x.dia}</dt><dd>${x.h ? x.h[0] + " – " + x.h[1] : "Fechado"}</dd></div>`;
  }).join("");
  const h = S.horarios[hoje].h;
  $("[data-status]").textContent = h && min >= m(h[0]) && min < m(h[1]) ? "Aberto agora" : "Fechado agora";

  // Menu mobile
  const burger = $(".burger"), menu = $("#menu");
  const fechar = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const abrir = !menu.classList.contains("open");
    menu.classList.toggle("open", abrir); burger.setAttribute("aria-expanded", abrir);
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", fechar));

  // Cabeçalho sólido ao rolar e ano do rodapé
  const top = $(".top"), onScroll = () => top.classList.toggle("solid", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $("#ano").textContent = new Date().getFullYear();
})();
