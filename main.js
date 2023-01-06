const inputText = document.querySelector('#input-text'),
      textBlock = document.querySelector('#text-block');


// inputText.addEventListener('input', () => {
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// })

inputText.addEventListener('input', inputHandler);

function inputHandler () {
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
}