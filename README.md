# Rodrigues Hair — Site (versão 1)

Site estático (HTML, CSS e JavaScript puros). Não precisa instalar nada nem fazer build.

## Como editar
- **Telefone, mensagem do WhatsApp, horários, serviços, avaliações e fotos da galeria:** `assets/js/config.js`
  - Novo serviço: copie uma linha de `servicos` e altere. Ícones: tesoura, navalha, crianca, secador, gota, brilho, pente, casa.
  - Nova foto na galeria: coloque o arquivo em `assets/img/` e adicione `{ src: "arquivo.jpg", alt: "descrição" }` em `galeria`.
- **Textos de título, "Sobre", endereço e atendimento em casa:** `index.html`
- **Cores e fontes:** variáveis no topo de `assets/css/style.css`
- **Trocar a foto do Ramon ou a imagem principal:** substitua `assets/img/ramon.jpg` ou `assets/img/hero.jpg` mantendo o nome.

## Ver no computador
Abra a pasta no terminal e rode `npx serve .` (ou dê dois cliques em `index.html`).

## Publicar
1. GitHub: crie um repositório, depois `git init`, `git add .`, `git commit -m "Versão 1"`, `git branch -M main`, `git remote add origin URL_DO_REPOSITORIO`, `git push -u origin main`.
2. Cloudflare Pages: Workers & Pages > Create > Pages > Connect to Git > escolha o repositório.
   - Framework preset: None | Build command: (vazio) | Build output directory: `/`
3. Cada novo `git push` publica a atualização automaticamente.
