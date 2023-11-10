$(function() {
    $('img').on('mouseenter', function() {
        $(this).animate({
            width: 80
        }, 300)
    });
    $('img').on('mouseleave', function() {
        $(this).animate({
            width: 64
        }, 300)
    });
})