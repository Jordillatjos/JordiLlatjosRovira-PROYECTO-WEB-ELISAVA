const types = [
  { name: 'Cookies necesarias', short: 'Necesarias', number: '01', pos: '0% 0%', category: 'FUNCIONAMIENTO', description: 'Son las que permiten que una web funcione: mantienen una sesión abierta, recuerdan el contenido de un carrito o guardan tu elección de privacidad. No se usan para crear anuncios personalizados.', example: 'Una tienda recuerda que has iniciado sesión mientras cambias de página.' },
  { name: 'Cookies de preferencias', short: 'Preferencias', number: '02', pos: '50% 0%', category: 'PREFERENCIAS', description: 'Guardan elecciones como el idioma, la región o el aspecto de una página. Al conservar estos detalles, la web puede adaptar lo que ves cada vez que vuelves.', example: 'La página guarda que prefieres consultar el contenido en castellano.' },
  { name: 'Cookies de analítica', short: 'Analítica', number: '03', pos: '100% 0%', category: 'COMPORTAMIENTO', description: 'Registran de forma agregada cómo se utiliza una web: qué páginas reciben más visitas, cuánto tiempo se queda la gente o dónde abandona. Ayudan a medir y mejorar el sitio.', example: 'Un equipo detecta que muchas visitas salen antes de llegar a una sección.' },
  { name: 'Cookies publicitarias', short: 'Publicidad', number: '04', pos: '0% 100%', category: 'PERFIL PUBLICITARIO', description: 'Pueden recordar las páginas que visitas y los productos que consultas para inferir qué temas te interesan. Esa información permite seleccionar y medir anuncios más relevantes.', example: 'Después de mirar unas zapatillas, ves anuncios de calzado en otra web.' },
  { name: 'Cookies de redes sociales', short: 'Redes sociales', number: '05', pos: '50% 100%', category: 'SEGUIMIENTO ENTRE SITIOS', description: 'Los botones, vídeos o herramientas de una plataforma social pueden enviar información sobre la página que estás visitando. Si reconoce tu navegador, puede relacionar esa visita con tu actividad en su servicio.', example: 'Un píxel publicitario registra que visitaste una página de una marca.' },
  { name: 'Cookies de geolocalización', short: 'Ubicación', number: '06', pos: '100% 100%', category: 'CONTEXTO', description: 'Con señales de ubicación aproximada, una empresa puede adaptar contenido, ofertas o anuncios a una ciudad o región. La precisión depende de la tecnología y de los permisos concedidos.', example: 'Una campaña muestra una tienda cercana a la zona desde la que navegas.' }
];

const grid = document.querySelector('#cookie-grid');
types.forEach((type) => {
  const card = document.createElement('a');
  card.className = 'cookie-card';
  card.href = '#';
  card.setAttribute('aria-label', `${type.name}. Abrir explicación en una pestaña nueva`);
  card.innerHTML = `<div class="cookie-photo" style="background-position:${type.pos}"></div><div class="cookie-meta"><span>${type.number} / 06</span><span>${type.category}</span></div><div class="cookie-label"><strong>${type.short}</strong><span>DESCUBRIR ↗</span></div>`;
  card.addEventListener('click', (event) => {
    event.preventDefault();
    openDetail(type);
  });
  grid.appendChild(card);
});

const titleFirst = document.querySelector('#title-first');
const titleSecond = document.querySelector('#title-second');
const titleLineOne = '¿Qué saben';
const titleLineTwo = 'de ti?';
let firstIndex = 0;
let secondIndex = 0;
let titleStarted = false;
function typeTitle() {
  if (firstIndex < titleLineOne.length) {
    titleFirst.textContent += titleLineOne[firstIndex++];
    window.setTimeout(typeTitle, 92);
  } else if (secondIndex < titleLineTwo.length) {
    titleSecond.textContent += titleLineTwo[secondIndex++];
    window.setTimeout(typeTitle, 92);
  } else {
    window.setTimeout(eraseTitle, 4000);
  }
}
function eraseTitle() {
  if (secondIndex > 0) {
    titleSecond.textContent = titleLineTwo.slice(0, --secondIndex);
  } else if (firstIndex > 0) {
    titleFirst.textContent = titleLineOne.slice(0, --firstIndex);
  } else {
    window.setTimeout(typeTitle, 500);
    return;
  }
  window.setTimeout(eraseTitle, 48);
}
function startTitle() {
  if (titleStarted) return;
  titleStarted = true;
  window.setTimeout(typeTitle, 450);
}

function openDetail(type) {
  const page = window.open('', '_blank');
  if (!page) return;
  const esc = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  page.document.open();
  page.document.write(`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(type.name)} — Cookie Data</title><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap');*{box-sizing:border-box}body{margin:0;background:#eee9df;color:#191916;font-family:Inter,Arial,sans-serif}.bar{height:82px;padding:0 6vw;border-bottom:1px solid #c9c3b8;display:flex;align-items:center;justify-content:space-between;font:10px 'Roboto Mono',monospace;letter-spacing:.06em}.mark{font:bold 15px Inter,sans-serif;line-height:.85;letter-spacing:-1px}.mark span{color:#e75c2f}.wrap{max-width:950px;margin:0 auto;padding:12vh 30px}.number{font:11px 'Roboto Mono',monospace;color:#77756d}.tag{margin:50px 0 15px;color:#e75c2f;font:10px 'Roboto Mono',monospace;letter-spacing:.1em}h1{font-family:Inter,Arial,sans-serif;font-size:clamp(52px,10vw,120px);line-height:.9;letter-spacing:-.09em;font-weight:500;margin:0 0 35px}p{font:12px/1.8 'Roboto Mono',monospace;color:#55534d;max-width:660px}.example{border-top:1px solid #c9c3b8;border-bottom:1px solid #c9c3b8;margin-top:55px;padding:22px 0;display:grid;grid-template-columns:180px 1fr;gap:20px}.example b{font:10px 'Roboto Mono',monospace;font-weight:400;color:#77756d}.example p{margin:0;font-size:11px}.back{display:inline-block;margin-top:35px;color:#191916;text-decoration:none;border-bottom:1px solid #191916;padding-bottom:5px;font:10px 'Roboto Mono',monospace}@media(max-width:600px){.wrap{padding-top:9vh}.example{grid-template-columns:1fr;gap:10px}.bar{padding:0 22px}}
  </style></head><body><header class="bar"><div class="mark">COOKIE<br>DATA<span>®</span></div><span>DATOS PERSONALES / GUÍA 01—06</span></header><main class="wrap"><div class="number">${type.number} — 06</div><div class="tag">${esc(type.category)}</div><h1>${esc(type.name)}</h1><p>${esc(type.description)}</p><section class="example"><b>EN PUBLICIDAD</b><p>${esc(type.example)}</p></section><a class="back" href="javascript:window.close()">← VOLVER A LA WEB</a></main></body></html>`);
  page.document.close();
}

const consent = document.querySelector('#consent');
const site = document.querySelector('#site');
const fallScreen = document.querySelector('#fall-screen');
function showSite() {
  consent.classList.add('is-hidden');
  fallScreen.classList.remove('is-active');
  site.classList.remove('is-locked');
  site.removeAttribute('aria-hidden');
  fallScreen.setAttribute('aria-hidden', 'true');
  localStorage.setItem('cookie-data-choice', 'accepted');
  startTitle();
}
function showConsent() {
  fallScreen.classList.remove('is-active');
  fallScreen.setAttribute('aria-hidden', 'true');
  consent.classList.remove('is-hidden');
  site.classList.add('is-locked');
  site.setAttribute('aria-hidden', 'true');
}
document.querySelector('#accept-cookies').addEventListener('click', showSite);
document.querySelector('#fall-accept').addEventListener('click', showSite);
document.querySelector('#customize-cookies').addEventListener('click', () => {
  consent.classList.add('is-hidden');
  fallScreen.classList.add('is-active');
  fallScreen.setAttribute('aria-hidden', 'false');
  const letters = document.querySelector('#fall-letters');
  if (!letters.childElementCount) {
    const symbols = ['cookie', 'dato', 'ad', 'pixel', 'id', '•••', '01'];
    const pile = [];
    const pileColumns = 16;
    const pileHeights = Array(pileColumns).fill(0);
    const falling = [];
    const fragment = document.createDocumentFragment();
    let lastTime = 0;
    let startedAt = 0;
    let nextWord = 0;
    for (let i = 0; i < 720; i++) {
      const item = document.createElement('span');
      item.className = 'fall-letter';
      item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      const column = Math.floor(Math.random() * pileColumns);
      const x = (column + .08 + Math.random() * .32) / pileColumns * 100;
      item.style.left = `${x}%`;
      const y = -letters.clientHeight - 50 - Math.random() * 180;
      const spin = (Math.random() - .5) * 12;
      item.style.opacity = '0';
      item.style.transform = `translateY(${y}px) rotate(${spin}deg)`;
      fragment.appendChild(item);
      pile.push({ node: item, column, y, vy: 0, spin, settled: false, delay: i * 10, height: 18 });
    }
    letters.appendChild(fragment);
    const wordHeight = pile[0]?.node.offsetHeight || 18;
    pile.forEach((word) => { word.height = wordHeight; });
    const animatePile = (now) => {
      const height = letters.clientHeight;
      if (!startedAt) startedAt = now;
      const elapsed = lastTime ? Math.min((now - lastTime) / 1000, .05) : 1 / 60;
      lastTime = now;
      const elapsedTotal = now - startedAt;
      while (nextWord < pile.length && pile[nextWord].delay <= elapsedTotal) {
        falling.push(pile[nextWord++]);
      }
      for (let i = falling.length - 1; i >= 0; i--) {
        const word = falling[i];
        word.vy += 1250 * elapsed;
        word.y += word.vy * elapsed;
        const floor = height - 12 - pileHeights[word.column] - word.height;
        if (word.y >= floor) {
          word.y = floor;
          if (word.vy > 105) {
            word.vy *= -.38;
            word.spin *= -.45;
          } else {
            word.vy = 0;
            word.settled = true;
            pileHeights[word.column] += word.height + 3;
            falling.splice(i, 1);
          }
        }
        word.node.style.transform = `translateY(${word.y}px) rotate(${word.spin}deg)`;
        const visibility = Math.min(1, Math.max(0, (word.y + word.height) / 28));
        word.node.style.opacity = String(visibility * .86);
      }
      if (nextWord < pile.length || falling.length) requestAnimationFrame(animatePile);
    };
    requestAnimationFrame(animatePile);
  }
});
document.querySelector('#reopen-consent').addEventListener('click', showConsent);
