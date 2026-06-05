const burger = document.querySelector('.burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-menu a, .nav-links a, .top-links a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('active');
      });
    });

const contactForm = document.getElementById('contactForm');
const sendButton = document.querySelector('.send-button');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  sendButton.classList.add('loading');
  sendButton.disabled = true;

  // 👉 данные формы
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const telegram = document.querySelector('input[name="telegram"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // 👉 Telegram bot данные
  const token = "8558678225:AAFKUAY2MBLo4nSu5O5S4ghGp_AWHTHPGok";
  const chat_id = "5631587994";

  const text =
`📩 Новая заявка
👤 Имя: ${name}
📧 Email: ${email}
💬 Telegram: ${telegram || "не указан"}
📞 Телефон: ${phone || "не указан"}
📝 Сообщение: ${message}`;

  const url =
  `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });

  // 👉 твоя анимация (НЕ ТРОГАЕМ ЛОГИКУ)
  setTimeout(() => {
    sendButton.classList.remove('loading');
    sendButton.disabled = false;
    sendButton.textContent = 'Сообщение отправлено';
  }, 1300);
});