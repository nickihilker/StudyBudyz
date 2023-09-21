
let timeInSeconds = 0;
let intervalId = null;

function updateTime() {
const hours = Math.floor(timeInSeconds / 3600);
const minutes = Math.floor((timeInSeconds % 3600) / 60);
const seconds = timeInSeconds % 60;
const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
document.getElementById("timer").textContent = formattedTime;
}

function padZero(value) {
return value.toString().padStart(2, "0");
}

function addTime(seconds) {
timeInSeconds += seconds;
updateTime();
}

function startTimer() {
if (intervalId) return; 

intervalId = setInterval(() => {
    if (timeInSeconds > 0) {
    timeInSeconds--;
    updateTime();
    } else {
    clearInterval(intervalId);
    intervalId = null;
    }
}, 1000);
}

function restartTimer() {
clearInterval(intervalId);
intervalId = null;
timeInSeconds = 0;
updateTime();
}



/////////////

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document
    .querySelector(".calendar-current-date");
 
const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");
 
// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 
// Function to generate the calendar
const manipulate = () => {
    let dayone = new Date(year, month, 1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastdate).getDay();
    let monthlastdate = new Date(year, month, 0).getDate();
    let lit = "";
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
    for (let i = 1; i <= lastdate; i++) {
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
 
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    currdate.innerText = `${months[month]} ${year}`;
 
    day.innerHTML = lit;
}

manipulate();
 

prenexIcons.forEach(icon => {

    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        }
 
        else {
            date = new Date();
        }
 
        manipulate();
    });
});



//////////////////////////////////////////////////////////////////////////////
const form = document.querySelector('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    console.log(obj);

    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);

    window.location.href = "GOALS.html"
    })


//////////////////////////////////////////////////////////////////////////////
function btn001() {
        var text001;
        var colors001 = document.getElementById("input001").value;

        document.getElementById("message001").innerHTML = text001;
        
        }

//////////////////////////////////////////////////////////////////////////////
function reachThem() {
    let YourGoals = document.querySelector("#YourGoals");
    let message1 = document.querySelector("#message1");
    message1.innerHTML = "YOU CAN DO IT!";


   

}
/////////////
document.addEventListener('DOMContentLoaded', function () {
    var sliderImg = document.getElementById('sliderImage');
    var images = ['images/StudyGoat.PNG', 'images/StudyLlama.jpg', 'images/StudyRacoon.PNG'];
    var i = 0;

    // Set the initial image source when the page loads
    sliderImg.src = images[i];

    // Rest of your slider code...
});

/////////////////
var slider_img = document.querySelector('.slider-img');
var images = ['images/StudyGoat.PNG', 'images/StudyLlama.jpg', 'images/StudyRacoon.PNG'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
///////////////////



img = document.getElementById("img1");
function enlargeImg() {
    img.style.width = "60%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}
function resetImg() {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}


/////////////////////////


function showr() {
    document.getElementById('imager')
        .style.display = "block";
    document.getElementById('imageg')
        .style.display = "none";
    document.getElementById('imagel')
        .style.display = "none";
    document.getElementById('sliderImage')
        .style.display = "none";
    }
    function showl() {
    document.getElementById('imagel')
        .style.display = "block";
        document.getElementById('imageg')
        .style.display = "none";
    document.getElementById('imager')
        .style.display = "none";
    document.getElementById('sliderImage')
        .style.display = "none";
    }
    function showg() {
    document.getElementById('imageg')
        .style.display = "block";
    document.getElementById('imagel')
        .style.display = "none";
    document.getElementById('imager')
        .style.display = "none";
    document.getElementById('sliderImage')
        .style.display = "none";
    }
    function refreshpage(){
    document.getElementById('imagel')
        .style.display = "none";
    document.getElementById('imageg')
        .style.display = "none";
    document.getElementById('imager')
        .style.display = "none";
    document.getElementById('btnID')
        window.location.reload();
    document.getElementById('sliderImage')
        .style.display = "none";
    }
///





    //window.onload = function() {
    //    funcitionname(param1, param2);
    //}
    function goFullScreen() {
        var el = document.querySelector(".allb");
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.mozRequestFullScreen) { /* Firefox */
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) { /* IE/Edge */
            el.msRequestFullscreen();
        }
    }




    //bhdlhjsjdhvlkdjfhvkjfhvoidjvkjfvdfjkdjfhlvkdjfhvlkdjhfivjhsfijhvsjvhldkfjvdlkjfhvds
    


let comments = {};
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
    
const day = document.querySelector(".calendar-dates");
    
const currdate = document
    .querySelector(".calendar-current-date");
    
const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");
    
// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
    

const manipulate = () => {
    let dayone = new Date(year, month, 1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastdate).getDay();
    let monthlastdate = new Date(year, month, 0).getDate();
    let lit = "";
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
    for (let i = 1; i <= lastdate; i++) {
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    currdate.innerText = `${months[month]} ${year}`;
    
    day.innerHTML = lit;
}

manipulate();
    

prenexIcons.forEach(icon => {

    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        }
    
        else {
            date = new Date();
        }
    
        manipulate();
    });
});

