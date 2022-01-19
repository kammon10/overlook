 import {
  userIndex,
  customers,
  currentCustomer,
  hotel,
  bookings,
  rooms,
  customersData,
  roomsData,
  allBookingsData,
  customerIndex,
  addNewBookingData,
  domUpdates,
 } from './scripts';

//QUERY SELECTORS
const dateControl = document.querySelector('.calander-date');
const datePickerSection = document.querySelector('.date-picker');
const selectedDateSection = document.querySelector('selected-date');
const displayCalander = document.querySelector('.display-calander');
const monthSection = document.querySelector('.month');
const mth = document.querySelector('.mth');
const daySection = document.querySelector('.days');
const roomTypeForm = document.querySelector('.room-type-form');
const AllUserResSection = document.querySelector('.show-all-reservations-page');
const reservationInfo = document.querySelector('.reservation-info');
const displayTotalSpent = document.querySelector('.display-total-spent')

//QUERY SELECTORS BUTTONS
const calendarSubmitBtn = document.querySelector('.submit-calander-date')
const newResButton = document.querySelector('.new-reservation-js')
// const nextMonthBtn = document.querySelector('.next-month');
// const prevMonthBtn = document.querySelector('.prev-month');
const showReservationsBtn = document.querySelector('.see-bookings')
const submitCalanderDateBtn = document.querySelector('.submit-calander-date')


//EVENT LISTENERS
window.addEventListener('load', displayInfo)
newResButton.addEventListener('click', showCalander);
// nextMonthBtn.addEventListener('click', showNextMonth);
// prevMonthBtn.addEventListener('click', showPrevMonth);
showReservationsBtn.addEventListener('click', function() {
  displayAllReservations(hotel.findCurrentCustomerBookings())
});

//UNIVERSAL VARS

const months = ['January', 'Febuary', 'March', 'April', 'May', 
'Jun','July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

// mth.innerText = `${months[month]} ${year}`;
populateDates()






// function grabdate(event) {
//   event.preventDefault();
//   console.log(dateControl.value)
// }
// const dateControl = document.querySelector('input[type="date"]');
// const calendarSubmitBtn = document.querySelector('input[type="submit"]')





//FUNCTIONS
//display all reservations that match the roomType and all bookings that
//do not match the booking date



function displayInfo(hotel) {
  hotel.findCurrentCustomerBookings()
  hotel.calculateTotalCost()
  totalSpent()
}

function totalSpent() { 
 displayTotalSpent.innerText = `$${hotel.totalCost}`
}

function displayAllReservations(customerBookings) {
  AllUserResSection.classList.toggle('hidden')
  reservationInfo.innerHTML = '';
  console.log(customerBookings)
  if (customerBookings.length > 0) {
    customerBookings.forEach(booking => {
      let selectedRoom = hotel.rooms.find(room => 
        room.number === booking.roomNumber)
      reservationInfo.innerHTML += `
        <section class="booking-info">
         <p class="booking-date">Date: ${booking.date}</p>
         <p class="room-type">Room Type: ${selectedRoom.roomType}</p>
        </section>`
        
    })
  }
}
  
  
function populateDates() {
  daySection.innerHTML = '';
    
  if (month === 1) {
      daysInMonth = 28;
  } else if (month === 3 || month === 5 || month === 8 || month === 10) {
    daysInMonth = 30;
  }
    // daySection.innerHTML += `<section class="${day}">${i + 1}</section>`
    // daySection.appendChild(daySection);
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
    formatDate(date)
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
    
  }

  function show(elements) {
    elements.forEach(element => {
      element.classList.remove('hidden');
    });
  }
  
  function hide(elements) {
    elements.forEach(element => {
      element.classList.add('hidden')
    });
  }
  
  
  export {
  showCalander, 
  populateDates,
  showPrevMonth,
  showNextMonth,
  formatDate,
  displayAllReservations,
  totalSpent,
  displayInfo,
  show, 
  hide,
}
