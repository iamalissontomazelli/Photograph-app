
/* ==========================================
   LEANDRO HENRY PHOTOGRAPHY
   Main JavaScript
   PT-BR / ENGLISH
========================================== */

/* ==========================================
   1. TRANSLATIONS
========================================== */

const translations = {
  pt: {
    nav: ['Início', 'Portfólio', 'Sobre', 'Contato'],

    heroEyebrows: [
      'FOTOGRAFIA PROFISSIONAL',
      'RETRATOS & PESSOAS',
      'PAISAGENS & VIAGENS'
    ],

    heroTitles: [
      'Momentos reais,<br>histórias únicas.',
      'Essência em<br>cada detalhe.',
      'O mundo visto<br>por outra lente.'
    ],

    heroDescriptions: [
      'Fotografias que preservam a emoção de cada instante.',
      'Retratos autênticos, feitos para durar.',
      'Lugares, luzes e histórias que merecem ser lembrados.'
    ],

    heroButtons: [
      'Explorar portfólio <span>↗</span>',
      'Ver fotografias <span>↗</span>',
      'Descobrir mais <span>↗</span>'
    ],

    featuredEyebrow: 'UM OLHAR, MUITAS HISTÓRIAS',
    featuredTitle: 'Em destaque<span>.</span>',
    featuredLink: 'Ver todo o portfólio ↗',

    featuredCategories: [
      '01 / PAISAGEM',
      '02 / RETRATO',
      '03 / EVENTO',
      '04 / VIAGEM'
    ],

    featuredNames: [
      'Primeira luz',
      'Entre olhares',
      'Para sempre',
      'Silêncio da noite'
    ],

    portfolioEyebrow: 'TRABALHOS SELECIONADOS',
    portfolioTitle: 'Portfólio<span>.</span>',
    portfolioDescription:
      'Uma seleção de histórias contadas através da fotografia.',

    filters: [
      'Tudo',
      'Paisagens',
      'Retratos',
      'Eventos',
      'Viagens'
    ],

    photoCategories: [
      'PAISAGENS · 01',
      'RETRATOS · 02',
      'VIAGENS · 03',
      'EVENTOS · 04',
      'PAISAGENS · 05',
      'RETRATOS · 06'
    ],

    aboutEyebrow: 'POR TRÁS DAS LENTES',

    aboutTitle:
      'Fotografar é<br>guardar o que<br>o tempo leva<span>.</span>',

    aboutDescription:
      'Sou fotógrafo e acredito que cada imagem tem uma história para contar. Meu trabalho é observar os detalhes, encontrar a luz e transformar momentos em memórias.',

    aboutSignature:
      'Sua história merece ser registrada.',

    aboutLink: 'Vamos conversar ↗',

    contactEyebrow:
      'VAMOS CRIAR ALGO ESPECIAL?',

    contactTitle:
      'Qual história<br>vamos contar<span>?</span>',

    contactDescription:
      'Conte um pouco sobre sua ideia. Será um prazer conversar sobre seu projeto.',

    emailLabel: 'EMAIL',
    instagramLabel: 'INSTAGRAM',

    nameLabel: 'Nome completo *',
    emailField: 'E-mail *',
    phoneLabel: 'Telefone',
    messageLabel: 'Conte sua ideia *',

    namePlaceholder: 'Como podemos te chamar?',
    emailPlaceholder: 'seu@email.com',
    phonePlaceholder: '+55 (00) 00000-0000',

    messagePlaceholder:
      'Descreva brevemente o que você está imaginando...',

    submit: 'Enviar mensagem <span>↗</span>',

    formNote:
      '* Campos obrigatórios. O envio abrirá seu aplicativo de e-mail.',

    formFeedback: 'Abrindo seu aplicativo de e-mail...',

    footer: 'Todos os direitos reservados.',
    backTop: 'Voltar ao topo ↑',

    emailSubject: 'Novo contato pelo portfólio',
    emailName: 'Nome',
    emailPhone: 'Telefone',
    emailNotProvided: 'Não informado',
    emailIdea: 'Ideia do projeto'
  },

  en: {
    nav: ['Home', 'Portfolio', 'About', 'Contact'],

    heroEyebrows: [
      'PROFESSIONAL PHOTOGRAPHY',
      'PORTRAITS & PEOPLE',
      'LANDSCAPES & TRAVEL'
    ],

    heroTitles: [
      'Real moments,<br>unique stories.',
      'Essence in<br>every detail.',
      'The world seen<br>through another lens.'
    ],

    heroDescriptions: [
      'Photography that preserves the emotion of every moment.',
      'Authentic portraits, made to last.',
      'Places, light and stories worth remembering.'
    ],

    heroButtons: [
      'Explore portfolio <span>↗</span>',
      'View photographs <span>↗</span>',
      'Discover more <span>↗</span>'
    ],

    featuredEyebrow: 'ONE LOOK, MANY STORIES',
    featuredTitle: 'Featured<span>.</span>',
    featuredLink: 'View full portfolio ↗',

    featuredCategories: [
      '01 / LANDSCAPE',
      '02 / PORTRAIT',
      '03 / EVENT',
      '04 / TRAVEL'
    ],

    featuredNames: [
      'First light',
      'Between glances',
      'Forever',
      'Silence of the night'
    ],

    portfolioEyebrow: 'SELECTED WORK',
    portfolioTitle: 'Portfolio<span>.</span>',

    portfolioDescription:
      'A selection of stories told through photography.',

    filters: [
      'All',
      'Landscapes',
      'Portraits',
      'Events',
      'Travel'
    ],

    photoCategories: [
      'LANDSCAPES · 01',
      'PORTRAITS · 02',
      'TRAVEL · 03',
      'EVENTS · 04',
      'LANDSCAPES · 05',
      'PORTRAITS · 06'
    ],

    aboutEyebrow: 'BEHIND THE LENS',

    aboutTitle:
      'Photography is<br>about preserving<br>what time takes<span>.</span>',

    aboutDescription:
      'I am a photographer who believes every image has a story to tell. My work is about noticing the details, finding the light and turning moments into memories.',

    aboutSignature:
      'Your story deserves to be captured.',

    aboutLink: "Let's talk ↗",

    contactEyebrow:
      "LET'S CREATE SOMETHING SPECIAL",

    contactTitle:
      'What story<br>shall we tell<span>?</span>',

    contactDescription:
      "Tell me a little about your idea. I'd love to discuss your project.",

    emailLabel: 'EMAIL',
    instagramLabel: 'INSTAGRAM',

    nameLabel: 'Full name *',
    emailField: 'Email *',
    phoneLabel: 'Phone',
    messageLabel: 'Tell us your idea *',

    namePlaceholder: 'What should we call you?',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+353 00 000 0000',

    messagePlaceholder:
      'Briefly describe what you have in mind...',

    submit: 'Send message <span>↗</span>',

    formNote:
      '* Required fields. Submitting will open your email application.',

    formFeedback: 'Opening your email application...',

    footer: 'All rights reserved.',
    backTop: 'Back to top ↑',

    emailSubject: 'New contact from the photography portfolio',
    emailName: 'Name',
    emailPhone: 'Phone',
    emailNotProvided: 'Not provided',
    emailIdea: 'Project idea'
  }
};


/* ==========================================
   2. LANGUAGE SYSTEM
========================================== */

let currentLanguage =
  localStorage.getItem('portfolio-language') || 'pt';

function changeLanguage(language) {

  const t = translations[language];

  if (!t) return;

  currentLanguage = language;

  document.documentElement.lang =
    language === 'pt' ? 'pt-BR' : 'en';

  // Navigation
  document.querySelectorAll('.main-nav a')
    .forEach((element, index) => {
      element.textContent = t.nav[index];
    });

  // Hero carousel
  document.querySelectorAll('.hero-slide')
    .forEach((slide, index) => {

      slide.querySelector('.eyebrow').textContent =
        t.heroEyebrows[index];

      slide.querySelector('h1').innerHTML =
        t.heroTitles[index];

      slide.querySelector('.hero-description').textContent =
        t.heroDescriptions[index];

      slide.querySelector('.outline-button').innerHTML =
        t.heroButtons[index];
    });

  // Featured section
  document.querySelector('.featured .eyebrow').textContent =
    t.featuredEyebrow;

  document.querySelector('.featured h2').innerHTML =
    t.featuredTitle;

  document.querySelector('.featured .text-link').textContent =
    t.featuredLink;

  document.querySelectorAll('.featured-card').forEach(
    (card, index) => {

      card.querySelector('figcaption span').textContent =
        t.featuredCategories[index];

      card.querySelector('figcaption b').textContent =
        t.featuredNames[index];
    }
  );

  // Portfolio
  document.querySelector('.portfolio .eyebrow').textContent =
    t.portfolioEyebrow;

  document.querySelector('.portfolio h2').innerHTML =
    t.portfolioTitle;

  document.querySelector('.section-note').textContent =
    t.portfolioDescription;

  document.querySelectorAll('.filter').forEach(
    (button, index) => {
      button.textContent = t.filters[index];
    }
  );

  document.querySelectorAll('.photo-item span').forEach(
    (element, index) => {
      element.textContent = t.photoCategories[index];
    }
  );

  // About section
  document.querySelector('.about-copy .eyebrow').textContent =
    t.aboutEyebrow;

  document.querySelector('.about-copy h2').innerHTML =
    t.aboutTitle;

  const aboutParagraphs =
    document.querySelectorAll('.about-copy > p:not(.eyebrow)');

  aboutParagraphs[0].textContent =
    t.aboutDescription;

  aboutParagraphs[1].textContent =
    t.aboutSignature;

  document.querySelector('.about-copy .text-link').textContent =
    t.aboutLink;

  // Contact section
  document.querySelector('.contact-intro .eyebrow').textContent =
    t.contactEyebrow;

  document.querySelector('.contact h2').innerHTML =
    t.contactTitle;

  document.querySelector(
    '.contact-intro > p:not(.eyebrow)'
  ).textContent = t.contactDescription;

  document.querySelectorAll('.contact-detail span')[0].textContent =
    t.emailLabel;

  document.querySelectorAll('.contact-detail span')[1].textContent =
    t.instagramLabel;

  // Form labels
  document.querySelector('label[for="name"]').textContent =
    t.nameLabel;

  document.querySelector('label[for="email"]').textContent =
    t.emailField;

  document.querySelector('label[for="phone"]').textContent =
    t.phoneLabel;

  document.querySelector('label[for="message"]').textContent =
    t.messageLabel;

  // Form placeholders
  document.querySelector('#name').placeholder =
    t.namePlaceholder;

  document.querySelector('#email').placeholder =
    t.emailPlaceholder;

  document.querySelector('#phone').placeholder =
    t.phonePlaceholder;

  document.querySelector('#message').placeholder =
    t.messagePlaceholder;

  document.querySelector('.submit-button').innerHTML =
    t.submit;

  document.querySelector('.form-note').textContent =
    t.formNote;

  // Footer
  document.querySelector('.site-footer p').innerHTML =
    `© ${new Date().getFullYear()} LEANDRO HENRY PHOTOGRAPHY. ${t.footer}`;

  document.querySelector('.back-top').textContent =
    t.backTop;

  // Update active language button
  document.querySelectorAll('.language-btn')
    .forEach(button => {

      const active =
        button.dataset.language === language;

      button.classList.toggle('active', active);

      button.setAttribute('aria-pressed', String(active));
    });

  // Save selected language
  localStorage.setItem('portfolio-language', language);

  // Clear previous feedback
  document.querySelector('#form-feedback').textContent = '';
}

// Language buttons
document.querySelectorAll('.language-btn').forEach(button => {

  button.addEventListener('click', () => {

    changeLanguage(button.dataset.language);

  });

});

// Restore saved language
changeLanguage(currentLanguage);


/* ==========================================
   3. MAIN HERO CAROUSEL
========================================== */

const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.dot')];

let currentSlide = 0;
let slideTimer;

function showSlide(index) {

  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });

  const counter = document.querySelector('#slide-current');

  if (counter) {
    counter.textContent =
      String(currentSlide + 1).padStart(2, '0');
  }
}

function restartSlideTimer() {

  clearInterval(slideTimer);

  slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 6000);
}

document.querySelector('.hero-arrow.prev')
  ?.addEventListener('click', () => {

    showSlide(currentSlide - 1);
    restartSlideTimer();

  });

document.querySelector('.hero-arrow.next')
  ?.addEventListener('click', () => {

    showSlide(currentSlide + 1);
    restartSlideTimer();

  });

dots.forEach((dot, index) => {

  dot.addEventListener('click', () => {

    showSlide(index);
    restartSlideTimer();

  });

});

if (slides.length > 1) {
  restartSlideTimer();
}


/* ==========================================
   4. FEATURED PHOTO CAROUSEL
========================================== */

const track = document.querySelector('.featured-track');

document.querySelector('.gallery-prev')
  ?.addEventListener('click', () => {

    track?.scrollBy({
      left: -300,
      behavior: 'smooth'
    });

  });

document.querySelector('.gallery-next')
  ?.addEventListener('click', () => {

    track?.scrollBy({
      left: 300,
      behavior: 'smooth'
    });

  });


/* ==========================================
   5. PORTFOLIO FILTERS
========================================== */

const photoItems = [
  ...document.querySelectorAll('.photo-item')
];

document.querySelectorAll('.filter').forEach(button => {

  button.addEventListener('click', () => {

    document.querySelector('.filter.active')
      ?.classList.remove('active');

    button.classList.add('active');

    const filter = button.dataset.filter;

    photoItems.forEach(item => {

      item.classList.toggle(
        'hidden',
        filter !== 'all' &&
        item.dataset.category !== filter
      );

    });

  });

});


/* ==========================================
   6. LIGHTBOX
========================================== */

const lightbox = document.querySelector('#lightbox');
const lightboxImg = lightbox?.querySelector('img');

let activePhoto = 0;

function getVisiblePhotos() {

  return photoItems.filter(
    item => !item.classList.contains('hidden')
  );

}

function openPhoto(index) {

  const visible = getVisiblePhotos();

  if (!visible.length || !lightbox || !lightboxImg) return;

  activePhoto =
    (index + visible.length) % visible.length;

  lightboxImg.src =
    visible[activePhoto].dataset.full;

  lightboxImg.alt =
    visible[activePhoto].querySelector('img').alt;

  lightbox.classList.add('open');

  lightbox.setAttribute('aria-hidden', 'false');

  document.body.style.overflow = 'hidden';

}

function closePhoto() {

  if (!lightbox) return;

  lightbox.classList.remove('open');

  lightbox.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';

}

photoItems.forEach(item => {

  item.addEventListener('click', () => {

    const visible = getVisiblePhotos();

    openPhoto(visible.indexOf(item));

  });

});

lightbox?.querySelector('.lightbox-close')
  ?.addEventListener('click', closePhoto);

lightbox?.querySelector('.lightbox-prev')
  ?.addEventListener('click', () => {

    openPhoto(activePhoto - 1);

  });

lightbox?.querySelector('.lightbox-next')
  ?.addEventListener('click', () => {

    openPhoto(activePhoto + 1);

  });

lightbox?.addEventListener('click', event => {

  if (event.target === lightbox) {
    closePhoto();
  }

});

// Keyboard navigation
document.addEventListener('keydown', event => {

  if (!lightbox?.classList.contains('open')) return;

  if (event.key === 'Escape') {
    closePhoto();
  }

  if (event.key === 'ArrowRight') {
    openPhoto(activePhoto + 1);
  }

  if (event.key === 'ArrowLeft') {
    openPhoto(activePhoto - 1);
  }

});


/* ==========================================
   7. MOBILE MENU
========================================== */

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {

  const open = nav.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(open));

  menuToggle.textContent = open ? '×' : '☰';

});

nav?.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.textContent = '☰';

  });

});


/* ==========================================
   8. CONTACT FORM
========================================== */

const contactForm = document.querySelector('#contact-form');

contactForm?.addEventListener('submit', event => {

  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  const t = translations[currentLanguage];

  const subject = encodeURIComponent(t.emailSubject);

  const body = encodeURIComponent(

    `${t.emailName}: ${data.get('name')}
Email: ${data.get('email')}
${t.emailPhone}: ${data.get('phone') || t.emailNotProvided}

${t.emailIdea}:
${data.get('message')}`

  );

  // INSERT THE PHOTOGRAPHER'S REAL EMAIL HERE
  const recipient = 'contato@seudominio.com';

  document.querySelector('#form-feedback').textContent =
    t.formFeedback;

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;

});


/* ==========================================
   9. FOOTER YEAR
========================================== */

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
