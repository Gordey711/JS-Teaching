// Выбор контейнера
const container = document.querySelector('#elementsContainer');
 
// Выбор заголовка
const newHeader = document.createElement('h1');
newHeader.innerText = 'Новый заголовок';

container.append(newHeader);

// Клонирование элементов 

// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// Вставка разметки через строки 

// const htmlExample = '<h2>Ещё один заголовок</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);


// Вставка разметки через шаблонные строки 

const title = 'Текст заголовка';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample);