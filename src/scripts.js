// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { 
  hide,
  show,
  displayAvailableRooms,
  datePickerSection,
  reservationOptionsPage,
  showTotalSpent,
  logInPage,
  logInSection,
  customerPage,
  userName,
  password

} from './domUpdates';

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




//FUNCTIONS
function fetchAll(id) {
  //pass in the user id and refactor
Promise.all([allCustomersAPI, roomsAPI, allBookingsAPI, addNewBookingAPI])
  .then(data => {[customersData, roomsData, allBookingsData, addNewBookingData] = [
  data[0], data[1], data[2], data[3]];

    function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length)
    } 

    customers = data[0].customers.map(customer => {
      return new Customer(customer)
    })
    console.log('id', id)
    

    currentCustomer = customers.find(customer => customer.id === id)
    console.log(currentCustomer)
   
    bookings = data[2].bookings.map(booking => {
      return new Booking(booking)
    });

    rooms = data[1].rooms;
    hotel = new Hotel(rooms, bookings, currentCustomer);
}) 
}

//QUERY SELECTORS

function displayInfo(e) {
 e.preventDefault();
  console.log('testing')
  hide([logInPage])
  show([customerPage])
  let thisUserName = userName.value;
  let thisUserPassword = password.value;
  let userNameIndex8 = [thisUserName.charAt(8)]
  let userNameIndex9 = [thisUserName.charAt(9)]
  let userLogInID = Number(`${userNameIndex8}${userNameIndex9}`)
  if (userLogInID > 0 && userLogInID <= 50 && thisUserPassword === 'overlook2021') {
    fetchAll(userLogInID)
  }
  hotel.findCurrentCustomerBookings()
  hotel.calculateTotalCost()
  showTotalSpent()

}

function findOptionalRooms() {
  hide([datePickerSection])
  show([reservationOptionsPage])
  let checkedRadioButton = document.querySelector(
    'input[name="roomType"]:checked').value
  let inputDate = document.querySelector('input[type="date"]').value;
  let formatedDate = inputDate.split('-').join('/')
  hotel.filterAvailableRooms(checkedRadioButton, formatedDate);
  displayAvailableRooms() 
}

function reserveRoom(e) {
  e.preventDefault()
  hide([]);
  show([]);
}
///return hotel.availableRooms === parsInt(e.targe.id)
//  const roomNum = hotel.availibleRooms.find(room => room.number === parsInt(e.target.id))
//  createNewBooking(roomNum)
//make a new reservation with the userID, 
//date === dateInput
//roomNumber === parsInt(e.taget.id);
//roomServicecharges

///
//target the classList of the select room button and return
  // update the html for the cards
  // add an eventListener for the event.target and return
// the id of the card its assigned to. 
// (this portion can be a function in the scripts file)
// 
//hide the room options page and show room details page
//page includes the room type, number of beds and date.
//the selected room is added the the user reservations window
//




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
  findOptionalRooms,
  displayInfo,
  fetchAll
}