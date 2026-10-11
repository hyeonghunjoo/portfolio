const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
  siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
    siteNav.classList.remove('is-open');
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`포트폴리오 문의 - ${data.get('name')}`);
  const body = encodeURIComponent(`이름: ${data.get('name')}\n이메일: ${data.get('email')}\n\n${data.get('message')}`);
  document.querySelector('#form-note').textContent = '기본 메일 앱에서 메시지를 확인하고 전송해주세요.';
  window.location.href = `mailto:hello@jin.design?subject=${subject}&body=${body}`;
});
