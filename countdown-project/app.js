const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  const futureDate = new Date(2020, 4, 24, 14, 30, 0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = months[futureDate.getMonth()];
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];

  giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const todaysTime = new Date().getTime();
    t = futureTime - todaysTime
    console.log(t)

    // times in milliseconds
    // 1 day = 24hr
    // 1 hr = 60mins
    // 1 min = 60secs
    // 1 sec = 1000ms

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)
}
getRemainingTime()