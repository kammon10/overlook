import { hotel } from './scripts';
import { table } from './domUpdates';

export function displayAllReservations(customerBookings) {

  table.innerHTML = '';
  console.log(customerBookings);
  if (customerBookings.length > 0) {
    customerBookings.forEach(booking => {
      let selectedRoom = hotel.rooms.find(room => room.number === booking.roomNumber);
      table.innerHTML += `
        <tr>
        <th class="booking-date">Date: ${booking.date}</th>
        <th class="room-type">Room Type: ${selectedRoom.roomType}</th>
        </tr>`;
    });
  }
}
