// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import {
  showCalander, 
  populateDates, 
  showPrevMonth, 
  showNextMonth
} from './domUpdates';
import {
  sampleCustomers,
  sampleBookings,
  sampleRooms
} from './testData/testData';

import Customer from './classes/Customer';
import Hotel from './classes/Hotel';

import {
allCustomersAPI, 
roomsAPI, 
allBookingsAPI, 
addNewBookingAPI   
} from './apiCalls'

// GLOBAL VARIABLES
let userIndex;
let currentcustomer;
let hotel;
let customersData;
let roomsData;
let allBookingsData;
let customerIndex;
let currentCustomer;
let addNewBookingData;

//FUNCTIONS
Promise.all([allCustomersAPI, roomsAPI, allBookingsAPI, addNewBookingAPI])
  .then(data => {
// eslint-disable-next-line max-len
[customersData, roomsData, allBookingsData, addNewBookingData] = [data[0], data[1], data[2], data[3]];
    customerIndex = getRandomIndex(sampleCustomers);
    currentCustomer = new Customer(sampleCustomers[customerIndex]);
    hotel = new Hotel(sampleRooms, sampleBookings, currentCustomer);
});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}




export {
  userIndex,
  currentcustomer,
  hotel, 
  customersData,
  roomsData,
  allBookingsData,
  customerIndex,
  currentCustomer,
  addNewBookingData
}