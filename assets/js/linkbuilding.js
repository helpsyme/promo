// Получаем элемент с id "post_content" и его текстовое содержимое
var postContent = document.getElementById("post_content");
var contentHTML = postContent.innerHTML;

// Заменяем все вхождения "консультація психіатра онлайн" на "XXX"
contentHTML = contentHTML.replaceAll("Консультація психіатра", "<a href='https://helpsy.me/'>Консультація психіатра</a>");

// Обновляем текстовое содержимое элемента с замененными данными
postContent.innerHTML = contentHTML;