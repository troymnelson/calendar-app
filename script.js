var currentDayEl = document.querySelector('#currentDay');
var container = document.querySelector('.container');

var today = moment().format('MMMM Do YYYY, h:mm:ss a');;
console.log(today);
currentDayEl.textContent = today;

for (var i = 0; i < 9; i++) {
    var timeBlockEl = document.createElement('div');
    timeBlockEl.className = 'time-block';
    container.appendChild(timeBlockEl);
    
    var timeEl = document.createElement('p');
    timeEl.className = 'time';
    if (i === 3) {
        timeEl.textContent = (i + 9) + 'PM';
    } else if (i < 4) {
        timeEl.textContent = (i + 9) + 'AM';
    } else {
        timeEl.textContent = (i - 3) + 'PM';
    }

    var inputTextEl = document.createElement('input');
    inputTextEl.className = 'user-input';
    var btnEl = document.createElement('button');
    btnEl.className = 'btn';
    btnEl.textContent = 'save';
    timeBlockEl.append(timeEl, inputTextEl, btnEl);




    
}

var allTimeBlocks = document.querySelectorAll('.time-block');
console.log(allTimeBlocks);

for (var i = 0; i < allTimeBlocks.length; i++) {

    // You need to use a this property
    btnEl.addEventListener('click', function() {
        var userText = inputTextEl.value;
        console.log(userText);
    });
}