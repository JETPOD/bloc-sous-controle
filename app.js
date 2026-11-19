(() => {
const M = window.MODULES, S = window.SOURCES;
const main = document.getElementById("main");
const GRADE = {
  ok: { pts: 2, label: "Bonne pratique" },
  partiel: { pts: 1, label: "Acceptable, pas optimal" },
  ecart: { pts: 0, label: "Écart de pratique" },
  critique: { pts: 0, label: "Erreur à risque pour le patient" }
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const track = n => window.bscAnalytics && window.bscAnalytics.track(n);

const state = { queue: [], qi: 0, ii: 0, answers: {}, order: {}, started: false };

/* Thème */
const themeBtn = document.getElementById("theme");
let theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const applyTheme = () => { document.documentElement.dataset.theme = theme; themeBtn.textContent = theme === "dark" ? "Clair" : "Sombre"; };
themeBtn.addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; applyTheme(); });
applyTheme();

document.querySelectorAll(".nav").forEach(b => b.addEventListener("click", () => go(b.dataset.view)));
document.getElementById("brand").addEventListener("click", e => { e.preventDefault(); go("home"); });

function setNav(v) { document.querySelectorAll(".nav").forEach(b => b.classList.toggle("active", b.dataset.view === v)); }
function show(html, v) { main.innerHTML = html.replace(/ ([:;?!»])/g, "\u00a0$1").replace(/« /g, "«\u00a0").replace(/ ± /g, "\u00a0±\u00a0").replace(/(\d) (Pa|°C|vol\/h|min|m\/s|UFC|%|µm|mois|cas)/g, "$1\u00a0$2").replace(/S90-351/g, "S90\u2011351"); setNav(v); window.scrollTo({ top: 0 }); main.focus({ preventScroll: true }); }
function go(v) { ({ home, memo, guide, sources }[v] || home)(); }

function shuffle(a) { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }
function srcLinks(ids) { return ids.map(id => `<a href="${S[id].u}" target="_blank" rel="noopener" title="${esc(S[id].t)}">${id}</a>`).join(", "); }

function modResult(m) {
  let pts = 0, done = 0, crit = 0;
  m.items.forEach(it => { const a = state.answers[it.id]; if (a) { pts += a.pts; done++; if (a.crit) crit++; } });
  return { pts, max: m.items.length * 2, done, crit, complete: done === m.items.length };
}

/* Accueil */
function home() {
  const cards = M.map(m => {
    const r = modResult(m);
    return `<article class="mcard">
      <span class="num">MODULE ${m.id} · ${m.items.length} SITUATIONS</span>
      <h3>${esc(m.title)}</h3>
      <p>${esc(m.pitch)}</p>
      ${r.complete ? `<span class="done">Terminé : ${Math.round(100 * r.pts / r.max)} %${r.crit ? ` · ${r.crit} erreur${r.crit > 1 ? "s" : ""} à risque` : ""}</span>` : ""}
      <p class="who"><span class="meta">Public :</span> ${esc(m.public)}</p>
      <div class="row"><button class="btn${r.complete ? " ghost" : ""}" data-start="${m.id}">${r.complete ? "Rejouer" : "Jouer ce module"}</button></div>
    </article>`;
  }).join("");
  show(`
  <section class="hero">
    <div>
      <div class="kicker">Zone à environnement maîtrisé</div>
      <h1>Bloc sous contrôle</h1>
      <p class="lead">Trente situations pour garder l'air de la salle d'opération propre : se comporter au bloc, maintenir les conditions de l'environnement maîtrisé, et décider face à une alerte de pression, de température, de brassage ou à un prélèvement non conforme.</p>
      <div class="row"><button class="btn" data-full>Parcours complet (3 modules)</button><button class="btn ghost" data-view-go="memo">Voir l'aide-mémoire</button></div>
    </div>
    ${cascadeSvg()}
  </section>
  <section class="modules" aria-label="Modules">${cards}</section>
  <p class="note">Chaque réponse est classée : bonne pratique, acceptable, écart de pratique, ou erreur à risque pour le patient. Les seuils viennent de la norme NF S90-351 (2013) et des recommandations SF2H et SFAR. Situations fictives ; le protocole de votre établissement prévaut. Durée indicative : 10 à 15 minutes par module.</p>`, "home");
  main.querySelector("[data-full]").addEventListener("click", () => start([1, 2, 3]));
  main.querySelectorAll("[data-start]").forEach(b => b.addEventListener("click", () => start([+b.dataset.start])));
  main.querySelector("[data-view-go]").addEventListener("click", () => go("memo"));
}

function cascadeSvg() {
  return `<svg class="cascade" viewBox="0 0 400 250" role="img" aria-label="Schéma de la cascade de pression : la salle d'opération en surpression de 15 pascals chasse l'air vers le couloir puis vers l'extérieur du bloc">
    <rect x="6" y="20" width="388" height="210" rx="14" fill="#123f3d" stroke="#2f5654"/>
    <rect x="22" y="38" width="200" height="174" rx="10" fill="#0f5a54" stroke="#5fd4c4" stroke-width="1.5"/>
    <text x="36" y="62" class="big">Salle d'opération</text>
    <text x="36" y="82">ISO 7 · ΔP +15 ± 5 Pa</text>
    <text x="36" y="98">19-26 °C</text>
    <text x="36" y="114">brassage ≥ 15 vol/h</text>
    <rect x="62" y="134" width="86" height="36" rx="6" fill="none" stroke="#7fe0d2" stroke-dasharray="3 4"/>
    <text x="88" y="156">table</text>
    <text x="36" y="198">soufflage filtré ↓</text>
    <rect x="222" y="128" width="10" height="44" fill="#f2b33d"/>
    <text x="244" y="62" class="big">Couloir</text>
    <text x="244" y="82">pression plus</text>
    <text x="244" y="98">basse</text>
    <path class="flow" d="M150 150 H360" stroke="#5fd4c4" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M352 142 l10 8 -10 8" stroke="#5fd4c4" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="244" y="186">porte fermée :</text>
    <text x="244" y="202">l'air sort,</text>
    <text x="244" y="218">il n'entre pas</text>
  </svg>`;
}

/* Parcours */
function start(ids) {
  state.queue = ids; state.qi = 0; state.ii = 0;
  ids.forEach(id => { const m = M.find(x => x.id === id); m.items.forEach(it => { delete state.answers[it.id]; }); });
  if (!state.started) { track("Jeu démarré"); state.started = true; }
  track(`Module ${ids[0]} démarré`);
  renderItem();
}
const curMod = () => M.find(x => x.id === state.queue[state.qi]);

function renderItem() {
  const m = curMod(), it = m.items[state.ii];
  const total = m.items.length;
  const order = state.order[it.id] || (state.order[it.id] = shuffle(it.options.map((_, i) => i)));
  const isMulti = it.type === "multi";
  const panel = it.panel ? gtcHtml(it.panel) : "";
  show(`
  <div class="playhead">
    <span class="chip">Module ${m.id} · ${esc(m.short)}</span>
    <div class="progress" aria-hidden="true"><span style="width:${100 * state.ii / total}%"></span></div>
    <span class="count">${state.ii + 1} / ${total}</span>
  </div>
  <div class="stage${panel ? " has-panel" : ""}">
    ${panel}
    <section class="card">
      <span class="count">Situation ${esc(it.id)}</span>
      <h2>${esc(it.title)}</h2>
      <p class="ctx">${esc(it.context)}</p>
      <p class="question" id="q">${esc(it.question)}</p>
      <div class="opts ${isMulti ? "multi" : ""}" role="group" aria-labelledby="q">
        ${order.map((oi, n) => `<button class="opt" data-i="${oi}" aria-pressed="false"><span class="k">${isMulti ? "" : String.fromCharCode(65 + n)}</span><span class="t">${esc(it.options[oi].t)}</span></button>`).join("")}
      </div>
      <div id="after"></div>
      <div class="actions">
        <button class="btn ghost" id="quit">Quitter</button>
        ${isMulti ? `<button class="btn" id="validate">Valider ma sélection</button>` : ""}
      </div>
    </section>
  </div>`, "home");
  document.getElementById("quit").addEventListener("click", home);
  const btns = [...main.querySelectorAll(".opt")];
  if (isMulti) {
    btns.forEach(b => b.addEventListener("click", () => b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true")));
    document.getElementById("validate").addEventListener("click", () => validateMulti(it, btns));
  } else {
    btns.forEach(b => b.addEventListener("click", () => answerChoice(it, btns, +b.dataset.i)));
  }
}

function gtcHtml(p) {
  return `<aside class="gtc" aria-label="Tableau de supervision du traitement d'air">
    <div class="top"><span class="room">${esc(p.room)}</span><span class="mode${/veille/i.test(p.mode) ? " veille" : ""}">${esc(p.mode)}</span></div>
    <div class="act">${esc(p.activity)}</div>
    <div class="grid">${p.params.map(x => `<div class="p ${x.s}"><div class="lbl"><span class="dot"></span>${esc(x.k)}</div><div class="val">${esc(x.v)}<small>${esc(x.u)}</small></div></div>`).join("")}</div>
    <div class="alert" role="alert">${esc(p.alert)}</div>
  </aside>`;
}

function answerChoice(it, btns, i) {
  const o = it.options[i], g = GRADE[o.g];
  state.answers[it.id] = { pts: g.pts, crit: o.g === "critique", grade: o.g };
  btns.forEach(b => {
    const oi = +b.dataset.i, ob = it.options[oi];
    b.disabled = true;
    if (oi === i) { b.setAttribute("aria-pressed", "true"); b.classList.add("g-" + ob.g); b.querySelector(".t").insertAdjacentHTML("beforeend", `<span class="tag">Votre choix · ${GRADE[ob.g].label}</span><span class="fb">${esc(ob.fb)}</span>`); }
    else if (ob.g === "ok") { b.classList.add("g-ok"); b.querySelector(".t").insertAdjacentHTML("beforeend", `<span class="tag">Bonne pratique</span><span class="fb">${esc(ob.fb)}</span>`); }
    else b.classList.add("dim");
  });
  after(it, o.g === "ok" ? "Bonne pratique" : g.label, o.g);
}

function validateMulti(it, btns) {
  let missed = 0, falsePos = 0, crit = false;
  btns.forEach(b => {
    const o = it.options[+b.dataset.i], sel = b.getAttribute("aria-pressed") === "true";
    b.disabled = true;
    let cls, tag;
    if (o.nc && sel) { cls = "g-ok"; tag = "Non-conformité repérée"; }
    else if (o.nc && !sel) { missed++; if (o.crit) crit = true; cls = o.crit ? "g-critique" : "g-ecart"; tag = o.crit ? "Non repérée · écart à risque" : "Non-conformité non repérée"; }
    else if (!o.nc && sel) { falsePos++; cls = "g-partiel"; tag = "Pourtant conforme"; }
    else { cls = "dim"; tag = "Conforme"; }
    b.classList.add(cls);
    b.querySelector(".t").insertAdjacentHTML("beforeend", `<span class="tag">${tag}</span>`);
  });
  const err = missed + falsePos;
  const pts = err === 0 ? 2 : err === 1 ? 1 : 0;
  const grade = crit ? "critique" : pts === 2 ? "ok" : pts === 1 ? "partiel" : "ecart";
  state.answers[it.id] = { pts, crit, grade };
  document.getElementById("validate").remove();
  const label = err === 0 ? "Sans faute" : `${missed} non-conformité${missed > 1 ? "s" : ""} manquée${missed > 1 ? "s" : ""}, ${falsePos} fausse${falsePos > 1 ? "s" : ""} alerte${falsePos > 1 ? "s" : ""}`;
  after(it, label, grade);
}

function after(it, label, grade) {
  const m = curMod(), last = state.ii === m.items.length - 1;
  document.getElementById("after").innerHTML = `<div class="verdict" aria-live="polite">
    <h3 style="color:var(--${grade === "ok" ? "ok" : grade === "partiel" ? "part" : grade === "critique" ? "crit" : "bad"})">${esc(label)}</h3>
    <p>${esc(it.explain)}</p>
    <p class="src">Sources : ${srcLinks(it.src)}</p>
  </div>`;
  const act = main.querySelector(".actions");
  act.insertAdjacentHTML("beforeend", `<button class="btn" id="next">${last ? "Voir le bilan du module" : "Situation suivante"}</button>`);
  const nx = document.getElementById("next");
  nx.addEventListener("click", () => { if (last) moduleEnd(); else { state.ii++; renderItem(); } });
  nx.focus({ preventScroll: true });
  document.getElementById("after").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function moduleEnd() {
  const m = curMod(), r = modResult(m);
  track(`Module ${m.id} terminé`);
  const pct = Math.round(100 * r.pts / r.max);
  const toReview = m.items.filter(it => state.answers[it.id] && state.answers[it.id].grade !== "ok");
  const hasNext = state.qi < state.queue.length - 1;
  show(`<section class="card">
    <span class="chip">Bilan · Module ${m.id}</span>
    <h1 style="margin-top:.8rem">${esc(m.title)}</h1>
    <div class="score"><span class="big">${pct} %</span><span>${r.pts} points sur ${r.max}</span></div>
    <div class="stats">
      <div class="stat"><b>${m.items.filter(it => state.answers[it.id]?.grade === "ok").length}</b><span>bonnes pratiques</span></div>
      <div class="stat"><b>${toReview.filter(it => !state.answers[it.id].crit).length}</b><span>réponses à revoir</span></div>
      <div class="stat crit"><b>${r.crit}</b><span>erreur${r.crit > 1 ? "s" : ""} à risque pour le patient</span></div>
    </div>
    <h3>${toReview.length ? "Points à retravailler" : "Aucun point à retravailler"}</h3>
    ${toReview.length ? `<ul class="review">${toReview.map(it => `<li class="${state.answers[it.id].crit ? "critique" : ""}"><b>${esc(it.id)} · ${esc(it.title)}</b>${esc(it.explain)}</li>`).join("")}</ul>` : `<p>Toutes les situations ont reçu la réponse attendue.</p>`}
    <div class="actions">
      <button class="btn ghost" id="home">Accueil</button>
      <button class="btn ghost" id="print">Imprimer le bilan</button>
      ${hasNext ? `<button class="btn" id="cont">Module suivant</button>` : state.queue.length > 1 ? `<button class="btn" id="final">Bilan du parcours</button>` : ""}
    </div>
  </section>`, "home");
  document.getElementById("home").addEventListener("click", home);
  document.getElementById("print").addEventListener("click", () => window.print());
  if (hasNext) document.getElementById("cont").addEventListener("click", () => { state.qi++; state.ii = 0; track(`Module ${curMod().id} démarré`); renderItem(); });
  const f = document.getElementById("final"); if (f) f.addEventListener("click", finalEnd);
}

function finalEnd() {
  track("Parcours terminé");
  let pts = 0, max = 0, crit = 0;
  const rows = M.map(m => { const r = modResult(m); pts += r.pts; max += r.max; crit += r.crit; const p = Math.round(100 * r.pts / r.max);
    return `<div class="bar"><span class="lbl">${m.id}. ${esc(m.short)}</span><span class="track"><span style="width:${p}%"></span></span><span class="pct">${p} %</span></div>`; }).join("");
  const pct = Math.round(100 * pts / max);
  const msg = crit ? "Des erreurs à risque ont été relevées : à reprendre en débriefing avant toute autre chose." : pct >= 85 ? "Très bonne maîtrise des comportements et des conditions de l'environnement maîtrisé." : "Bases acquises ; les points à revoir sont listés dans chaque bilan de module.";
  show(`<section class="card">
    <span class="chip">Bilan du parcours</span>
    <h1 style="margin-top:.8rem">Bloc sous contrôle</h1>
    <div class="score"><span class="big">${pct} %</span><span>${pts} points sur ${max} · ${crit} erreur${crit > 1 ? "s" : ""} à risque</span></div>
    <div class="bars">${rows}</div>
    <p>${msg}</p>
    <p class="note">Ce bilan est un outil pédagogique : ce n'est ni une évaluation des compétences ni une attestation de formation.</p>
    <div class="actions"><button class="btn ghost" id="print">Imprimer</button><button class="btn" id="home">Retour à l'accueil</button></div>
  </section>`, "home");
  document.getElementById("home").addEventListener("click", home);
  document.getElementById("print").addEventListener("click", () => window.print());
}

/* Pages annexes */
function memo() {
  show(`<section class="page">
    <h1>Aide-mémoire</h1>
    <p>Valeurs guides au repos de la norme NF S90-351 (2013), reprises par la SF2H (${srcLinks(["S1", "S5"])}). La classe de risque de chaque salle est fixée par l'établissement après analyse de risque.</p>
    <div class="tablewrap"><table class="memo">
      <thead><tr><th>Classe de risque</th><th>Particulaire</th><th>Cinétique</th><th>Microbiologique</th><th>Pression</th><th>Température</th><th>Air</th></tr></thead>
      <tbody>
        <tr><td><b>4</b> · orthopédie prothétique, greffes, brûlés</td><td>ISO 5</td><td>CP 5</td><td>M1 (≤ 1 UFC/m³)</td><td>15 ± 5 Pa</td><td>19-26 °C</td><td>Flux unidirectionnel 0,25-0,35 m/s · air neuf ≥ 6 vol/h</td></tr>
        <tr><td><b>3</b> · salles polyvalentes</td><td>ISO 7</td><td>CP 10</td><td>M10 (≤ 10 UFC/m³)</td><td>15 ± 5 Pa</td><td>19-26 °C</td><td>Brassage ≥ 15 vol/h</td></tr>
        <tr><td><b>2</b></td><td>ISO 8</td><td>CP 20</td><td>M100 (≤ 100 UFC/m³)</td><td>15 ± 5 Pa</td><td>19-26 °C</td><td>Brassage ≥ 10 vol/h</td></tr>
        <tr><td><b>Mode veille</b> (classe 4)</td><td>ISO 8</td><td>non contrôlée</td><td>non contrôlée</td><td>15 ± 5 Pa maintenue</td><td>15-30 °C</td><td>Air neuf ≥ 6 vol/h · salle inutilisable</td></tr>
      </tbody></table></div>
    <p style="margin-top:.6rem;font-size:.9rem;color:var(--muted)">CP = temps maximal, en minutes, pour éliminer 90 % des particules ≥ 0,5 µm. Hygrométrie : pas de pourcentage imposé en salle standard depuis 2013, cible fixée par le cahier des charges.</p>
    <h2>Les comportements qui comptent</h2>
    <ul class="list">
      <li>Tenue dédiée au bloc, changée si souillée et chaque jour ; ôtée ou protégée en cas de sortie, changée au retour.</li>
      <li>Article coiffant couvrant toute la chevelure ; barbe couverte.</li>
      <li>Masque chirurgical type II ou IIR dès l'entrée en salle, couvrant nez, bouche et menton ; jamais en collier ; changé s'il est humide ou souillé.</li>
      <li>Ni bijou ni montre aux mains et aux poignets, ongles courts sans vernis.</li>
      <li>Portes fermées, ouvertures et allées et venues réduites au minimum, nombre de personnes limité au nécessaire.</li>
    </ul>
    <h2>Les règles de fonctionnement</h2>
    <ul class="list">
      <li>Pression et température relevées et tracées chaque jour à l'ouverture de la salle, avec une procédure écrite en cas de non-conformité.</li>
      <li>Temps de repos entre deux interventions au moins égal à la cinétique mesurée de la salle.</li>
      <li>Pas d'arrêt total du traitement d'air ; mode veille avec surpression maintenue ; utilisation interdite avant retour au régime nominal.</li>
      <li>Maintenance hors activité, au moins annuelle, tracée dans le carnet sanitaire et communiquée au conseil de bloc.</li>
      <li>Contrôle particulaire : tous les 6 mois en ISO 5, tous les 12 mois au-delà. Pas de contrôle microbiologique de l'air en routine systématique ; prélèvements ciblés dès le premier cas d'ISO fongique et lors de travaux.</li>
    </ul>
    <h2>Face à une alerte</h2>
    <ul class="list">
      <li>Chercher d'abord la cause simple (porte, affichage, technique de prélèvement).</li>
      <li>Ne jamais interrompre une intervention en cours sur une alarme d'environnement ; sécuriser, puis ne pas démarrer la suivante sans retour à la normale.</li>
      <li>Alerter services techniques, cadre et EOH ; tracer ; analyser les causes si l'écart se répète.</li>
      <li>Ne pas désactiver une alarme ni modifier un seuil pour la faire taire.</li>
    </ul>
  </section>`, "memo");
}

function guide() {
  show(`<section class="page">
    <h1>Animer une séance</h1>
    <p>Format conseillé : 45 à 60 minutes, en petit groupe (4 à 10 personnes), sur grand écran ou chacun sur son téléphone.</p>
    <h2>Déroulé</h2>
    <ol class="list">
      <li><b>Introduction (5 min)</b> : rappeler la cascade de pression et le rôle de l'air dans le risque d'ISO.</li>
      <li><b>Jeu (30 à 40 min)</b> : un module par profil, ou le parcours complet. Faire voter le groupe avant chaque réponse.</li>
      <li><b>Débriefing (10 à 15 min)</b> : reprendre en priorité les erreurs à risque, puis confronter chaque situation au protocole local (affichage, procédure en cas d'alarme, circuit de signalement).</li>
    </ol>
    <h2>Choisir le module selon le public</h2>
    <ul class="list">${M.map(m => `<li><b>Module ${m.id}, ${esc(m.title)}</b> : ${esc(m.public)}</li>`).join("")}</ul>
    <h2>Points de vigilance</h2>
    <ul class="list">
      <li>Les conduites en cas d'alarme dépendent de la procédure de l'établissement : adapter le débriefing à la vôtre.</li>
      <li>Le score n'est ni une évaluation individuelle ni une attestation de formation.</li>
      <li>Aucune donnée personnelle n'est collectée ; la mesure d'audience, sur le site public, est agrégée et sans cookie.</li>
    </ul>
  </section>`, "guide");
}

function sources() {
  show(`<section class="page">
    <h1>Sources</h1>
    <p>Références utilisées pour les seuils, les corrections et les explications. Consultées en novembre 2026.</p>
    <ul class="srclist">${Object.entries(S).map(([k, v]) => `<li><span class="id">${k}</span>${esc(v.t)} <a href="${v.u}" target="_blank" rel="noopener">Consulter</a></li>`).join("")}</ul>
  </section>`, "sources");
}

home();
})();
