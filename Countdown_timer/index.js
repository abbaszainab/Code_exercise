
var hour = document.querySelector(".hour");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");

var startbtn = document.querySelector(".start");
var stopbtn = document.querySelector(".stop");
var resetbtn = document.querySelector(".reset");

var starttimer = null;
function timer() {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = 0;
        min.value = 0;
        sec.value = 0;

    } else if (sec.value != 0) {
        sec.value--;

    } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value--;
    } else if (hour.value != 0 && min.value == 0) {
        sec.value = 59;
        min.value = 59;
        hour.value--;
    }
}

function stoptimer() {
    clearInterval(starttimer);
}

startbtn.addEventListener('click', function () {
    function startInterval() {
        starttimer = setInterval(function () {
            timer();
        }, 500)
    }
    startInterval()

})

resetbtn.addEventListener('click', function () {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    stoptimer()


})

