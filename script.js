const PRODUCT_PRICE = 'R$ 14,90';
const CONTACT_EMAIL = 'melojonatha037@gmail.com';
const WHATSAPP_NUMBER = '5543996482559';

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
  const whatsapp = String(data.get('whatsapp') || '').trim();
  if (!name || !email || !whatsapp) return;
  const message = String(data.get('message') || '').trim() || 'Quero comprar o ebook Engenharia de Software — Do Zero à Prática.';
  const text = `Olá! Tenho interesse em comprar o ebook por R$ 14,90.\n\nNome: ${name}\nE-mail: ${email}\nWhatsApp: ${whatsapp}\n\nMensagem: ${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  status.textContent = 'O WhatsApp foi aberto com seu pedido preenchido. Agora é só tocar em Enviar.';
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
