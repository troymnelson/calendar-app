var currentDayEl = document.querySelector('#currentDay');
var container = document.querySelector('.container');

var today = moment().format('MMMM Do YYYY, h:mm:ss a');;
console.log(today);
currentDayEl.textContent = today;
var hour = moment().hour();


for (var i = 0; i < 9; i++) {
    var timeBlockEl = document.createElement('div');
    timeBlockEl.className = 'time-block';
    timeBlockEl.classList.add('row');
    container.appendChild(timeBlockEl);
    // timeBlockEl.classList.add('time-' + i);
    var timeEl = document.createElement('p');
    timeEl.classList.add('col-2');
    timeEl.className = 'hour';
    if (i === 3) {
        timeEl.textContent = (i + 9) + 'PM';
    } else if (i < 4) {
        timeEl.textContent = (i + 9) + 'AM';
    } else {
        timeEl.textContent = (i - 3) + 'PM';
    }

    var inputTextEl = document.createElement('textarea');
    inputTextEl.classList.add('col-8');
    var btnEl = document.createElement('button');
    btnEl.className = 'saveBtn';
    btnEl.classList.add('row-2');
    btnEl.dataset.number = i;
    btnEl.textContent = 'save';
    timeBlockEl.append(timeEl, inputTextEl, btnEl);
    var currentHour = moment().hour();

    var userText = localStorage.getItem('userText-' + i);
    console.log(currentHour, i, userText);
    inputTextEl.value = userText;

    

    if ((i + 9) < currentHour) {
        
        inputTextEl.classList.add('past');

    } else if ((i + 9) == currentHour) {
        inputTextEl.classList.add('present');

    } else {
        inputTextEl.classList.add('future');
    }

    
   
    
}

var allTimeBlocks = document.querySelectorAll('.time-block');
console.log(allTimeBlocks);



$('.saveBtn').click(function () {
    var userText = $(this).parent().find('textarea').val();
    // $(this).parent().find('.user-input').addClass();
    localStorage.setItem('userText-' + $(this).data('number'), JSON.stringify(userText))
    // localStorage.getData('userText');
    console.log(userText);
        
})
