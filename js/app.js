import { renderHome } from "./views/home.js";
import { renderAbout } from "./views/about.js";
import { loadInstagramFeed, renderNews } from "./views/news.js";
import { renderSchedule } from "./views/schedule.js";
import { renderPricing } from "./views/pricing.js";
import { renderLocations } from "./views/locations.js";
import { renderContact } from "./views/contact.js";

const pages = {
  home: renderHome,
  about: renderAbout,
  news: renderNews,
  schedule: renderSchedule,
  pricing: renderPricing,
  locations: renderLocations,
  contact: renderContact,
};

const pageTitles = {
  home: "Hayate Judo",
  about: "O nas — Hayate Judo",
  news: "Nowości — Hayate Judo",
  schedule: "Grafik zajęć — Hayate Judo",
  pricing: "Cennik — Hayate Judo",
  locations: "Nasze lokalizacje — Hayate Judo",
  contact: "Kontakt — Hayate Judo",
};

const pageDescriptions = {
  home: "Treningi judo dla dzieci, młodzieży i dorosłych. Poznaj Hayate Judo, sprawdź grafik zajęć i dołącz do klubu.",
  about:
    "Poznaj Hayate Judo, naszą misję, historię oraz wartości: szacunek, technikę i samodoskonalenie.",
  news: "Aktualności, wydarzenia i relacje z treningów Hayate Judo. Zobacz najnowsze wpisy klubu.",
  schedule:
    "Sprawdź tygodniowy grafik treningów judo dla dzieci, młodzieży i dorosłych w Hayate Judo.",
  pricing:
    "Poznaj informacje o karnetach i opłatach za treningi judo w klubie Hayate Judo.",
  locations:
    "Znajdź dojo Hayate Judo i sprawdź godziny treningów w wybranej lokalizacji.",
  contact:
    "Skontaktuj się z klubem Hayate Judo i znajdź nasze profile społecznościowe.",
};

const appRoot = document.querySelector("#app");
const mainNavigation = document.querySelector(".nawigacja-glowna");
const mobileMenuButton = document.querySelector(".przycisk-menu-mobilnego");
const loadingScreen = document.querySelector(".ekran-ladowania");
const descriptionTag = document.querySelector('meta[name="description"]');
const openGraphTitleTag = document.querySelector('meta[property="og:title"]');
const openGraphDescriptionTag = document.querySelector(
  'meta[property="og:description"]',
);
const socialTitleTag = document.querySelector('meta[name="twitter:title"]');
const socialDescriptionTag = document.querySelector(
  'meta[name="twitter:description"]',
);

function prepareLogoImages() {
  const logoImages = document.querySelectorAll(".obrazek-logo");

  logoImages.forEach((image) => {
    function showLogo() {
      image.parentElement.classList.add("logo-z-obrazka");
    }

    function keepTextLogo() {
      image.remove();
    }

    if (image.complete) {
      if (image.naturalWidth > 0) showLogo();
      else keepTextLogo();
      return;
    }

    image.addEventListener("load", showLogo, { once: true });
    image.addEventListener("error", keepTextLogo, { once: true });
  });
}

function closeMenu() {
  mainNavigation.classList.remove("stan-otwarty");
  mobileMenuButton.classList.remove("stan-otwarty");
}

function renderPage() {
  let route = window.location.hash.slice(1);
  if (!route || !pages[route]) {
    route = "home";
    window.history.replaceState(null, "", "#home");
  }

  const pageElement = pages[route]();
  appRoot.replaceChildren(pageElement);
  document.title = pageTitles[route];
  descriptionTag.content = pageDescriptions[route];
  openGraphTitleTag.content = pageTitles[route];
  openGraphDescriptionTag.content = pageDescriptions[route];
  socialTitleTag.content = pageTitles[route];
  socialDescriptionTag.content = pageDescriptions[route];

  const navLinks = mainNavigation.querySelectorAll("a");
  navLinks.forEach((navLink) => {
    const isActive = navLink.getAttribute("href") === `#${route}`;
    navLink.classList.toggle("stan-aktywny", isActive);
  });

  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (route === "news") {
    loadInstagramFeed();
  }
}

mobileMenuButton.addEventListener("click", () => {
  const isOpen = mainNavigation.classList.contains("stan-otwarty");
  mainNavigation.classList.toggle("stan-otwarty", !isOpen);
  mobileMenuButton.classList.toggle("stan-otwarty", !isOpen);
});

mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

window.addEventListener("hashchange", renderPage);
document.querySelector("#year").textContent = new Date().getFullYear();
prepareLogoImages();
renderPage();

window.setTimeout(() => {
  document.body.classList.add("stan-gotowy");
  loadingScreen.classList.add("stan-ukryty");
}, 2000);
