//timer
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMM, YYYY"));

//variable
var timeBlock = $('.timeBlock');
var currentHour = moment().hour();
var textArea = $('.plan');
var saveBtn = $('.saveBtn');
var clearBtn = $('.clearBtn');


timeBlock.each(function () {
    $(this).children(":first").addClass("hour col-md-1");
    $(this).children("textarea").addClass("col-md-9 plan")
    $(this).children("button:first").addClass("btn clearBtn col-md-1 ");
    $(this).children("button:last").addClass("btn saveBtn col-md-1");
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
changeBgColor();

saveBtn.click(function () {
    var textValue = $(this).siblings('textarea').val()
    var btnHour = $(this).parent().attr('id');
    console.log(textValue);
    console.log(btnHour);
    localStorage.setItem(btnHour, textValue);
})

clearBtn.click(function () {
    var btnHour = $(this).parent().attr('id');
    localStorage.clear(btnHour, textValue);
})





    // give data class on HTML 
    // var btnHour = $(this).attr('data-hour');
    // var text = $('textarea[data-tArea=' + btnHour + ']').val()
    // var text = $(`textarea[data-tArea=${btnHour }]`).val()