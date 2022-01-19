class Hotel {
  constructor(rooms, bookings, customer) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customer = customer;
    this.currentCustomerBookings;
    this.totalCost = 0;
    this.availableRooms = [];
    this.unavailableRooms = [];
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

  filterAvalibleRooms(roomType, date) {
    const allMatchingRoomTypes = this.rooms.filter(room => 
      room.roomType === roomType)
    const allAvalibleBookings = this.bookings.filter(
      booking => !booking.date === date)

    const sortRooms = allMatchingRoomTypes.reduce((acc, room) => {
      allAvalibleBookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          this.availableRooms.push(room)
          acc.push(room)
        }else {
          this.unavailableRooms.push(room)
        }
      })
      return acc
    }, [])
    return sortRooms
  }
}

export default Hotel;

