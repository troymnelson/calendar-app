var currentDayEl = document.querySelector('#currentDay');
var container = document.querySelector('.container');

var today = moment().format('MMMM Do YYYY, h:mm:ss a');;
console.log(today);
currentDayEl.textContent = today;
var hour = moment().hour();

for (var i = 0; i < 9; i++) {
    var timeBlockEl = document.createElement('div');
    timeBlockEl.className = 'time-block';
    container.appendChild(timeBlockEl);
    timeBlockEl.classList.add('time-' + i);
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
    btnEl.dataset.number = i;
    btnEl.textContent = 'save';
    timeBlockEl.append(timeEl, inputTextEl, btnEl);


    if (timeBlockEl.classList.contains('time-' + i) && hour === i) {
        
    }

    
}

var allTimeBlocks = document.querySelectorAll('.time-block');
console.log(allTimeBlocks);



$('.btn').click(function () {
    var userText = $(this).parent().find('.user-input').val();
    // $(this).parent().find('.user-input').addClass();
    localStorage.setItem('userText-' + $(this).data('number'), JSON.stringify(userText))
    // localStorage.getData('userText');
    console.log(userText);
        
})
