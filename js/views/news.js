import { createElement, createPageHeading } from '../dom.js';

function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(date);
}

function renderPost(post) {
  const imageUrl = safeUrl(post.mediaUrl);
  const postUrl = safeUrl(post.permalink);
  if (!imageUrl || !postUrl) return null;

  const caption = post.caption || 'Nowy wpis z życia klubu Hayate Judo.';
  const username = post.username ? `@${post.username}` : 'Hayate Judo';
  const date = formatDate(post.timestamp);
  let mediaType = 'Zdjęcie';
  if (post.mediaType === 'VIDEO') mediaType = 'Film';
  if (post.mediaType === 'CAROUSEL_ALBUM') mediaType = 'Album';

  const image = createElement('img');
  image.src = imageUrl;
  image.alt = caption;
  image.loading = 'lazy';

  const cover = createElement('a', 'okladka-nowosci');
  cover.href = postUrl;
  cover.title = 'Otwórz wpis na Instagramie';
  cover.target = '_blank';
  cover.rel = 'noreferrer';
  const kind = createElement('span', 'typ-materialu', mediaType);
  cover.appendChild(image);
  cover.appendChild(kind);

  const dot = createElement('span', 'wskaznik-instagram');
  const meta = createElement('div', 'szczegoly-nowosci');
  const user = createElement('span', 'konto-instagram');
  user.appendChild(dot);
  user.appendChild(document.createTextNode(username));
  meta.appendChild(user);
  if (date) {
    const time = createElement('time', '', date);
    time.dateTime = post.timestamp;
    meta.appendChild(time);
  }

  const openLink = createElement('a', 'link-do-wpisu', 'Czytaj na Instagramie');
  openLink.href = postUrl;
  openLink.target = '_blank';
  openLink.rel = 'noreferrer';
  const arrow = createElement('span', '', '↗');
  openLink.appendChild(document.createTextNode(' '));
  openLink.appendChild(arrow);

  const body = createElement('div', 'tresc-nowosci');
  body.appendChild(meta);
  body.appendChild(createElement('p', 'opis-nowosci', caption));
  body.appendChild(openLink);

  const card = createElement('article', 'karta-nowosci szklany-panel');
  card.appendChild(cover);
  card.appendChild(body);
  return card;
}

function newsState(sectionLabel, title, message) {
  const state = createElement('div', 'komunikat-nowosci szklany-panel');
  state.appendChild(createElement('span', 'etykieta-sekcji', sectionLabel));
  state.appendChild(createElement('h2', '', title));
  state.appendChild(createElement('p', '', message));
  return state;
}

export function renderNews() {
  const section = createElement('section', 'kontener-strony');
  section.appendChild(createPageHeading('Z życia klubu', 'Nowości z', 'Hayate.', 'Treningi, wydarzenia i codzienne chwile z dojo — najnowsze wpisy prosto z naszego Instagrama.'));


  const feed = createElement('div', 'siatka-nowosci');
  feed.id = 'ig-feed';
  for (let index = 0; index < 3; index += 1) {
    const skeleton = createElement('div', 'szkielet-nowosci szklany-panel');
    skeleton.appendChild(createElement('div'));
    skeleton.appendChild(createElement('span'));
    skeleton.appendChild(createElement('span'));
    feed.appendChild(skeleton);
  }


  section.appendChild(feed);
  return section;
}

export async function loadInstagramFeed() {
  const feed = document.querySelector('#ig-feed');
  const status = document.querySelector('#ig-status');
  const profile = document.querySelector('#ig-profile');
  if (!feed || !status) return;

  try {
    const response = await fetch('/api/instagram/posts?limit=9');
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Nie udało się pobrać wpisów.');

    if (!feed.isConnected) return;

    const posts = result.posts || [];
    let cardCount = 0;
    feed.replaceChildren();

    posts.forEach((post) => {
      const card = renderPost(post);
      if (!card) return;
      feed.appendChild(card);
      cardCount += 1;
    });

    if (cardCount === 0) {
      feed.appendChild(newsState('Nowości', 'Chwilowo bez nowych wpisów.', 'Najnowsze publikacje pojawią się tutaj po opublikowaniu ich na Instagramie.'));
    }
    status.textContent = cardCount > 0 ? 'Najnowsze wpisy z profilu klubu' : 'Profil klubu';

    const profileUrl = safeUrl(result.profileUrl);
    if (profileUrl && profile) {
      profile.href = profileUrl;
      profile.hidden = false;
    }
  } catch (error) {
    if (!feed.isConnected) return;
    feed.replaceChildren(newsState('Kanał nowości', 'Wpisy wkrótce.', 'Uruchom serwer aplikacji lub sprawdź ustawienia kanału Instagram.'));
    status.textContent = 'Kanał Instagram';
  }
}