class Hotel {
  constructor(rooms, bookings, customer) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customer = customer;
    this.currentCustomerBookings;
    this.totalCost = 0;
  }
    
  findCurrentCustomerBookings() {
    const currentCustomerBookings = bookings.filter(booking => {
      if(this.customer.id === this.bookings.userID) {
        return booking
      }
      this.currentCustomerBookings = currentCustomerBookings
    })
  }

  calculateTotalCost() {
    const totalCost = this.currentCustomerBookings.reduce((acc, booking) => {
      this.rooms.forEach(room => {
        if(booking.roomNumber === room.number) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
    this.totalCost = totalCost;
  }
}

