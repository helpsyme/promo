// Получаем элемент с id "post_content" и его текстовое содержимое
var postContent = document.getElementById("post_content");
var contentHTML = postContent.innerHTML;

// Заменяем все вхождения "консультація психіатра онлайн" на "XXX"
contentHTML = contentHTML.replaceAll("Консультація психіатра", "<a href='https://helpsy.me/'>Консультація психіатра</a>");
contentHTML = contentHTML.replaceAll("Консультація Психіатра Онлайн", "<a href='https://helpsy.me/'>Консультація психіатра онлайн</a>");
contentHTML = contentHTML.replaceAll("консультації психіатра онлайн", "<a href='https://helpsy.me/'>консультації психіатра онлайн</a>");
contentHTML = contentHTML.replaceAll("Психіатр онлайн", "<a href='https://helpsy.me/'>Психіатр онлайн</a>");
contentHTML = contentHTML.replaceAll("Психіатри онлайн", "<a href='https://helpsy.me/'>Психіатри онлайн</a>");
contentHTML = contentHTML.replaceAll("консультації з психіатром онлайн", "<a href='https://helpsy.me/'>консультації з психіатром онлайн</a>");
contentHTML = contentHTML.replaceAll("Психіатричні консультації онлайн", "<a href='https://helpsy.me/'>Психіатричні консультації онлайн</a>");
contentHTML = contentHTML.replaceAll("онлайн-консультацій психіатра", "<a href='https://helpsy.me/'>консультація психіатра онлайн</a>");
contentHTML = contentHTML.replaceAll("Онлайн-консультація психіатра", "<a href='https://helpsy.me/'>Консультація психіатра онлайн</a>");
contentHTML = contentHTML.replaceAll("депресія причини", "<a href='/depression.html'>депресія причини</a>");
contentHTML = contentHTML.replaceAll("депресія симптоми", "<a href='/depression.html'>депресія симптоми</a>");
contentHTML = contentHTML.replaceAll("Депресія", "<a href='/depression.html'>Депресія</a>");
contentHTML = contentHTML.replaceAll("депресія", "<a href='/depression.html'>депресія</a>");
contentHTML = contentHTML.replaceAll("депресії", "<a href='/depression.html'>депресії</a>");

// Обновляем текстовое содержимое элемента с замененными данными
postContent.innerHTML = contentHTML;