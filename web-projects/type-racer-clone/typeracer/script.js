const title = document.getElementById('title');
const gameText = document.getElementById('gameText');
const textInput = document.getElementById('textInput');
const carEl = document.getElementById('car');

const startBtn = document.getElementById('startBtn');
const rollBtn = document.getElementById('rollBtn');

const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');

const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

textInput.onpaste = (e) => e.preventDefault(); // prevents pasting into input
textInput.disabled = true;

let { songName, artist, lyrics, link } = getRandomSong();

let wordIndex; // index of the word you are typing, also tracks the number of words you have completed
let charIndex;
let inputLength;

let words;
let chars;

let correctPressCount;
let incorrectPressCount;

let timer;
let seconds;

prepareGame();

function prepareGame() {
  charIndex = 0;
  gameText.innerHTML = lyrics
    .trim()
    .split('\n')
    .map((line) =>
      line
        .trim()
        .split(' ')
        .map(
          (word) =>
            `<span class="word">${word
              .trim()
              .split('')
              .map(
                (char) =>
                  `<span class="char" index="${charIndex++}">${char}</span>`
              )
              .join(
                ''
              )}<span class="char" index="${charIndex++}"> </span></span>`
        )
        .join('')
    )
    .join('<br/>');

  words = gameText.querySelectorAll('.word');
  chars = gameText.querySelectorAll('.char');

  wordIndex = 0;
  charIndex = 0;
  inputLength = 0;
  correctPressCount = 0;
  incorrectPressCount = 0;

  toggleUnderLine(words[wordIndex]);
  chars[charIndex].classList.toggle('active');

  // Reset DOM
  wpmEl.innerText = '0';
  accuracyEl.innerText = 'N/A';
  minuteEl.innerText = '0';
  secondEl.innerText = '00';
}

startBtn.addEventListener('click', () => {
  prepareGame();
  startGame();
});

rollBtn.addEventListener('click', () => {
  ({ songName, artist, lyrics, link } = getRandomSong());
  prepareGame();
});

textInput.addEventListener('keydown', (e) => {
  setTimeout(() => {
    // Add space if enter is pressed to improve UX
    if (e.code === 'Enter') textInput.value += ' ';
    let word = words[wordIndex];
    updateAccuracy();

    // check if word is written
    if (
      word.textContent === textInput.value.substring(0, word.textContent.length)
    ) {
      textInput.value = textInput.value.substring(word.textContent.length);
      word.classList = 'word done';
      toggleUnderLine(word);
      if (++wordIndex === words.length) {
        stopGame();
      } else {
        word = words[wordIndex];
        toggleUnderLine(word);
      }
    } else {
      updateWord(word);
    }
    updateCharIndex();
  }, 1);
});

function startGame() {
  startBtn.disabled = true;
  rollBtn.style.display = 'none';
  let count = 3;

  startBtn.innerText = count;
  title.innerText = `Start typing in ${count}`;
  carEl.style.transform = `translateX(0%)`;
  let interval = setInterval(() => {
    if (count > 1) {
      startBtn.innerText = --count;
      title.innerText = `Start typing in ${count}`;
    } else {
      clearInterval(interval);
      textInput.disabled = false;
      title.innerText = 'Type Racer';
      startBtn.innerText = 'Type!';
      textInput.focus();
      startTimer();
    }
  }, 1000);
}

function startTimer() {
  seconds = 0;
  timer = setInterval(updateClock, 1000);
}

function updateClock() {
  seconds++;
  const second = seconds % 60;

  minuteEl.innerText = parseInt(seconds / 60);
  secondEl.innerText = second < 10 ? `0${second}` : second;

  console.log(wordIndex/words.length * 100);
  carEl.style.transform = `translateX(${parseInt(wordIndex/words.length * 100)}%)`

  wpmEl.innerText = Math.round((wordIndex * 60) / seconds); // word per minute
  if (correctPressCount + incorrectPressCount > 0) {
    accuracyEl.innerText =
      parseInt(
        (correctPressCount * 100) / (correctPressCount + incorrectPressCount)
      ) + '%';
  }
}

function stopGame() {
  seconds--;
  updateClock();
  clearInterval(timer);
  alert(
    `Your score is ${
      (100 + Number(wpmEl.innerText)) *
      Number(accuracyEl.innerText.substring(0, 2))
    }`
  );
  textInput.disabled = true;
  startBtn.disabled = false;
  startBtn.innerText = 'Start';
  rollBtn.style.display = 'inline-block';
}

function toggleUnderLine(word) {
  // You need to underline each character instead of the whole word to not underline the spaces
  word
    .querySelectorAll('.char')
    .forEach(
      (char) => char.innerText === ' ' || char.classList.toggle('underline')
    );
}

function updateCharIndex() {
  try {
    chars[charIndex].classList.remove('active');

    charIndex =
      parseInt(words[wordIndex].querySelector('.char').getAttribute('index')) +
      textInput.value.length;
    chars[charIndex].classList.add('active');
  } catch (error) {
    // do nothing
  }
}

function updateWord(word) {
  gameText
    .querySelectorAll('.incorrect')
    .forEach((char) => char.classList.remove('incorrect'));
  gameText
    .querySelectorAll('.correct')
    .forEach((char) => char.classList.remove('correct'));
  const n = textInput.value.length;
  const start = parseInt(word.querySelector('.char').getAttribute('index'));
  let flag = true;
  for (let i = 0; i < n; i++) {
    const char = chars[start + i];
    if (flag && textInput.value[i] === char.innerText) {
      char.classList.add('correct');
    } else {
      flag = false;
      char.classList.add('incorrect');
    }
  }
}

function updateAccuracy() {
  if (inputLength < textInput.value.length) {
    // a new character is typed
    if (
      charIndex < chars.length &&
      chars[charIndex].innerText === textInput.value[textInput.value.length - 1]
    ) {
      correctPressCount++;
    } else {
      incorrectPressCount++;
    }
  }
  inputLength = textInput.value.length;
}

function getRandomSong() {
  // return songs[2];
  return songs[Math.floor(Math.random() * songs.length)];
}
