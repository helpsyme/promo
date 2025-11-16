function validateForm() {
    // Получить элементы label
    var unameLabel = document.querySelector('label[for="uname"]');
    var uemailLabel = document.querySelector('label[for="uemail"]');
    var unumberLabel = document.querySelector('label[for="unumber"]');
    var udateLabel = document.querySelector('label[for="udate"]');
    var udepartmentLabel = document.querySelector('label[for="udepartment"]');
    var udoctorLabel = document.querySelector('label[for="udoctor"]');

    // Сбросить предыдущие классы ошибок
    unameLabel.classList.remove('error');
    uemailLabel.classList.remove('error');
    unumberLabel.classList.remove('error');
    udateLabel.classList.remove('error');
    udepartmentLabel.classList.remove('error');
    udoctorLabel.classList.remove('error');

    // Проверка каждого поля и добавление класса ошибки при необходимости
    if (uname.value === '') {
        unameLabel.classList.add('error');
    }

    if (uemail.value === '') {
        uemailLabel.classList.add('error');
    }

    if (unumber.value === '') {
        unumberLabel.classList.add('error');
    }

    if (udate.value === '') {
        udateLabel.classList.add('error');
    }

    if (udepartment.value === '') {
        udepartmentLabel.classList.add('error');
    }

    if (udoctor.value === '') {
        udoctorLabel.classList.add('error');
    }

    // Другие проверки, если необходимо

    if (uname.value === '' || uemail.value === '' || unumber.value === '' || udate.value === '' || udepartment.value === '' || udoctor.value === '') {
        // Если хотя бы одно из обязательных полей не заполнено, покажите сообщение об ошибке
        document.getElementById('alert').innerHTML = 'Заповніть всі обов\'язкові поля.';
        document.getElementById('alert').classList.add('show'); // Показать сообщение
        return false; // Прервать отправку формы
    }

    return true; // Продолжить отправку формы
}

// ?utm_source=utm_source_test&utm_medium=utm_medium_test&utm_campaign=utm_campaign_test&utm_content=utm_content_test&utm_term=utm_term_test&gclid=gclid_test
function btnClick() {
    // Перед отправкой формы вызовите функцию validateForm
    if (validateForm()) {
        
        $(".st-perloader").fadeIn();
    let form = document.getElementById('contactform');
    let formData = new FormData(form);

    // formData.append('utm_source', getParameterByName('utm_source'));
    // formData.append('utm_medium', getParameterByName('utm_medium'));
    // formData.append('utm_campaign', getParameterByName('utm_campaign'));
    // formData.append('utm_content', getParameterByName('utm_content'));
    // formData.append('utm_term', getParameterByName('utm_term'));
    // formData.append('gclid', getParameterByName('gclid'));
    
    var storedParamsJSON = localStorage.getItem("pageParams");
    var storedParams = JSON.parse(storedParamsJSON) || {};

    formData.append('utm_source', storedParams['utm_source'] || '');
    formData.append('utm_medium', storedParams['utm_medium'] || '');
    formData.append('utm_campaign', storedParams['utm_campaign'] || '');
    formData.append('utm_content', storedParams['utm_content'] || '');
    formData.append('utm_term', storedParams['utm_term'] || '');
    formData.append('gclid', storedParams['gclid'] || '');

    // Устанавливаем значения sub_1 до sub_6 в 'none'
    for (var i = 1; i <= 6; i++) {
        formData.append('sub_' + i, 'none');
    }

    formData.append('client_id', getCid())
    
    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    // }
    // AJAX
    $.ajax({
        crossDomain: true,
        url: 'https://script.google.com/macros/s/AKfycbwebTh9LlEn0uul-CCPlI0LYugs8vmXvhaq-k-88EMGj6RRNASZAbS_SwElfhJ5W2ubwA/exec',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        timeout: 30000, // Таймаут в миллисекундах (30 секунд)
        

        success: function (data) {
            $(".st-perloader").fadeOut();
            $("st-perloader-in").delay(150).fadeOut("slow");
            console.log(data.status);
            var errorMessage = "Заявку прийнято!";
            $("#alert").html('<strong>Повідомлення:</strong> ' + errorMessage + '<button type="button" class="btn-close" onclick="closealertwindow()"></button>').removeClass("fade").addClass("show");
        
            window.location = "thank-you-page.html";
        },
        
        error: function(xhr, textStatus, errorThrown) {
            $(".st-perloader").fadeOut();
            $("st-perloader-in").delay(150).fadeOut("slow");
            console.error(xhr.status, xhr.statusText, textStatus, errorThrown);
            
            if (textStatus === "timeout") {
                // Превышено время ожидания ответа
                var errorMessage = "Час очікування відповіді минув. Будь ласка спробуйте ще раз.";
                $("#alert").html('<strong>Помилка:</strong> ' + errorMessage + '<button type="button" class="btn-close" onclick="closealertwindow()"></button>').removeClass("fade").addClass("show");
            } else {
                var errorMessage = "Щось пішло не так під час відправлення форми. Будь ласка, спробуйте ще раз.";
                $("#alert").html('<strong>Помилка:</strong> ' + errorMessage + '<button type="button" class="btn-close" onclick="closealertwindow()"></button>').removeClass("fade").addClass("show");
            }
            // hideOverlay();
        }
    });
    }
}

function getCid() {
    var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
    var raw = (match) ? decodeURIComponent(match[1]) : null;
    if (raw) {
        return raw;
    }
}

function getParameterByName(name, url) {
if (!url) url = window.location.href;
name = name.replace(/[\[\]]/g, "\\$&");
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
if (!results) return null;
if (!results[2]) return '';
return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function closealertwindow() {
$("#alert").removeClass("show");
}