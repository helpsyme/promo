// Функция для отправки данных на API без ожидания ответа
function sendDataToAPI(data) {
// Замените URL_API на URL вашего внешнего API
const apiUrl = 'https://script.google.com/macros/s/AKfycbx0zdYoY29UB9gAJ79ZX4rDiStxBHsNGZTpOjpVk2xnNtuOARhffEbOGnoVs7RzgCOtiA/exec';

// Опции запроса
const options = {
    method: 'POST',
        headers: {
            // 'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
};

// Отправка данных на API
fetch(apiUrl, options)
    .then(response => {
    if (response.ok) {
        console.log('Данные успешно отправлены на API');
    } else {
        console.error('Произошла ошибка при отправке данных на API');
    }
    })
    .catch(error => {
    console.error('Произошла ошибка при выполнении запроса:', error);
    });
}

// Функция для получения IP-адреса и данных о геолокации
function getIpAndGeoLocation() {
return new Promise((resolve, reject) => {
    // URL сервиса для получения IP-адреса
    const ipServiceUrl = 'https://api.ipify.org?format=json';

    // Отправка запроса на получение IP-адреса
    fetch(ipServiceUrl)
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;
        // URL сервиса для получения данных о геолокации
        const geoLocationUrl = `http://ip-api.com/json/${ipAddress}`;

        // Отправка запроса на получение данных о геолокации
        fetch(geoLocationUrl)
        .then(response => response.json())
        .then(geoData => {
            resolve({ ipAddress, geoData }); // Возвращаем IP-адрес и данные о геолокации через resolve
        })
        .catch(error => {
            reject(error); // Отклоняем промис при возникновении ошибки
        });
    })
    .catch(error => {
        reject(error); // Отклоняем промис при возникновении ошибки
    });
});
}

// Получение отпечатка браузера с помощью FingerprintJS
async function getBrowserFingerprint() {
    try {
      // Создание экземпляра FingerprintJS
      const components = await Fingerprint2.getPromise();
  
      // Получение отпечатка браузера
      const fingerprint = Fingerprint2.x64hash128(components.map(pair => pair.value).join(), 31);
      return fingerprint;
    } catch (error) {
      throw new Error('Ошибка при получении отпечатка браузера: ' + error.message);
    }
  }

// Вызов функции getIpAndGeoLocation для получения IP-адреса и данных о геолокации
getIpAndGeoLocation()
.then(({ ipAddress, geoData }) => {
    console.log('Полученный IP-адрес:', ipAddress);
    console.log('Данные о геолокации:', geoData);
    const urlParams = new URLSearchParams(window.location.search);
    // Получение отпечатка браузера
    getBrowserFingerprint()
    .then(fingerprint => {
        console.log('Отпечаток браузера:', fingerprint);

        // Создание объекта visitData с учетом IP-адреса, данных о геолокации и отпечатка браузера
        const visitData = {
            timestamp: new Date().toISOString(),
            pageUrl: window.location.href,
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            platform: navigator.platform,
            cookiesEnabled: navigator.cookieEnabled,
            timeZoneOffset: new Date().getTimezoneOffset(),
            ipAddress: ipAddress,
            // Данные о геолокации
            country: geoData.country || '',
            countryCode: geoData.countryCode || '',
            region: geoData.region || '',
            regionName: geoData.regionName || '',
            city: geoData.city || '',
            zip: geoData.zip || '',
            latitude: geoData.lat || 0,
            longitude: geoData.lon || 0,
            timezone: geoData.timezone || '',
            isp: geoData.isp || '',
            org: geoData.org || '',
            as: geoData.as || '',
            // query: geoData.query || '',
            // Отпечаток браузера
            browserFingerprint: fingerprint,
            // Дополнительные данные можно добавить по необходимости
            utm_source: urlParams.get('utm_source') || '',
            utm_medium: urlParams.get('utm_medium') || '',
            utm_campaign: urlParams.get('utm_campaign') || '',
            utm_term: urlParams.get('utm_term') || '',
            utm_content: urlParams.get('utm_content') || '',
        };
        console.log('visitData:', visitData);
        // Отправка данных на API с полученными данными
        sendDataToAPI(visitData);
    })
    .catch(error => {
        console.error('Произошла ошибка при получении отпечатка браузера:', error);
    });
})
.catch(error => {
    console.error('Произошла ошибка при получении IP-адреса или данных о геолокации:', error);
});