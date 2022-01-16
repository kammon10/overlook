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
let customerData;
let roomsData;
let allBookingsData;
let customerIndex;
let currentCustomer;

//FUNCTIONS
Promise.all([allCustomersAPI, roomsAPI, allBookingsAPI, addNewBookingAPI])
  .then(data => {
[customerData, roomsData, allBookingsData] = [data[0], data[1], data[2]];
    customerIndex = getRandomIndex(sampleCustomers);
    currentCustomer = new Customer(sampleCustomers[customerIndex]);
    
  })

hotel = new Hotel(roomsData, allBookingsData, customerIndex);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

export {

}