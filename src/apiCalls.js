let allCustomersAPI = fetch("http://localhost:3001/api/v1/customers")
  .then(response => response.json())

let roomsAPI = fetch("http://localhost:3001/api/v1/rooms")
  .then(response => response.json())

let allBookingsAPI = fetch("http://localhost:3001/api/v1/bookings")
  .then(response => response.json())

let addNewBookingAPI = fetch("http://localhost:3001/api/v1/bookings")
  .then(response => response.json())

export {allCustomersAPI, roomsAPI, allBookingsAPI, addNewBookingAPI}

