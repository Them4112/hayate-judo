import { createArrowLink, createElement, createPageHeading } from '../dom.js';

const skladki = [
  ['1 osoba', '110 zł', '160 zł', '160 zł', '190 zł'],
  ['2 osoby', '200 zł', '300 zł', '300 zł', '360 zł'],
  ['3 osoby', '280 zł', '430 zł', '430 zł', '520 zł'],
];

const kolumny = [
  'Liczba osób trenujących w rodzinie',
  '1 trening / tydz. (przedszkole)',
  '2 treningi / tydz. (przedszkole)',
  '1 trening / tydz. (judo)',
  '2+ treningi / tydz. (judo)',
];

export function renderPricing() {
  const section = createElement('section', 'kontener-strony');
  section.appendChild(createPageHeading(
    'IV. Regulamin składek członkowskich',
    'Składki',
    'członkowskie.',
    'Wysokość składki zależy od liczby osób trenujących w rodzinie oraz częstotliwości treningów.',
  ));

  const table = createElement('table', 'tabela-cennika');
  const tableHeader = createElement('thead');
  const headerRow = createElement('tr');
  kolumny.forEach((label) => {
    const cell = createElement('th', '', label);
    cell.scope = 'col';
    headerRow.appendChild(cell);
  });
  tableHeader.appendChild(headerRow);

  const tableBody = createElement('tbody');
  skladki.forEach(([rodzina, ...kwoty]) => {
    const row = createElement('tr');
    const rowHeader = createElement('th', '', rodzina);
    rowHeader.scope = 'row';
    row.appendChild(rowHeader);
    kwoty.forEach((kwota) => row.appendChild(createElement('td', '', kwota)));
    tableBody.appendChild(row);
  });
  table.appendChild(tableHeader);
  table.appendChild(tableBody);

  const tableWrap = createElement('div', 'przewijana-tabela');
  tableWrap.appendChild(table);
  const pricePanel = createElement('div', 'miejsce-na-cennik szklany-panel');
  pricePanel.appendChild(tableWrap);

  const paymentPanel = createElement('section', 'dane-przelewu szklany-panel');
  paymentPanel.appendChild(createElement('h2', 'naglowek-przelewu', 'Dane do przelewu'));
  paymentPanel.appendChild(createElement('p', 'opis-numeru-konta', 'Numer konta bankowego'));
  paymentPanel.appendChild(createElement('p', 'numer-konta', '12 1140 2004 0000 3402 8350 3791'));

  const actions = createElement('div', 'rzad-przyciskow');
  actions.appendChild(createArrowLink('#contact', 'Zapytaj o składki', 'przycisk-akcji przycisk-zloty'));

  section.appendChild(pricePanel);
  section.appendChild(paymentPanel);
  section.appendChild(actions);
  return section;
}
