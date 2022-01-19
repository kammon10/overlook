 import {
  hotel,
  findOptionalRooms
 } from './scripts';

//QUERY SELECTORS
const reservationOptionsPage = 
document.querySelector('.show-all-booking-options-page');
const datePickerSection = document.querySelector('.date-picker');
const calendarSubmitBtn = document.querySelector('.submit-calander-date');
calendarSubmitBtn.addEventListener('click', findOptionalRooms);
const AllUserResSection = document.querySelector('.show-all-reservations-page');
const reservationInfo = document.querySelector('.reservation-info');
const displayTotalSpent = document.querySelector('.display-total-spent')

//QUERY SELECTORS BUTTONS
const newResButton = document.querySelector('.new-reservation-js')
const showReservationsBtn = document.querySelector('.see-bookings')


//EVENT LISTENERS
window.addEventListener('load', displayInfo)
newResButton.addEventListener('click', showCalander);
showReservationsBtn.addEventListener('click', function() {
  displayAllReservations(hotel.findCurrentCustomerBookings())
});


//FUNCTONS


function displayInfo(hotel) {
  hotel.findCurrentCustomerBookings()
  hotel.calculateTotalCost()
  showTotalSpent()
}

function displayAvailableRooms() {
  hotel.availableRooms.forEach(room => {
    reservationInfo.innerHTML += `
    <section class="room-option id="${room.number}">
      <p class="number">room number: ${room.number}</p>
      <p class="type">type: ${room.roomType}</p>
      <p class="bed-size">bed size: ${room.bedSize}</p>
      <p class="numBeds">beds: ${room.numBeds}</p>
      <p class="costPerNight">price/night: $${room.costPerNight}</p>
      <button class="reserve-room-btn">Reserve</button>
      </section>
    `
    ///update userBookings here!!!!
  } )
}

function showTotalSpent() { 
  displayTotalSpent.innerText = `
 You've spent $${hotel.totalCost} at the Overlook`
}

function displayAllReservations(customerBookings) {
  AllUserResSection.classList.toggle('hidden')
  reservationInfo.innerHTML = '';
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
  
  



// HELPER FUNCTIONS
function showCalander() {
  datePickerSection.classList.toggle('hidden');
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
  displayAllReservations,
  showTotalSpent,
  displayInfo,
  show, 
  hide,
  displayAvailableRooms,
  datePickerSection,
  reservationOptionsPage,
}
