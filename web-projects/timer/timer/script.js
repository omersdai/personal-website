const timerInput = document.getElementById('timerInput');
const inputs = timerInput.querySelectorAll('.time input');

const timerDisplay = document.getElementById('timerDisplay');
const [hourEl, minuteEl, secondEl] =
  timerDisplay.querySelectorAll('.time span');

const [toggleBtn, resetBtn, editBtn] = document.querySelectorAll(
  '.timer-buttons button'
);

const timerBarEl = document.getElementById('timerBar');

// Enums for clock states
const INPUT_STATE = 0,
  ACTIVE_STATE = 1,
  PAUSE_STATE = 2;

let startTime; // milliseconds
let timeRemaining; //milliseconds
const tick = 100; // update clock every tick milliseconds
let interval;
let clockActive;
let inputActive;
let state;

const secondToMilliSecond = 1000;
const minuteToMilliSeconds = secondToMilliSecond * 60; // 1000 * 60
const hourToMilliSeconds = minuteToMilliSeconds * 60; // 1000 * 60 * 60

setInputState(); // Initial state

inputs.forEach((input, idx) => {
  // input.addEventListener('focus', () => (input.value = ''));
  input.addEventListener('input', () => {
    input.value = input.value.toString().substring(0, 2);

    if (60 < input.value && 0 < idx) input.value = 59;
  });
});

toggleBtn.addEventListener('click', () => {
  switch (state) {
    case INPUT_STATE:
      loadInput();
      setActiveState();
      break;
    case ACTIVE_STATE:
      setPauseState();
      break;
    case PAUSE_STATE:
      setActiveState();
      break;
  }
});

resetBtn.addEventListener('click', () => {
  loadInput();
  setPauseState();
});

editBtn.addEventListener('click', () => {
  setInputState();
});

function setInputState() {
  state = INPUT_STATE;
  inputActive = true;
  clockActive = false;
  clearInterval(interval);

  timerInput.classList.remove('hide');
  timerDisplay.classList.add('hide');
  toggleBtn.innerText = 'Start';
  resetBtn.disabled = true;
  editBtn.disabled = true;
  timerBarEl.parentElement.style.backgroundColor = 'coral';
}

function setActiveState() {
  if (timeRemaining === 0) return;
  state = ACTIVE_STATE;
  inputActive = false;
  clockActive = true;
  startTimer();

  timerInput.classList.add('hide');
  timerDisplay.classList.remove('hide');
  toggleBtn.innerText = 'Pause';
  resetBtn.disabled = false;
  editBtn.disabled = false;
  timerBarEl.parentElement.style.backgroundColor = '#43dfd4';
}

function setPauseState() {
  state = PAUSE_STATE;
  inputActive = false;
  clockActive = false;
  pauseTimer();

  timerInput.classList.add('hide');
  timerDisplay.classList.remove('hide');
  toggleBtn.innerText = 'Start';
  resetBtn.disabled = false;
  editBtn.disabled = false;
  timerBarEl.parentElement.style.backgroundColor = 'coral';
}

function startTimer() {
  interval = setInterval(() => {
    if (timeRemaining <= 0) {
      setPauseState();
      timerBarEl.parentElement.style.backgroundColor = '#e63946';
      console.log('timer ended');
    } else {
      timeRemaining -= tick;
      updateClock();
    }
  }, tick);
}

function pauseTimer() {
  clearInterval(interval);
}

function updateClock() {
  const { hour, minute, second } = computeTime();

  hourEl.innerText = formatNumber(hour);
  minuteEl.innerText = formatNumber(minute);
  secondEl.innerText = formatNumber(second);

  timerBarEl.style.width = `${
    ((startTime - timeRemaining) * 100) / startTime
  }%`;
}

function loadInput() {
  const hour = inputs[0].value || 0;
  const minute = inputs[1].value || 0;
  const second = inputs[2].value || 0;

  startTime =
    hour * hourToMilliSeconds +
    minute * minuteToMilliSeconds +
    second * secondToMilliSecond;
  timeRemaining = startTime;
  updateClock();
}

function computeTime() {
  let time = timeRemaining;
  const hour = parseInt(time / hourToMilliSeconds); // 1000 * 60 * 60
  time = time % hourToMilliSeconds;
  const minute = parseInt(time / minuteToMilliSeconds); // 1000 * 60
  time = time % minuteToMilliSeconds;
  const second = parseInt(time / secondToMilliSecond);
  time = time % secondToMilliSecond;

  return { hour, minute, second };
}

const formatNumber = (number) => (number < 10 ? `0${number}` : number + '');
