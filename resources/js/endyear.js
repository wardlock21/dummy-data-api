var eyearSelect = document.querySelector('#eyear');
var emonthSelect = document.querySelector('#emonth');
var edaySelect = document.querySelector('#eday');
var syearSelect = document.querySelector('#syear');
var year1;

function populateDays(month) {
    while (edaySelect.firstChild) {
        edaySelect.removeChild(edaySelect.firstChild);
    }
    var dayNum;
    if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
        dayNum = 31;
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        dayNum = 30;
    } else {
        var year = eyearSelect.value;
        (year - 2018) % 4 === 0 ? dayNum = 29 : dayNum = 28;
    }
    for (i = 1; i <= dayNum; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        edaySelect.appendChild(option);
    }
    if (previousDay) {
        edaySelect.value = previousDay;
        if (edaySelect.value === "") {
            edaySelect.value = previousDay - 1;
        }

        if (edaySelect.value === "") {
            edaySelect.value = previousDay - 2;
        }

        if (edaySelect.value === "") {
            edaySelect.value = previousDay - 3;
        }
    }
}

function populateYears() {
    for (var i = 0; i <= 455; i++) {
        var option = document.createElement('option');
        option.textContent = year1 - i;
        eyearSelect.appendChild(option);
    }
    eyearSelect.onchange = function () {
        populateDays(emonthSelect.value);
    }
}
emonthSelect.onchange = function () {
    year1 = syearSelect.value;
    year1 = year1 - 1;
    populateYears(emonthSelect.value);
}
var previousDay;
edaySelect.onchange = function () {
    previousDay = edaySelect.value;
}