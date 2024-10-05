import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateTime = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

let userSelectDate = null;
let timerInterval = null;




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            startBtn.disabled = true;
        } else {
            userSelectDate = selectedDate;
            startBtn.disabled = false;
        }
    },
  };

  flatpickr(dateTime, options);

  startBtn.addEventListener('click', () => {
    if (userSelectDate) {
        startBtn.disabled = true;
        dateTime.disabled = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
  });

  function updateTimer() {
    const now = new Date();
    const timeLeft = userSelectDate - now;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        dateTime.disabled = false;
        startBtn.disabled = true;
        // updateDisplay(0, 0, 0, 0);
        return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    updateDisplay(days, hours, minutes, seconds);
  }

  function updateDisplay(days, hours, minutes, seconds) {
    daysSpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
// Додай відображення дати і часу в реальному часі

const timeSpan = document.querySelector('.date span');
timeSpan.textContent = new Date().toLocaleString();
setInterval(() => timeSpan.textContent = new Date().toLocaleString(), 1000);

// 1. Обчислення віку за датою народження
// Задача: Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();
  const month = now.getMonth() - birth.getMonth();
  const day = now.getDate() - birth.getDate();
  if (month < 0 || (month === 0 && day < 0)) {
    age -= 1;
  }
return age;

}
console.log(calculateAge('1995-11-18'));

