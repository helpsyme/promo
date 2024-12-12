
// document.addEventListener('DOMContentLoaded', function () {

//     // Получаем текущую дату
//     const currentDate = new Date();

//     // Получаем дату завтра
//     const tomorrowDate = new Date(currentDate);
//     tomorrowDate.setDate(tomorrowDate.getDate() + 1);

//     // Форматируем дату в виде "день.месяц.год"
//     const formattedTomorrowDate = tomorrowDate.toLocaleDateString('ru-RU');

//     // Функция для открытия SweetAlert2 через 5 секунд
//     function openSweetAlert() {
//     // Создаем сообщение о скидке с использованием HTML
//     const discountMessage = `
//             <p><strong>Только сегодня на онлайн-консультации действует Акция!</strong></p><br>
//             <p style="color:#19B3AC">Онлайн Консультация Врача Психиатра: <h4><strike><span style="color:#19B3AC">1500<span></strike> 750 грн</h4><br>
//             <h3 style="color:red;"><b>Акция действует до ${formattedTomorrowDate}</b></h3>
//             `;
//     Swal.fire({
//         title: 'Специальное предложение!',
//         html: discountMessage,
//         icon: 'info',
//         iconColor: '#19B3AC',
//         animation: true,
//         showCancelButton: false,
//         confirmButtonText: 'Понятно',
//         cancelButtonText: 'Ознакомлен',
//         confirmButtonColor: '#19B3AC',
//         cancelButtonColor: '#686868',
//         customClass: {
//         confirmButton: 'promo_popup_btn_okay',
//         cancelButton: 'promo_popup_cancel_btn'
//         },
//         preConfirm: () => {
//         // Закрываем окно SweetAlert2
//         Swal.close();
//         }
//     });
//     }

//     // Вызываем функцию для открытия SweetAlert2 через 5 секунд
//     setTimeout(openSweetAlert, 5000);
// });
