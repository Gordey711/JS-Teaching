const button = document.querySelector('#button'),
      logo = document.querySelector('#logo');

button.setAttribute('value', 'Удалить изображение');

button.addEventListener('click', function () {
    console.log('Клик на удаление!');
    logo.remove();

    button.setAttribute('value', 'Востановить узображение');
});




// button.onclick = function () {
//     console.log('Клик!');
//     logo.remove();
// }