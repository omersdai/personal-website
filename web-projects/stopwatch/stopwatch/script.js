const titleEl = document.getElementById('title');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const millisecondEL = document.getElementById('millisecond');

const toggleBtn = document.getElementById('toggleBtn');
const splitBtn = document.getElementById('splitBtn');
const resetBtn = document.getElementById('resetBtn');

const splitList = document.getElementById('splitList');

let timePassed = 0; //milliseconds
const tick = 30; // update clock every tick milliseconds
let interval;
let clockActive = false;
splitBtn.disabled = true;

toggleBtn.addEventListener('click', () => {
  if (!clockActive) {
    interval = setInterval(()=>{
      timePassed += tick;
      updateClock();
    }, tick);
    toggleBtn.innerText = 'Stop';
  } else {
    clearInterval(interval);
    toggleBtn.innerText = 'Start';
  }
  clockActive = !clockActive;
  splitBtn.disabled = !splitBtn.disabled;
});

splitBtn.addEventListener('click', () => {
  splitList.innerHTML += createSplit();
  splitList.scrollIntoView(false);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  timePassed = 0;
  toggleBtn.innerText = 'Start';
  clockActive = false;
  splitBtn.disabled = true;
  updateClock();
  splitList.innerHTML = '';
});

function updateClock() {
  const { hour, minute, second, millisecond } = computeTime();
  const [h, m, s, ms] = [
    formatNumber(hour),
    formatNumber(minute),
    formatNumber(second),
    formatNumber(millisecond),
  ];

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  millisecondEL.innerText = ms;
  titleEl.innerText = `${h === '00' ? '' : h + ':'}${m}:${s} Stopwatch`;
}

function createSplit() {
  const idx = splitList.querySelectorAll('li').length + 1;

  const { hour, minute, second, millisecond } = computeTime();

  return `
  <li>
    <div class="split">
      <div>${idx}.</div>
      <div class="time"><span>${formatNumber(hour)}</span>h</div>
      <div class="time"><span>${formatNumber(minute)}</span>m</div>
      <div class="time">
        <span >${formatNumber(second)}</span>s
        <span class="millisecond">${formatNumber(millisecond)}</span>
      </div>
    </div>
  </li>`;
}

function computeTime() {
  let time = timePassed;
  const hour = parseInt(time / 3600000); // 1000 * 60 * 60
  time = time % 3600000;
  const minute = parseInt(time / 60000); // 1000 * 60
  time = time % 60000;
  const second = parseInt(time / 1000);
  time = time % 1000;
  const millisecond = parseInt(time / 10); // first two digits

  return { hour, minute, second, millisecond };
}


const formatNumber = (number) => (number < 10 ? `0${number}` : number + '');
