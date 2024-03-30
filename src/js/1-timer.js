import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const day = document.querySelector("span[data-days]");
const hour = document.querySelector("span[data-hours]");
const minute = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-seconds]");

const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button");
btnStart.addEventListener("click", startTimer);

btnStart.disabled = true;
let userSelectedDate;
const fp = flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate < Date.now()) {
               iziToast.show({
                   message: 'Please choose a date in the future',
                   position: 'topRight',
               });
            btnStart.disabled = true;
            } else {
            btnStart.disabled = false;
          };
       },
    });
let isActive = false;

   
   function startTimer() {
    if (isActive) {
        return;
    } 
       isActive = true;
       input.disabled = true;
       setInterval(() => {
           const currentDate = new Date();
           const delatTime = userSelectedDate - currentDate;
           const time = convertMs(delatTime);
          
            day.textContent = `${addLeadingZero(time.days)}`;
          hour.textContent = `${addLeadingZero(time.hours)}`;
          minute.textContent = `${addLeadingZero(time.minutes)}`;
           second.textContent = `${addLeadingZero(time.seconds)}`;
           btnStart.disabled = true;
           if (delatTime <= 0) {
               day.textContent = `00`;
          hour.textContent = `00`;
          minute.textContent = `00`;
               second.textContent = `00`;
               
            
           }
       }, 1000); 


};
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Кількість мілісекунд за одиницю часу
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // дні, що залишилися
  const days = Math.floor(ms / day);
  //  часи, що залишилися
  const hours = Math.floor((ms % day) / hour);
  // хвилини, що залишилися
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // секунди, що залишилися
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};



