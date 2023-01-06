const button = document.querySelector('#button'),
      logo = document.querySelector('#logo');

button.setAttribute('value', 'Удалить');

button.addEventListener('click', function () {
    console.log('Клик!');
    logo.remove();
});

// button.onclick = function () {
//     console.log('Клик!');
//     logo.remove();
// }