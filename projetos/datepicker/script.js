const hoursDiv = $("#hours");
const minutesDiv = $("#minutes");
const result = $("#result");
let AMPM = false;
$(function () {
    for (let i = 0; i <= 11; i++) {
        hoursDiv.append(`<p id="hour">${i < 10 ? `0${i}` : i
            }</p>`);
    }
    for (let i = 0; i <= 59; i++) {
        minutesDiv.append(`<p id="minute">${i < 10 ? `0${i}` : i
            }</p>`);
    }
    $("#switcher").on('click', function () {
        AMPM = !AMPM;
    });
    $("#hours p").on('click', function () {
        let hour;
        AMPM ? hour = parseInt($(this).html()) + 12 : hour = $(this).html()
        result.html(hour + result.html().slice(2));
    })
    $("#minutes p").on('click', function () {
        result.html(result.html().slice(0, 3) + $(this).html());
    })
});