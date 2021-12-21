//timer
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMM, YYYY"));

//variable
var currentHour = moment().hour();

var textArea = $('.plan');


function changeBgColor() {

    $('.timeBlock').each(function () {
        var blockHour = parseInt($('.timeBlock').attr('id'));
        console.log(blockHour);
        if (currentHour > blockHour) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        } else if (currentHour === blockHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
    })

}
changeBgColor();