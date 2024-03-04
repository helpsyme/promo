// Получаем элемент с id "post_content" и его текстовое содержимое
var postContent = document.getElementById("post_content");
var contentHTML = postContent.innerHTML;

// Заменяем все вхождения "консультація психіатра онлайн" на "XXX"
contentHTML = contentHTML.replaceAll("Консультація психіатра", "<a href='https://helpsy.me/'>Консультація психіатра</a>");
contentHTML = contentHTML.replaceAll("Психіатр онлайн", "<a href='https://helpsy.me/'>Психіатр онлайн</a>");
contentHTML = contentHTML.replaceAll("Психіатри онлайн", "<a href='https://helpsy.me/'>Психіатри онлайн</a>");
contentHTML = contentHTML.replaceAll("консультації з психіатром онлайн", "<a href='https://helpsy.me/'>консультації з психіатром онлайн</a>");
contentHTML = contentHTML.replaceAll("Психіатричні консультації онлайн", "<a href='https://helpsy.me/'>Психіатричні консультації онлайн</a>");

// Обновляем текстовое содержимое элемента с замененными данными
postContent.innerHTML = contentHTML;