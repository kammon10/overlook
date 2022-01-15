import chai from 'chai';
import Customer from '../src/classes/Customer';
import {sampleCustomers, sampleBookings, sampleRooms} from '../src/testData/testData';
const expect = chai.expect;
import Hotel from '../src/classes/Hotel';


describe('Hotel', () => {
  let customer;
  let hotel;
  console.log(customer)
  console.log(hotel)

  beforeEach(()=> {
    customer = new Customer(sampleCustomers[0]);
    hotel = new Hotel(sampleRooms, sampleBookings, customer); 
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel)
  })

  it('should store rooms', () => {
    expect(hotel.rooms.length).to.equal(3)
  })

  it('should store bookings', () => {
    expect(hotel.bookings.length).to.equal(6)
  })

  it('should take in a customer information', () => {
    expect(hotel.customer).to.be.an.instanceof(Customer)
  })

  it('should store the customers current Bookings', () => {
    expect(hotel.currentCustomerBookings.length).to.equal(2)
  })

  it('should calculate the total cost', () => {
    expect(hotel.totalCost).to.equal(968.52)
  })
}) 