//timer
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMM, YYYY"));
$("#currentTime").text(today.format("[at] HH:mm a"));
//variable
var timeBlock = $('.timeBlock');
var currentHour = moment().hour();
var textArea = $('.plan');
var saveBtn = $('.saveBtn');
var clearBtn = $('.clearBtn');


timeBlock.each(function () {
    $(this).children(":first").addClass("hour col-sm-1");
    $(this).children("textarea").addClass("col-sm-9 plan")
    $(this).children("button:first").addClass("clearBtn col-sm-1");
    $(this).children("button:last").addClass("btn saveBtn col-sm-1");
})

function changeBgColor() {

    $('.timeBlock').each(function () {
        var blockHour = parseInt($(this).attr('id'));
        console.log(blockHour);
        if (currentHour > blockHour) {
            $(this).addClass('future');
        } else if (currentHour === blockHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })

}


function getSavedData() {
    $('.timeBlock').each(function () {
        var blockHour = parseInt($(this).attr('id'));
        var savedData = localStorage.getItem(blockHour);
        $(this).children('textarea').val(savedData);

    })
};



saveBtn.click(function () {
    var textValue = $(this).siblings('textarea').val()
    var btnHour = $(this).parent().attr('id');
    console.log(textValue);
    console.log(btnHour);
    localStorage.setItem(btnHour, textValue);
})

clearBtn.click(function () {
    var btnHour = $(this).parent().attr('id');
    $(this).siblings('textarea').val(" ");
    localStorage.removeItem(btnHour);
})


changeBgColor();
getSavedData();