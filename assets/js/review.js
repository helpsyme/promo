

$(document).ready(function(){
    const jsonData = [
        {
          "name": "Ігор В.",
          "age": "25 років",
          "issue": "Депресія",
          "review": "Після завершення лікування у психіатра відзначаю помітні поліпшення в своєму емоційному стані. Лікар професійно визначив причини депресії та розробив ефективний та індивідуалізований план терапії. Висловлюю свою вдячність за високий професіоналізм та надану підтримку."
        },
        {
          "name": "Ірина Г.",
          "age": "32 роки",
          "issue": "Тривожно-фобічні розлади",
          "review": "Лікування тривожно-фобічних розладів під наглядом психіатра справилося з ефективністю. Лікар уважно врахував індивідуальні особливості та розробив оптимальний курс терапії. Дякую за підтримку та відновлення контролю над емоціями."
        },
        {
          "name": "Олександр К.",
          "age": "45 років",
          "issue": "Обсесивно-компульсивний розлад (ОКР)",
          "review": "Під час консультацій та лікування від обсесивно-компульсивного розладу психіатр продемонстрував глибоке розуміння ситуації. Застосовані методи та ліки допомогли ефективно відновити стабільність та контроль над розладом. Висловлюю вдячність за важливий внесок у моє психічне здоров'я."
        },
        {
          "name": "Ольга М.",
          "age": "29 років",
          "issue": "Розлади харчової поведінки",
          "review": "Лікування розладів харчування під керівництвом психіатра виявилося дієвим та комплексним. Лікар визначив основні проблеми та розробив індивідуальний план втручання. Дякую за професійний підхід та результативну практику."
        },
        {
          "name": "Олег І.",
          "age": "37 років",
          "issue": "Депресія",
          "review": "Психіатрське лікування ефективно спрямоване на вирішення причин депресії. Лікар детально досліджував мій стан та призначив адекватні методики, які привели до помітних позитивних змін у моєму емоційному стані."
        },
        {
          "name": "Олена П.",
          "age": "23 роки",
          "issue": "Тривожно-фобічні розлади",
          "review": "Лікування тривожно-фобічних розладів під керівництвом психіатра було орієнтоване на вирішення основних проблем. Застосовані методи та ліки допомогли мені знаходити шляхи подолання тривоги та відновлення нормального функціонування."
        },
        {
          "name": "Олексій С.",
          "age": "42 роки",
          "issue": "Обсесивно-компульсивний розлад (ОКР)",
          "review": "Лікування від обсесивно-компульсивного розладу виявилося успішним завдяки компетентному втручанню психіатра. Лікар ураховував індивідуальні особливості та розробив план терапії, що сприяв ефективному вирішенню проблем."
        },
        {
          "name": "Оксана Т.",
          "age": "31 рік",
          "issue": "Розлади харчової поведінки",
          "review": "Під керівництвом психіатра лікування розладів харчування було спрямоване на пошук коренів проблеми. Лікар враховував мої індивідуальні особливості та розробив інтегрований план втручання. Результат вражає ефективністю та стійкістю покращень."
        },
        {
          "name": "Олександр В.",
          "age": "27 років",
          "issue": "Депресія",
          "review": "Лікування від депресії під наглядом психіатра було складним та глибоким. Лікар правильно визначив причини та надавав засоби для подолання проблеми. Дякую за важливий внесок у моє емоційне здоров'я."
        },
        {
          "name": "Ольга П.",
          "age": "49 років",
          "issue": "Тривожно-фобічні розлади",
          "review": "Лікування від тривожно-фобічних розладів під керівництвом психіатра стало ключовим етапом в моєму житті. Лікар виявив глибоке розуміння моїх проблем та розробив ефективний план терапії. Висловлюю подяку за професіоналізм та турботу."
        },
        {
          "name": "Олена Д.",
          "age": "35 років",
          "issue": "Обсесивно-компульсивний розлад (ОКР)",
          "review": "Психіатр виявився ефективним стратегом у боротьбі з обсесивно-компульсивним розладом. Лікування було спрямоване на кореневе вирішення проблеми. Дякую за компетентність та терпіння."
        },
        {
          "name": "Олександра Л.",
          "age": "22 роки",
          "issue": "Розлади харчової поведінки",
          "review": "Лікування розладів харчування під керівництвом психіатра допомогло мені змінити ставлення до їжі та відновити здоровий спосіб харчування. Лікар виявив глибоке розуміння моїх потреб та розробив індивідуальний план лікування."
        }
      ];

      function createTestimonialElements(data) {
        return data.map(item => {
            return `<div class="slick-slide-in">
                        <div class="st-testimonial st-style1 wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            <div class="st-testimonial-info">
                                <div class="st-testimonial-img"><img src="assets/img/avatar4.png" alt="avatar3"></div>
                                <div class="st-testimonial-meta">
                                    <h4 class="st-testimonial-name">${item.name} | ${item.age}</h4>
                                    <div class="st-testimonial-designation">${item.issue}</div>
                                </div>
                            </div>
                            <div class="st-testimonial-text">${item.review}</div>
                            <div class="st-quote"><i class="fas fa-quote-right"></i></div>
                        </div>
                    </div><!-- .slick-slide-in -->`;
        });
    }

    // function appendTestimonials() {
    //     const slickWrapper = document.querySelector('.reviews');
    //     const testimonialElements = createTestimonialElements(jsonData);
    
    //     slickWrapper.innerHTML = testimonialElements.join('');
    
    //     // Инициализация Slick Slider после добавления отзывов
    //     $('.slick-container').slick({
    //         // Добавьте ваши опции Slick Slider здесь
    //     });
    // }

    appendTestimonials();
  });

