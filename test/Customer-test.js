import chai from 'chai';
import Customer from '../src/classes/Customer';
// import sampleCustomers from '../src/sampleData/sampleCustomers';
const expect = chai.expect;


describe('Customer', () => {
  const sampleCustomers = [    
    {
      "id": 1,
      "name": "Leatha Ullrich"
    },
    {
      "id": 2,
      "name": "Rocio Schuster"
    },
    {
      "id": 3,
      "name": "Kelvin Schiller"
    }
  ]
  
  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    let customer = new Customer()
    expect(customer).to.be.an.instanceof(Customer)
  })

  it ('should take in an id', () => {
    let customer = new Customer(sampleCustomers[0])
    expect(customer.id).to.equal(1)
    
  })

})