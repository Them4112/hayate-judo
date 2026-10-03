import { createArrowLink, createElement, createPageHeading } from '../dom.js';

function contactCard(sectionLabel, title) {
  const card = createElement('article', 'karta-kontaktowa karta-tresci szklany-panel');
  card.appendChild(createElement('span', 'etykieta-sekcji', sectionLabel));
  card.appendChild(createElement('div', 'separator-zloty'));
  card.appendChild(createElement('h2', '', title));
  return card;
}

export function renderContact() {
  const section = createElement('section', 'kontener-strony');
  section.appendChild(createPageHeading('Hayate Judo', 'Dane', 'kontaktowe.', 'Znajdziesz tu adres e-mail, informacje o dojo i nasze profile społecznościowe.'));

  const formCard = contactCard('Napisz do nas', 'Formularz Rekrutacyjny:');
  const formLink = createElement('a', '', 'Kliknij, aby przejść do formularza');
  formLink.href = 'https://hayatejudo.sportsmanago.pl/rekrutacja';
  formCard.appendChild(formLink);

  const dojoCard = contactCard('Wpadnij na trening', 'Nasze dojo');
  dojoCard.appendChild(createElement('p', '', ''));
  dojoCard.appendChild(createArrowLink('#locations', 'Zobacz lokalizacje'));

  const socialCard = contactCard('Nasze socjale', 'Media społecznościowe');
  const socialLinks = createElement('div', 'linki-spolecznosciowe');
  const instagramLink = createElement('a', '', 'IG');
  instagramLink.href = 'https://www.instagram.com/hayate.judo/';
  instagramLink.title = 'Instagram Hayate Judo';
  instagramLink.target = '_blank';
  const facebookLink = createElement('a', '', 'FB');
  facebookLink.href = 'https://www.facebook.com/fightfunmichalbartusik';
  facebookLink.title = 'Facebook Hayate Judo';
  facebookLink.target = '_blank';
  socialLinks.appendChild(instagramLink);
  socialLinks.appendChild(facebookLink);
  socialCard.appendChild(socialLinks);

  const cards = createElement('div', 'siatka-kontaktu');
  cards.appendChild(formCard);
  cards.appendChild(dojoCard);
  cards.appendChild(socialCard);
  section.appendChild(cards);
  return section;
}