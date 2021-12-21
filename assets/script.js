//timer
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMM, YYYY"));

//variable
var currentHour = moment().hour();
var blockHour = parseInt($('.timeBlock').attr('id'));
var textArea = $('.plan');

function changeBgColor() {

    $('.timeBlock').each(function () {
        if (currentHour < blockHour) {
            textArea.removeClass('past');
            textArea.removeClass('present');
            textArea.addClass('future');
        } else if (currentHour === blockHour) {
            textArea.removeClass('past');
            textArea.addClass('present');
            textArea.removeClass('future');
        } else {
            textArea.addClass('past');
            textArea.removeClass('present');
            textArea.removeClass('future');
        }
    })

}
changeBgColor();