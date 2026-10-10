const PRODUCT_PRICE = 'R$ 14,90';
const CONTACT_EMAIL = 'melojonatha037@gmail.com';

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.buy-button').forEach((button) => {
  button.addEventListener('click', () => {
    const toast = document.querySelector('#toast');
    toast.textContent = `O checkout do ${PRODUCT_PRICE} será conectado nesta etapa. Enquanto isso, deixe seu contato abaixo para receber as instruções de compra.`;
    toast.classList.add('show');
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => toast.classList.remove('show'), 5200);
  });
});

const form = document.querySelector('#interestForm');
const status = document.querySelector('#formStatus');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  if (!name || !email) return;
  status.textContent = `Obrigado, ${name.split(' ')[0]}! Seu interesse foi registrado nesta prévia. O contato comercial definitivo será ${CONTACT_EMAIL}.`;
  form.reset();
});

document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('details').forEach((other) => {
        if (other !== item) other.removeAttribute('open');
      });
    }
  });
});
