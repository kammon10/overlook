let allCustomersAPI = fetch("http://localhost:3001/api/v1/customers")
  .then(response => response.json())

let roomsAPI = fetch("http://localhost:3001/api/v1/rooms")
  .then(response => response.json())

let allBookingsAPI = fetch("http://localhost:3001/api/v1/bookings")
  .then(response => response.json())


// let addNewBookingAPI = fetch("http://localhost:3001/api/v1/bookings")
//   .then(response => response.json())
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
};

  export {allCustomersAPI, roomsAPI, allBookingsAPI, addNewBooking}
  

  // fetch("http://localhost:3001/api/v1/users", {
  //   method: 'POST',
  //   body: JSON.stringify(info),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  
  // let addNewBookingAPI = fetch("http://localhost:3001/api/v1/bookings", {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     userID: userID,
  //     date: date,
  //     roomNumber: room,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json',
  //   }
  // })
  //   .then(response => response.json())