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

  filterAvailableRooms(type, date) {
    console.log(type)
    console.log(date)
    this.availableRooms = [];
    const allMatchingRoomTypes = this.rooms.filter(room => 
      room.roomType === type)
  
    const allAvailableBookings = this.bookings.filter(booking => 
      booking.date !== date) 
    
    if (type === 'all rooms') {
      this.availableRooms = allAvailableBookings
    } else {
      const findRooms = allMatchingRoomTypes.reduce((acc, room) => {
        allAvailableBookings.forEach(booking => { 
          if (booking.roomNumber === room.number
             && !acc.includes(room.number)) {
            acc.push(room)
          }
        })
        return acc
      }, [])
      this.availableRooms = [...new Set(findRooms)]
    }
  }
}

export default Hotel;

