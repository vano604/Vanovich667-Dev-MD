let menu = document.getElementById("menu");
let burger = document.getElementById("burger");
let overlay = document.getElementById("overlay");

function openMenu(){

    menu.classList.toggle("open");
    burger.classList.toggle("activated");
    overlay.classList.toggle("show");

}

overlay.onclick = function(){

    menu.classList.remove("open");
    burger.classList.remove("activated");
    overlay.classList.remove("show");

}


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telegram = document.getElementById("telegram").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let token = "8558678225:AAFKUAY2MBLo4nSu5O5S4ghGp_AWHTHPGok";
    let chat_id = "5631587994";

    let text = `📩 Новая заявка
👤 Имя: ${name}
📧 Email: ${email}
💬 Telegram: ${telegram || "не указан"}
📞 Телефон: ${phone || "не указан"}
📝 Сообщение: ${message}`;

    let url =
`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                alert("Сообщение отправлено!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Ошибка Telegram API");
                console.log(data);
            }
        })
        .catch(err => {
            alert("Ошибка отправки");
            console.log(err);
        });
});