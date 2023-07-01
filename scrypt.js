var button = document.querySelector('.customize_button');
var audio = new Audio('https://drive.google.com/file/d/1ZvsZWgnJuxDDMJCjWBjYqqBhrxuzgvg8/view?usp=sharing'); // Укажите путь к звуковому файлу

button.addEventListener('click', function() {
  audio.play();
});
//----------------------------звук



var button = document.querySelector('.customize_button');

button.addEventListener('click', function(e) {
  // Удалить существующий класс анимации
  button.classList.remove('ripple-animation');
  
  // Задержка перед добавлением класса для создания анимации
  setTimeout(function() {
    button.classList.add('ripple-animation');
  }, 10);
});
//-----------------------------волны вокрук predict



// Список слов
// var wordList = ["apple", "banana", "orange", "grape", "lemon"];

// Получаем ссылку на необходимый элемент DOM
var wordContainer = document.getElementById("customize_button_container");
var addWordButton = document.getElementById("customize_button");

// Функция для добавления случайного слова из списка
function addRandomWord() {
  // Получаем случайное слово из списка
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  wordContainer.innerHTML = "";
  // Создаем новый элемент <span> для слова
  var wordSpan = document.createElement("span");
  wordSpan.textContent = randomWord;

  // Добавляем слово в контейнер
  wordContainer.appendChild(wordSpan);
}

// Назначаем обработчик события на кнопку
addWordButton.addEventListener("click", addRandomWord);

//-------------------------------рандомайзер


