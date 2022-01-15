import chai from 'chai';
import Customer from '../src/classes/Customer';
import {sampleCustomers} from '../src/testData/testData';
const expect = chai.expect;


describe('Customer', () => {
 
  let customer;

  beforeEach(() => {
    customer = new Customer(sampleCustomers[0])
  })


  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
  
    expect(customer).to.be.an.instanceof(Customer)
  })

  it ('should take in an id', () => {
   
    expect(customer.id).to.equal(1)
    
  })

})