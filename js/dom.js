export function createElement(tag, className = '', text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== '') element.textContent = text;
  return element;
}

export function createPageHeading(label, title, highlight, description) {
  const header = createElement('header', 'naglowek-widoku');
  const heading = createElement('h1');
  const highlightedText = createElement('em', '', highlight);
  const descriptionText = createElement('p', 'tekst-wprowadzajacy', description);

  heading.appendChild(document.createTextNode(`${title} `));
  heading.appendChild(highlightedText);
  header.appendChild(createElement('span', 'etykieta-sekcji', label));
  header.appendChild(heading);
  header.appendChild(descriptionText);
  return header;
}

export function createArrowLink(href, label, className = 'link-tekstowy') {
  const anchor = createElement('a', className, label);
  anchor.href = href;

  const arrow = createElement('span', '', '↗');
  anchor.appendChild(document.createTextNode(' '));
  anchor.appendChild(arrow);
  return anchor;
}