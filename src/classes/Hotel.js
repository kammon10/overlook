class Hotel {
  constructor(rooms, bookings, customer) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customer = customer;
    this.currentCustomerBookings;
    this.totalCost = 0;
  }

  findCurrentCustomerBookings() {
    const currentBookings = this.bookings.filter(booking => {
      if (booking.userID === this.customer.id) {
        return booking
      }
    })
    return this.currentCustomerBookings = currentBookings
  }

  calculateTotalCost() {
    const totalCost = this.currentCustomerBookings.reduce((acc, booking) => {
      this.rooms.forEach(room => {
        if (booking.roomNumber === room.number) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
    this.totalCost = totalCost;
    return totalCost
  }
}

export default Hotel;

