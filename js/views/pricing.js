import { createArrowLink, createElement, createPageHeading } from '../dom.js';

const plans = ['Karnet dziecięcy', 'Karnet młodzieżowy', 'Karnet dla dorosłych'];

export function renderPricing() {
  const section = createElement('section', 'kontener-strony');
  section.appendChild(createPageHeading('Przejrzyste zasady', 'Cennik', 'zajęć.', 'Pracujemy nad aktualną ofertą treningową. Szczegóły możesz poznać bezpośrednio w klubie.'));

  const table = createElement('table', 'tabela-cennika');
  const tableHeader = createElement('thead');
  const headerRow = createElement('tr');
  ['Rodzaj zajęć', 'Częstotliwość', 'Cena'].forEach((label) => {
    const cell = createElement('th', '', label);
    cell.scope = 'col';
    headerRow.appendChild(cell);
  });
  tableHeader.appendChild(headerRow);

  const tableBody = createElement('tbody');
  plans.forEach((name) => {
    const row = createElement('tr');
    row.appendChild(createElement('td', '', name));
    row.appendChild(createElement('td', '', 'Wkrótce'));
    row.appendChild(createElement('td', '', 'Wkrótce'));
    tableBody.appendChild(row);
  });
  table.appendChild(tableHeader);
  table.appendChild(tableBody);

  const tableWrap = createElement('div', 'przewijana-tabela');
  tableWrap.appendChild(table);
  const placeholder = createElement('div', 'miejsce-na-cennik szklany-panel');
  placeholder.appendChild(tableWrap);
  placeholder.appendChild(createElement('p', 'status-gotowosci', 'Tabela cennika w przygotowaniu'));

  const actions = createElement('div', 'rzad-przyciskow');
  actions.appendChild(createArrowLink('#contact', 'Zapytaj o ofertę', 'przycisk-akcji przycisk-zloty'));

  section.appendChild(placeholder);
  section.appendChild(actions);
  return section;
}