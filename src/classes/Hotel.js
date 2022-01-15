class Hotel {
  constructor(rooms, bookings, customer) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customer = customer;
    this.currentCustomerBookings = [];
    this.totalCost = 0;
    console.log(this.bookings[0].userID)
    console.log(this.customer.id)
  }

  findCurrentCustomerBookings() {
    const currentBookings = this.bookings.filter(booking => {
      if (booking.userID === this.customer.id) {
        return booking
      }
      this.currentCustomerBookings = currentBookings
    })
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
  }
}

export default Hotel;

