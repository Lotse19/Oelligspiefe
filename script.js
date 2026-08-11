const button = document.querySelector('.menu');
const navigation = document.querySelector('#links');

if (button && navigation) {
  button.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('locked', open);
  });

  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('locked');
  }));
}

document.querySelectorAll('#year, .auto-year').forEach(element => {
  element.textContent = new Date().getFullYear();
});

const reveals = document.querySelectorAll('.reveal');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  reveals.forEach(element => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .1 });
  reveals.forEach(element => observer.observe(element));
}

// Blendet den Menüpunkt des aktuell sichtbaren Bereichs ohne Platzhalterlücke aus.
const menuLinks = [...document.querySelectorAll('#links a')];
const currentFile = location.pathname.split('/').pop() || 'index.html';
const trackedSections = menuLinks.map(link => {
  const url = new URL(link.href, location.href);
  const linkFile = url.pathname.split('/').pop() || 'index.html';
  if (linkFile !== currentFile || !url.hash) return null;
  const section = document.querySelector(url.hash);
  return section ? { link, section } : null;
}).filter(Boolean);

const setCurrentMenuItem = activeLink => {
  menuLinks.forEach(link => link.classList.toggle('is-current', link === activeLink));
};

if (trackedSections.length) {
  const updateCurrentSection = () => {
    const marker = window.scrollY + Math.min(220, window.innerHeight * .32);
    let current = null;
    trackedSections.forEach(item => {
      const itemTop = item.section.offsetTop;
      if (itemTop <= marker && (!current || itemTop > current.section.offsetTop)) {
        current = item;
      }
    });
    if (!current) {
      current = [...trackedSections].sort((a, b) => a.section.offsetTop - b.section.offsetTop)[0];
    }
    setCurrentMenuItem(current.link);
  };
  updateCurrentSection();
  addEventListener('scroll', updateCurrentSection, { passive: true });
  addEventListener('resize', updateCurrentSection);
}
