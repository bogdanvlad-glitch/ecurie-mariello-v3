// Site vitrine sans framework ni dépendance.
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#nav');

  menu?.addEventListener('click', () => {
    const expanded = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(expanded));
  });

  const form = document.querySelector('#contact-form');
  if (!form) return;

  const subject = document.querySelector('#objet');
  const q = new URLSearchParams(window.location.search).get('objet');
  const subjects = {
    activites: 'Des informations sur les activités',
    installations: 'Les installations',
    pension: 'Une pension',
    visite: 'Une visite'
  };
  if (subjects[q]) subject.value = subjects[q];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('nom') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const topic = String(data.get('objet') || 'Une question générale');
    const body = `Bonjour,\n\n${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:steffi015@hotmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
  });
});
