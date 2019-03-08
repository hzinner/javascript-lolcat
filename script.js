var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var timeEventJS = document.getElementById("timeEvent");

var updateClock = function ()
{

var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";


if (time == partyTime){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Party on, Wayne!";
} else if (time == napTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Time for a CAT nap!";
} else if (time == lunchTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "What's for lunch?";
} else if (time == wakeupTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Ok, ok, I'm UP!";
} else if (time < noon) {
  image = "https://cdn.pixabay.com/photo/2014/05/07/06/44/animal-339400_960_720.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
  image = "https://cdn.pixabay.com/photo/2016/09/25/14/09/cat-1693788_960_720.jpg";
    messageText = "Good Evening!";
} else {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
}

timeEventJS.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function ()
{
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";
  
  if (hours >= noon) 
  {
    meridian = "PM";
  }
  if (hours > noon)
  {
    hours = hours - 12;
  }
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }

var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

clock.innerText = clockTime;
};

showCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval (updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
  if (isPartyTime === false)
  {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Party Over";
    document.body.button.background = "#0A8DAB";
  }
  else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Part Time!";
    document.body.button.background = "#222";
  }
};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function ()
{
  wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
