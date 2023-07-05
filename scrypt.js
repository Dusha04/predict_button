let button = document.querySelector('.customize_button');
let audio = new Audio('https://drive.google.com/file/d/1ZvsZWgnJuxDDMJCjWBjYqqBhrxuzgvg8/view?usp=sharing'); // Укажите путь к звуковому файлу

button.addEventListener('click', function() {
  audio.play();
});
//----------------------------звук



 button = document.querySelector('.customize_button');

button.addEventListener('click', function(e) {
  // Удалить существующий класс анимации
  button.classList.remove('ripple-animation');
  
  // Задержка перед добавлением класса для создания анимации
  setTimeout(function() {
    button.classList.add('ripple-animation');
  }, 10);
});
//-----------------------------волны вокрук predict



// Получаем ссылку на необходимый элемент DOM
let wordContainer = document.getElementById("customize_button_container");
let addWordButton = document.getElementById("customize_button");
let historyContainer = document.getElementById("history_container");
// Функция для добавления случайного слова из списка
function addRandomWord() {
  // Получаем случайное слово из списка
  let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  wordContainer.innerHTML = "";
  // Создаем новый элемент <span> для слова
  var wordSpan = document.createElement("span");
  wordSpan.textContent = randomWord;

  // Добавляем слово в контейнер
  wordContainer.appendChild(wordSpan);
  // Добавляем слово в историю
  let historyItem = document.createElement("span");
  historyItem.textContent = randomWord;
  historyContainer.appendChild(historyItem);
  historyContainer.appendChild(document.createElement("br"));
}

// Назначаем обработчик события на кнопку
addWordButton.addEventListener("click", addRandomWord);

//-------------------------------рандомайзер


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
//---------------------------------история