import hotel from './scripts';

let allCustomersAPI = fetch("http://localhost:3001/api/v1/customers")
  .then(response => response.json())

let roomsAPI = fetch("http://localhost:3001/api/v1/rooms")
  .then(response => response.json())

let allBookingsAPI = fetch("http://localhost:3001/api/v1/bookings")
  .then(response => response.json())



let addNewBooking = (userID, date, room) => {
  fetch("http://localhost:3001/api/v1/bookings", {
    method: 'POST',
    body: JSON.stringify({
      userID: userID,
      date: date,
      roomNumber: room,
    }),
    headers: {
      'Content-type': 'application/json',
    }
  })
    .then(response => response.json())
    // .then(response => hotel.bookings.push(response))
};

  export {allCustomersAPI, roomsAPI, allBookingsAPI, addNewBooking}
  