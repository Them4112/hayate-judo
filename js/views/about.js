import { createElement, createPageHeading } from '../dom.js';

const values = [
  ['Szacunek', 'Słuchamy, współpracujemy i dbamy o bezpieczeństwo swoje oraz partnera.'],
  ['Technika', 'Stawiamy na świadomy ruch, cierpliwość i solidne podstawy judo.'],
  ['Samodoskonalenie', 'Wierzymy, że regularność i wytrwałość prowadzą dalej niż skróty.'],
];

function storyCard(sectionLabel, title, description) {
  const card = createElement('article', 'karta-tresci szklany-panel');
  card.appendChild(createElement('span', 'etykieta-sekcji', sectionLabel));
  card.appendChild(createElement('div', 'separator-zloty'));
  card.appendChild(createElement('h3', '', title));
  card.appendChild(createElement('p', '', description));
  return card;
}

export function renderAbout() {
  const section = createElement('section', 'kontener-strony');
  section.appendChild(createPageHeading('Hayate Judo', 'Siła zaczyna się', 'od środka.', 'Tworzymy miejsce, w którym sport spotyka się z uważnością, a rozwój ma swoje własne tempo.'));

  const feature = createElement('article', 'misja-klubu szklany-panel');
  feature.appendChild(createElement('span', 'etykieta-sekcji', 'Nasz cel'));
  feature.appendChild(createElement('blockquote', '', '„Wychowujemy przez ruch. Z szacunkiem do tradycji i otwartością na każdego.”'));
  feature.appendChild(createElement('p', 'tekst-przygaszony', 'Judo oznacza łagodną drogę. W Hayate podążamy nią wspólnie.'));

  const stack = createElement('div', 'historie-klubu');
  stack.appendChild(storyCard('Nasza historia', 'Klub tworzony z pasji', 'Hayate Judo łączy osoby, które chcą uczyć się judo w przyjaznej atmosferze. Na macie zaczynamy od podstaw i rozwijamy się krok po kroku.'));
  stack.appendChild(storyCard('Droga Hayate judo', 'Rozwój bez pośpiechu', 'Wspieramy początkujących i tych, którzy wracają na matę. Każdy trening to okazja, by poznać swoje możliwości.'));

  const aboutGrid = createElement('div', 'siatka-o-klubie');
  aboutGrid.appendChild(feature);
  aboutGrid.appendChild(stack);

  const trainer = createElement('article', 'profil-trenera szklany-panel');
  const trainerImage = createElement('img', '', '');
  trainerImage.src = 'assets/trener.png';
  trainerImage.alt = 'Michał Bartusik, trener judo';
  trainerImage.loading = 'lazy';
  trainer.appendChild(trainerImage);

  const trainerDetails = createElement('div', 'opis-trenera');
  trainerDetails.appendChild(createElement('span', 'etykieta-sekcji', 'Poznaj trenera'));
  trainerDetails.appendChild(createElement('h2', '', 'Michał Bartusik'));
  trainerDetails.appendChild(createElement(
    'p',
    '',
    "Trenerem Hayate Judo jest Michał Bartusik – judoka i posiadacz 1. dana. W swojej karierze zawodniczej zdobył trzykrotnie tytuł mistrza Polski seniorów: w kategorii -66 kg w 2013 i 2015 roku oraz w kategorii -73 kg w 2017 roku. Jest również brązowym medalistą Pucharu Świata w judo w Tallinie w kategorii -66 kg."  ));
  trainerDetails.appendChild(createElement(
    'p',
    '',
    'Michał prowadził klub judo Fight Fun w Niechobrzu, działający od 2019 roku. Fight-Fun przeszedł rebranding i działa dziś pod nazwą Hayate Judo.',
  ));

  const sources = createElement('p', 'zrodla-trenera');
  sources.appendChild(document.createTextNode('Źródła: '));
  [
    ['Wywiad', 'https://nowiny24.pl/michal-bartusik-judo-to-wspaniala-przygoda-ktora-uksztaltowala-moje-zycie-rozmowa/ar/c2-16985819'],
    ['Rekord zawodniczy', 'https://www.judoinside.com/judoka/76712/Michal_Bartusik/judo-career'],
  ].forEach(([label, href], index) => {
    if (index > 0) sources.appendChild(document.createTextNode(' · '));
    const link = createElement('a', '', label);
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    sources.appendChild(link);
  });
  trainerDetails.appendChild(sources);
  trainer.appendChild(trainerDetails);

  const intro = createElement('div', 'naglowek-sekcji');
  const introText = createElement('div');
  introText.appendChild(createElement('span', 'etykieta-sekcji', 'Trzy zasady, jeden kierunek'));
  introText.appendChild(createElement('h2', '', 'To, co buduje nasz klub'));
  intro.appendChild(introText);

  const valueGrid = createElement('div', 'siatka-wartosci');
  values.forEach((value, index) => {
    const card = createElement('article', 'karta-wartosci karta-tresci szklany-panel');
    card.appendChild(createElement('span', 'numer-zalety', `0${index + 1}`));
    card.appendChild(createElement('h3', '', value[0]));
    card.appendChild(createElement('p', '', value[1]));
    valueGrid.appendChild(card);
  });

  section.appendChild(aboutGrid);
  section.appendChild(trainer);
  section.appendChild(intro);
  section.appendChild(valueGrid);
  return section;
}