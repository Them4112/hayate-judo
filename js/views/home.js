import { createArrowLink, createElement } from '../dom.js';

const values = [
  ['Szacunek', 'Uważność wobec partnera, trenera i własnej drogi jest początkiem każdej dobrej techniki.'],
  ['Technika', 'Uczymy się działać mądrze i precyzyjnie — niezależnie od wieku i sportowego doświadczenia.'],
  ['Samodoskonalenie', 'Każdy trening to kolejny mały krok. Liczy się zaangażowanie, nie perfekcja.'],
];

export function renderHome() {
  const section = createElement('section', 'kontener-strony');

  const title = createElement('h1');
  const titleAccent = createElement('em', '', 'opanowanie');
  title.appendChild(document.createTextNode('Hayate Judo — osiągnij '));
  title.appendChild(titleAccent);
  title.appendChild(document.createTextNode(' i dyscyplinę'));

  const actions = createElement('div', 'rzad-przyciskow');
  actions.appendChild(createArrowLink('#schedule', 'Sprawdź grafik', 'przycisk-akcji przycisk-zloty'));
  const contactLink = createElement('a', 'przycisk-akcji przycisk-drugorzedny', 'Dołącz do nas');
  contactLink.href = '#contact';
  actions.appendChild(contactLink);

  const heroCopy = createElement('div', 'tresc-baneru');
  heroCopy.appendChild(createElement('span', 'etykieta-sekcji', 'Droga wojownika zaczyna się tutaj'));
  heroCopy.appendChild(title);
  heroCopy.appendChild(createElement('p', 'tekst-wprowadzajacy', 'Więcej niż trening. To przestrzeń, w której budujesz pewność siebie, rozwijasz technikę i uczysz się szacunku — na macie i poza nią.'));
  heroCopy.appendChild(actions);

  const hero = createElement('div', 'baner szklany-panel');
  hero.appendChild(heroCopy);

  const meta = createElement('div', 'fakty-klubu');
  const facts = [
    ['01', 'Ruch, który rozwija'],
    ['02', 'Trening dla każdego wieku'],
    ['03', 'Siła budowana z szacunkiem'],
  ];
  facts.forEach((fact) => {
    const item = createElement('div');
    item.appendChild(createElement('strong', '', fact[0]));
    item.appendChild(createElement('span', '', fact[1]));
    meta.appendChild(item);
  });

  const intro = createElement('div', 'naglowek-sekcji');
  const introText = createElement('div');
  introText.appendChild(createElement('span', 'etykieta-sekcji', 'Wartości, które zostają'));
  introText.appendChild(createElement('h2', '', 'Więcej niż sztuka walki'));
  intro.appendChild(introText);
  intro.appendChild(createArrowLink('#about', 'Poznaj Hayate Judo'));

  const featureGrid = createElement('div', 'siatka-zalet');
  values.forEach((value, index) => {
    const card = createElement('article', 'karta-zalety karta-tresci szklany-panel');
    card.appendChild(createElement('span', 'numer-zalety', `0${index + 1}`));
    card.appendChild(createElement('h3', '', value[0]));
    card.appendChild(createElement('p', '', value[1]));
    featureGrid.appendChild(card);
  });

  section.appendChild(hero);
  section.appendChild(meta);
  section.appendChild(intro);
  section.appendChild(featureGrid);
  return section;
}