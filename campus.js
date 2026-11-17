const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}

menu.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements = [...document.querySelectorAll('.campus-reveal')];

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js-motion');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const header = document.querySelector('.site-header');
let progressFrame;

function updatePageProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  header.style.setProperty('--page-progress', `${Math.min(100, Math.max(0, progress))}%`);
  progressFrame = undefined;
}

window.addEventListener('scroll', () => {
  if (progressFrame) return;
  progressFrame = requestAnimationFrame(updatePageProgress);
}, { passive: true });

updatePageProgress();

async function copyAddress(button) {
  const address = button.dataset.address;

  try {
    await navigator.clipboard.writeText(address);
  } catch {
    const helper = document.createElement('textarea');
    helper.value = address;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
  }

  button.textContent = '✓';
  button.dataset.tooltip = 'Copied';
  window.setTimeout(() => {
    button.textContent = '⧉';
    button.dataset.tooltip = 'Copy address';
  }, 1600);
}

document.querySelectorAll('.copy-address').forEach((button) => {
  button.addEventListener('click', () => copyAddress(button));
});
