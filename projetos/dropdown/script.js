$(function() {
    $('li').on('mouseenter', function() {
        $(this).find('#sub-options').slideToggle('fast')
    })
    $('li').on('mouseleave', function() {
        $(this).find('#sub-options').slideToggle('fast')
    })
})