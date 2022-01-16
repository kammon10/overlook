// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './domUpdates';
import Customer from '../src/classes/Customer.js';
import Hotel from '../src/classes/Hotel.js';

import {
allCustomersAPI, 
roomsAPI, 
allBookingsAPI, 
addNewBookingAPI   
} from './apiCalls.js'

///change something
