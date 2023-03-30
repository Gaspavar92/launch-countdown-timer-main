
// Grabbing DOM elements to display time dynamically

const daysHtml = document.querySelector(".time1")
const hoursHtml = document.querySelector(".time2")
const minutesHtml = document.querySelector(".time3")
const secondsHtml = document.querySelector(".time4")

const daysHtml2 = document.querySelector(".time5")
const hoursHtml2 = document.querySelector(".time6")
const minutesHtml2 = document.querySelector(".time7")
const secondsHtml2 = document.querySelector(".time8")

const daysCard = document.querySelector(".days");
const hoursCard = document.querySelector(".hours");
const minutesCard = document.querySelector(".minutes");
const secondsCard = document.querySelector(".seconds");

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

    daysHtml2.textContent = days;
    hoursHtml2.textContent = hours;
    minutesHtml2.textContent = minutes;
    secondsHtml2.textContent = seconds;

}

// Getting current date and launch date to set up initial value

calculateTimeLeft();

//Creating a function to update the time value every second

setInterval(calculateTimeLeft, 1000);

// Creating a function that will flip the card every time a change is detected

secondsCard.addEventListener("click", () => {
    secondsCard.classList.toggle("is-flipped")
})

minutesCard.addEventListener("click", () => {
    minutesCard.classList.toggle("is-flipped")
})

hoursCard.addEventListener("click", () => {
    hoursCard.classList.toggle("is-flipped")
})

daysCard.addEventListener("click", () => {
    daysCard.classList.toggle("is-flipped")
})