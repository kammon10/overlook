import chai from 'chai';
import Customer from '../src/classes/Customer';
import {sampleCustomers, sampleBookings, sampleRooms} from '../src/testData/testData';
const expect = chai.expect;
import Hotel from '../src/classes/Hotel';


discribe(() => {

  let customer;
  let hotel;
  beforeEach(()=> {
    customer = new Customer(sampleCustomers[0]);
    hotel = new Hotel(sampleRooms, sampleBookings, customer) 
  })

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })
}) 