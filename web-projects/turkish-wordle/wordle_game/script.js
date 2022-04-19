const resetBtn = document.getElementById('resetBtn');
const guessEl = document.getElementById('guess');
const errorEl = document.getElementById('error');
const keyElements = document.querySelectorAll('.key');

const guessCount = 6;
const wordleLength = 5;
const alphabetSet = new Set(alphabet);
const wordleSet = new Set(wordleWords);
const squares = [];
const keyMap = {};
const animationSpeed = 300;

let wordleWord;
let guess; // number of guess attempts
let wordIdx;
let gameOver;

function initializeGame() {
  for (let i = 0; i < guessCount; i++) {
    const row = [];
    const rowEl = document.createElement('div');
    rowEl.className = 'row';
    for (let j = 0; j < wordleLength; j++) {
      const squareEl = document.createElement('div');
      squareEl.className = 'square';
      row.push(squareEl);
      rowEl.appendChild(squareEl);
    }
    squares.push(row);
    guessEl.appendChild(rowEl);
  }

  resetGame();
}

function resetGame() {
  wordleWord = wordleWords[Math.floor(Math.random() * wordleWords.length)];
  guess = 0;
  wordIdx = 0;
  gameOver = false;

  squares.forEach((row) =>
    row.forEach((square) => {
      square.className = 'square';
      square.innerText = '';
    })
  );

  keyElements.forEach((key) => (key.className = 'key'));
}

function enterCharacter(char) {
  if (gameOver || wordIdx >= wordleLength || !isTurkishCharacter(char)) return;
  char = char.toUpperCase();

  const square = squares[guess][wordIdx++];
  square.innerText = char;
  square.classList.add('active');
  square.classList.add('enlarge');
  setTimeout(() => square.classList.remove('enlarge'), animationSpeed);
  keyMap[char].classList.add('shrink');
}

function removeCharacter() {
  if (gameOver || wordIdx === 0) return;
  const square = squares[guess][--wordIdx];
  square.innerText = '';
  square.classList.remove('active');
}

function enterWord() {
  if (wordIdx < wordleLength) {
    showMessage('Not enough words!');
    return;
  }
  word = '';
  squares[guess].forEach((square) => (word += square.innerText));
  if (!wordleSet.has(word)) {
    showMessage(word + ' is not a word!');
    return;
  }

  checkWord(word);
  guess++;
  wordIdx = 0;
  if (word === wordleWord) {
    // correctly guessed
    showMessage('You won!', 5000);
    gameOver = true;
  } else if (guess == guessCount) {
    // out of guesses, lost
    showMessage(`You lost! The correct word was ${wordleWord}.`, 6000);
    gameOver = true;
  }
}

function checkWord(word) {
  const freqTable = {};
  const yellowSquares = [];
  for (let i = 0; i < wordleLength; i++) {
    const square = squares[guess][i];
    const char = word[i];
    const corr = wordleWord[i];

    freqTable[corr] = freqTable[corr] === undefined ? 1 : freqTable[corr] + 1;
    if (char === corr) {
      square.className = 'square green';
      changeKeyColor(char, 'green');
      freqTable[char] = freqTable[char] - 1;
    } else if (wordleWord.includes(char)) {
      yellowSquares.push(square); // potentially yellow or grey
    } else {
      square.className = 'square grey';
      changeKeyColor(char, 'grey');
    }
  }
  yellowSquares.forEach((square) => {
    const char = square.innerText;
    if (freqTable[char] > 0) {
      freqTable[char] = freqTable[char] - 1;
      square.className = 'square yellow';
      changeKeyColor(char, 'yellow');
    } else {
      square.className = 'square grey';
      changeKeyColor(char, 'grey');
    }
  });
}

function changeKeyColor(char, color) {
  const keyEl = keyMap[char];
  if (color === 'green') {
    keyEl.className = 'key green';
  } else if (color === 'yellow' && !keyEl.classList.contains('green')) {
    keyEl.className = 'key yellow';
  } else if (
    color === 'grey' &&
    !keyEl.classList.contains('green') &&
    !keyEl.classList.contains('yellow')
  ) {
    keyEl.className = 'key grey';
  }
}

function showMessage(text, duration = 2000) {
  errorEl.innerText = text;
  errorEl.classList.remove('hidden');
  setTimeout(() => errorEl.classList.add('hidden'), duration);
}

function keyClicked(e) {
  let text = e.currentTarget.innerText;
  enterCharacter(text);
}

function keyPressed(e) {
  switch (e.key) {
    case 'Enter':
      enterWord();
      break;
    case 'Backspace':
      removeCharacter();
      break;
    case 'i':
      enterCharacter('İ');
      break;
    default:
      enterCharacter(e.key);
  }
}

function keyUp(e) {
  const char = e.key === 'i' ? 'İ' : e.key.toUpperCase();
  if (keyMap[char] === undefined) return;
  keyMap[char].classList.remove('shrink');
}

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyUp);
keyElements.forEach((key) => {
  key.addEventListener('click', keyClicked);
  keyMap[key.innerText] = key;
});
enterBtn.addEventListener('click', enterWord);
backspaceBtn.addEventListener('click', removeCharacter);
resetBtn.addEventListener('click', resetGame);

function isTurkishCharacter(char) {
  return (
    (char.length === 1 && alphabetSet.has(char.toLowerCase())) || char === 'I'
  );
}

initializeGame();

// console.log('ı', 'i');
// console.log('ı' === 'i');
// console.log('ı'.toUpperCase() === 'i'.toUpperCase());
// console.log('İ', 'I');
// console.log('İ' === 'I');
// console.log('İ'.toLowerCase(), 'I'.toLowerCase());
// console.log('İ'.toLowerCase() === 'I'.toLowerCase());
