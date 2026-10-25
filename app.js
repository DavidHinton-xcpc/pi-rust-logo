/* render gallery from ROUNDS */
const SVG = (n) => `assets/svg/${n}.svg`;
const PNG = (n) => `assets/png/${n}.png`;

function total() { return ROUNDS.reduce((s, r) => s + r.items.length, 0); }

function renderGallery() {
  const main = document.getElementById("gallery");
  main.innerHTML = ROUNDS.map((round) => `
    <section class="round" id="${round.id}">
      <h2><span class="badge">${round.badge}</span>${round.title}</h2>
      <p class="sub">${round.sub}</p>
      <div class="grid">
        ${round.items.map(([file, title, desc]) => `
          <figure class="card${round.wide ? " wide" : ""}">
            <img src="${SVG(file)}" alt="${title}" loading="lazy">
            <figcaption class="cap">
              <b>${title}</b>${desc}
              <span class="meta">
                <a href="${SVG(file)}" target="_blank" rel="noopener">SVG</a>
                <a href="${PNG(file)}" target="_blank" rel="noopener">PNG 2x</a>
                <button class="pick-btn" data-file="${file}" data-title="${title}"
                  style="background:none;border:1px solid var(--line);border-radius:6px;color:var(--dim);font-size:11.5px;padding:2px 8px;cursor:pointer">加入对比</button>
              </span>
            </figcaption>
          </figure>`).join("")}
      </div>
    </section>`).join("");
  const el = document.getElementById("total-count");
  if (el) el.textContent = total();
}

/* compare picker: stores up to 4 slots in localStorage */
const KEY = "rpi-compare-slots";
function getSlots() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } }
function setSlots(s) { localStorage.setItem(KEY, JSON.stringify(s)); renderBar(); renderCompare(); }

function renderBar() {
  const bar = document.getElementById("pick-bar");
  if (!bar) return;
  const slots = getSlots();
  bar.innerHTML = `
    <span class="hint">对比（最多 4 个）：</span>
    ${[0,1,2,3].map((i) => {
      const s = slots[i];
      return `<span class="slot">
        ${s ? `<img src="${SVG(s.file)}"><span class="name">${s.title}</span><span class="x" data-i="${i}">✕</span>`
            : `<span class="name">空位 ${i+1}</span>`}
      </span>`;
    }).join("")}
    <select id="pick-select">
      <option value="">— 从 ${total()} 个方案中选择 —</option>
      ${ROUNDS.map((r) => `<optgroup label="${r.badge} · ${r.title}">` +
        r.items.map(([f, t]) => `<option value="${f}">${t}</option>`).join("") + `</optgroup>`).join("")}
    </select>
    <button id="clear-picks" style="background:none;border:1px solid var(--line);border-radius:8px;color:var(--dim);padding:6px 10px;cursor:pointer">清空</button>`;
  bar.querySelector("#pick-select").addEventListener("change", (e) => {
    const f = e.target.value;
    if (!f) return;
    const item = ROUNDS.flatMap((r) => r.items).find(([file]) => file === f);
    const slots = getSlots();
    if (!slots.some((s) => s.file === f)) {
      slots.push({ file: f, title: item[1] });
      while (slots.length > 4) slots.shift();
    }
    setSlots(slots);
    e.target.value = "";
  });
  bar.querySelectorAll(".x").forEach((x) => x.addEventListener("click", () => {
    const slots = getSlots(); slots.splice(+x.dataset.i, 1); setSlots(slots);
  }));
  bar.querySelector("#clear-picks").addEventListener("click", () => setSlots([]));
}

function renderCompare() {
  const grid = document.getElementById("compare-grid");
  if (!grid) return;
  const slots = getSlots();
  grid.innerHTML = slots.length
    ? slots.map((s) => `
        <div class="cell">
          <img src="${PNG(s.file)}" alt="${s.title}">
          <div class="cap"><b>${s.title}</b>assets/png/${s.file}.png · 2x</div>
        </div>`).join("")
    : `<p class="hint" style="color:var(--dim)">在上方选择方案加入对比，或从画廊卡片点「加入对比」。</p>`;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".pick-btn");
  if (!btn) return;
  const { file, title } = btn.dataset;
  const slots = getSlots();
  if (!slots.some((s) => s.file === file)) {
    slots.push({ file, title });
    while (slots.length > 4) slots.shift();
    setSlots(slots);
  }
});

if (document.getElementById("gallery")) renderGallery();
if (document.getElementById("pick-bar")) { renderBar(); renderCompare(); }
