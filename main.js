const todoList = document.querySelector('#todo-list'),
      todoForm = document.querySelector('#todo-form'),
      todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    // Получаем название задачи из поля ввода
    const taskText = todoInput.value;

    // // Создаём тег li через разметку
    // const li = `<li>${taskText}</li>`;

    // // Добавляем разметку на страницу 
    // todoList.insertAdjacentHTML('beforeend', li);

    /// Создаём тег li с помощью создания элемента
    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    /// Создаём кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    // Добавляем событие по клику
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    });

    /// Добавляем элемент на страницу
    todoList.append(newTask);

    // Очищаем поле ввода 
    todoInput.value = '';

    // Фокус на поле ввода
    todoInput.focus();
}

