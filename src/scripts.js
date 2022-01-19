// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import {
  showCalander, 
  populateDates, 
  showPrevMonth, 
  showNextMonth,
  displayInfo,
  hide,
  show
} from './domUpdates';
import {
  sampleCustomers,
  sampleBookings,
  sampleRooms
} from './testData/testData';

import Customer from './classes/Customer';
import Hotel from './classes/Hotel';
import Booking from './classes/Bookings';
import {
allCustomersAPI, 
roomsAPI, 
allBookingsAPI, 
addNewBookingAPI   
} from './apiCalls'

// GLOBAL VARIABLES
let userIndex;
let customers;
let currentCustomer;
let hotel;
let bookings;
let rooms;
let customersData;
let roomsData;
let allBookingsData;
let customerIndex;
let addNewBookingData;
let user;


//QUERYSELECTORS



//FUNCTIONS
Promise.all([allCustomersAPI, roomsAPI, allBookingsAPI, addNewBookingAPI])
  .then(data => {[customersData, roomsData, allBookingsData, addNewBookingData] = [
  data[0], data[1], data[2], data[3]];

    function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length)
    } 

    customers = data[0].customers.map(customer => {
      return new Customer(customer)
    })

    currentCustomer = new Customer(customers[getRandomIndex(customers)])
    
   
    bookings = data[2].bookings.map(booking => {
      return new Booking(booking)
    });

    rooms = data[1].rooms;
    hotel = new Hotel(rooms, bookings, currentCustomer);
  displayInfo(hotel)
}) 


//QUERY SELECTORS
const reservationOptionsPage = 
document.querySelector('.show-all-bookingOptions-page');
const datePickerSection = document.querySelector('.date-picker');
const calendarSubmitBtn = document.querySelector('.submit-calander-date');
calendarSubmitBtn.addEventListener('click', findOptionalRooms);


function findOptionalRooms() {
  hide([datePickerSection])
  show([reservationOptionsPage])
  let checkedRadioButton = document.querySelector(
    'input[name="roomType"]:checked').value
  let inputDate = document.querySelector('input[type="date"]').value;
  let formatedDate = inputDate.split('-').join('/')


  hotel.filterAvalibleRooms(checkedRadioButton, formatedDate);
}

// window.addEventListenergrabdate(event) {
//     event.preventDefault();
//     console.log(dateControl.value)
//   }


export {
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
}