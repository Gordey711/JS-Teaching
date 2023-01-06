/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/


const heading = document.querySelector('.dom-example').classList.add('add-padding'),
      headingParagraph = document.querySelectorAll('p'),
      headingTtitle = document.querySelectorAll('h2');

headingParagraph.forEach(function (p) {
    // p.classList.add('green-text');
    const res = p.classList.toggle('green-text');
    
    if (res == true) {
        p.classList.add('white-text');
    } else if (res == true) {
        p.classList.add('red-text');
    }

    // p.classList.remove('white-text');
    const resOne = p.classList.contains('white-text');

    if (resOne == true) {
        p.classList.add('orange-text');
    } else if (resOne == false) {
        p.classList.add('black-text');
    }
});

headingTtitle.forEach(function (h2) {
    h2.classList.add('red-text');
});

// document.querySelector('.heading-2 green').classList.contains('green');

