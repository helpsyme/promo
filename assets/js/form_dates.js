function generateDateOptions() {
    const selectElement = document.getElementById('udate');
    
    // Получаем текущую дату
    const currentDate = new Date();
    
    // Очищаем старые опции, если они есть
    selectElement.innerHTML = '<option></option>';

    // Добавляем текущую дату и следующие 6 дней в выпадающий список
    for (let i = 0; i <= 6; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        
        // Форматируем дату в нужном формате (дд/мм/гг)
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear().toString(); // Берём последние 2 цифры года
        const formattedDate = `${day}.${month}.${year}`;

        // Создаём опцию для выпадающего списка
        const option = document.createElement('option');
        option.value = formattedDate;
        option.textContent = formattedDate;
        
        // Добавляем опцию в select
        selectElement.appendChild(option);
    }
    }

    // Запускаем функцию при загрузке страницы
    window.onload = generateDateOptions;
