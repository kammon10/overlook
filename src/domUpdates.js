
//QUERY SELECTORS
const newResButton = document.querySelector('.new-reservation-js')
const calenderContainer = document.querySelector('.calendar-container');
const datePickerSection = document.querySelector('.date-picker');
const selectedDate = document.querySelector('.selected-date');
const dates = document.querySelector('.dates')


//EVENT LISTENERS
newResButton.addEventListener('click', showCalander);



//FUNCTIONS

function showCalander() {
  datePickerSection.classList.toggle('hidden');
}

// HELPER FUNCTIONS


export {
  showCalander,   
}