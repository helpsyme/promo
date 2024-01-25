
function btnClick() {
    $(".st-perloader").fadeIn();
    let form = document.getElementById('contactform');
    let formData = new FormData(form);

    formData.append('utm_source', getParameterByName('utm_source'));
    formData.append('utm_medium', getParameterByName('utm_medium'));
    formData.append('utm_campaign', getParameterByName('utm_campaign'));
    formData.append('utm_content', getParameterByName('utm_content'));
    formData.append('utm_term', getParameterByName('utm_term'));

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
        url: 'https://script.google.com/macros/s/AKfycby7CnARNQE2opAcDswho5Ue5iaffLxCXl4fSLxRsEtVxNBN1WUT5cxD6gHnG4DDCqk3og/exec',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        timeout: 30000, // Таймаут в миллисекундах (30 секунд)

        success: function (data) {
            
            
            window.location = "https://google.com";
            
        },
        
        error: function(xhr, textStatus, errorThrown) {
        if (textStatus === "timeout") {
            // Превышено время ожидания ответа
            var errorMessage = "Response timed out. Please try again.";
            // Вставляем сообщение об ошибке в элемент с id="message"
            $("#message").html(errorMessage).show();
        } else {
            // Обработка других ошибок, если необходимо
        }
        // hideOverlay();
    }
    })
    $(".st-perloader").fadeOut();
    $("st-perloader-in").delay(150).fadeOut("slow");
}

function getCid() {
        var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
        var raw = (match) ? decodeURIComponent(match[1]) : null;
        if (raw)
        {
                match = raw.match(/(\d+\.\d+)$/);
        }
        var gacid = (match) ? match[1] : null;
        if (gacid)
        {
                return gacid;
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