
// Grabbing DOM elements to display time dynamically

const daysHtml = document.querySelector(".time1")
const hoursHtml = document.querySelector(".time2")
const minutesHtml = document.querySelector(".time3")
const secondsHtml = document.querySelector(".time4")

// Creating a function to calculate the time

const calculateTimeLeft = () => {

    // Getting current date and launch date

    let launchDate = new Date("April 3, 2023 08:00:00").getTime();
    let currentDate = new Date().getTime();
    let distance = launchDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysHtml.textContent = days;
    hoursHtml.textContent = hours;
    minutesHtml.textContent = minutes;
    secondsHtml.textContent = seconds;

}

// Getting current date and launch date to set up initial value

calculateTimeLeft();

//Creating a function to update the time value every second

setInterval(calculateTimeLeft, 1000)
