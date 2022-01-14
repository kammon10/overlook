
//QUERY SELECTORS
const calenderContainer = document.querySelector('.calendar-container');
const datePickerSection = document.querySelector('.date-picker');
const selectedDateSection = document.querySelector('selected-date');
const displayCalander = document.querySelector('.display-calander');
const monthSection = document.querySelector('.month');
const mth = document.querySelector('.mth')
const daySection = document.querySelector('.days')

//QUERY SELECTORS BUTTONS
const newResButton = document.querySelector('.new-reservation-js')
const nextMonthBtn = document.querySelector('.next-month');
const prevMonthBtn = document.querySelector('.prev-month');

//EVENT LISTENERS
newResButton.addEventListener('click', showCalander);
nextMonthBtn.addEventListener('click', showNextMonth);
prevMonthBtn.addEventListener('click', showPrevMonth)

//UNIVERSAL VARS
// eslint-disable-next-line max-len
const months = ['January', 'Febuary', 'March', 'April', 'May', 'Jun','July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth.innerText = `${months[month]} ${year}`;
selectedDateSection.textContent = formatDate(date);
populateDates()

//FUNCTIONS
function populateDates(d) {
  let daysInMonth = 31;
  daySection.innerHTML = '';
  for (let i = 0; i < daysInMonth.length; i++) {
    daySection.innerHTML += `<section class="${day}">${i + 1}</section`
    daySection.appendChild(daySection);
  }

  if (month === 1) {
    daysInMonth = 28;
  } else if (month === 3 || month === 5, month === 8, month === 10) {
    daysInMonth = 30;
  }
}

function showPrevMonth() {
  month --;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth.innerText = `${months[month]} ${year}`;
}

function showNextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth.innerText = `${months[month]} ${year}`;
}

function showCalander() {
  datePickerSection.classList.toggle('hidden');
  populateDates()
}

// HELPER FUNCTIONS

function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = `0${day}`
  }
  let month = d.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`
  }
  let year = d.getFullYear();
  return `0${day} / 0${month} / ${year}` 
}


export {
  showCalander, 
  populateDates,
  showPrevMonth,
  showNextMonth,
  formatDate  
}