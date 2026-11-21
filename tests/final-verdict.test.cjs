const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const { runInNewContext } = require('node:vm');

function readScript(name) {
  return readFileSync(path.join(__dirname, '..', name), 'utf8');
}

function renderFinal(points, max, critical) {
  const listeners = new Map();
  const events = [];
  const main = { focus() {} };
  const window = { scrollTo() {}, bscAnalytics: { track: event => events.push(event) } };
  const document = {
    documentElement: { dataset: {} },
    querySelectorAll: () => [],
    getElementById: id => id === 'main' ? main : {
      addEventListener(type, callback) { listeners.set(id + ':' + type, callback); },
    },
  };
  const context = { window, document };
  runInNewContext(readScript('data.js'), context);
  runInNewContext(readScript('attestation.js'), context);
  if (max !== 60) {
    // Un barème fictif couvre les ratios inaccessibles avec les 60 points du jeu.
    window.MODULES = [{
      id: 1,
      short: 'Module de test',
      items: Array.from({ length: max / 2 }, (_, id) => ({ id })),
    }];
  }
  const items = window.MODULES.flatMap(module => module.items);
  assert.equal(items.length * 2, max);
  context.answers = Object.fromEntries(items.map(({ id }, index) => [
    id, { pts: Math.max(0, Math.min(2, points - 2 * index)), crit: index >= items.length - critical },
  ]));

  let attestation;
  window.SGAttestation.open = options => { attestation = options; };
  const source = readScript('app.js');
  const entry = /\bhome\(\);\s*\}\)\(\);\s*$/;
  assert.match(source, entry);
  // Injecte des réponses terminées, puis exécute le véritable rendu du bilan.
  runInNewContext(source.replace(entry, 'Object.assign(state.answers, answers); finalEnd(); })();'), context);
  listeners.get('attest:click')();

  assert.equal(attestation.ratio, points / max);
  assert.equal(attestation.critical, critical);
  assert.deepEqual(events, ['Parcours terminé']);
  return {
    html: main.innerHTML.replaceAll('\u00a0', ' '),
    palier: window.SGAttestation.palier(attestation.ratio, attestation.critical),
  };
}

const consolider = 'Parcours à consolider : les points à revoir figurent dans les bilans des modules.';
const reussi = 'Parcours réussi : certains points peuvent encore être consolidés.';
const excellence = 'Très bonne réussite du parcours proposé.';
const risque = 'Des erreurs à risque ont été relevées : à reprendre en débriefing avant toute autre chose.';

const cases = [
  { label: '70 %', points: 42, max: 60, displayed: 70, message: consolider, palier: 'participation' },
  { label: '80 %', points: 48, max: 60, displayed: 80, message: reussi, palier: 'reussite' },
  { label: '94 %', points: 47, max: 50, displayed: 94, message: reussi, palier: 'reussite' },
  { label: '95 %', points: 57, max: 60, displayed: 95, message: excellence, palier: 'excellence' },
  { label: 'score élevé avec une erreur critique', points: 58, max: 60, critical: 1, displayed: 97, message: risque, palier: 'participation' },
  { label: '79,6 % affiché à 80 %', points: 199, max: 250, displayed: 80, message: consolider, palier: 'participation' },
  { label: '94,8 % affiché à 95 %', points: 237, max: 250, displayed: 95, message: reussi, palier: 'reussite' },
];

for (const { label, points, max, critical = 0, displayed, message, palier } of cases) {
  test(`bilan du parcours : ${label}`, () => {
    const result = renderFinal(points, max, critical);
    assert.ok(result.html.includes(`<p>${message}</p>`));
    assert.ok(result.html.includes(`<span class="big">${displayed} %</span>`));
    assert.ok(result.html.includes(`${points} points sur ${max}`));
    assert.equal(result.palier, palier);
  });
}
