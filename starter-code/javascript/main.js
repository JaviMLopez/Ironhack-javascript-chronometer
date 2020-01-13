var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

setInterval(
function printTime() {
printMinutes();
printSeconds();
}, 1);

function printMinutes() {
minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];

}

function printSeconds() {
secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT"
    btnRight.className = "btn split"
}

function setStartBtn() {
    btnLeft.innerHTML = "START"
    btnLeft.className = "btn start"
}

function setResetBtn() {
    btnRight.innerHTML = "RESET"
    btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.innerHTML == "START"){
   setStopBtn();
   setSplitBtn();
   chronometer.startClick();
   printTime();
}
else if(btnLeft.innerHTML == "STOP"){
    setStartBtn();
    setResetBtn();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
