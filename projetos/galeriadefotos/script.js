const highlight = $(".highlight");
const dark = $(".dark");
$(function() {
    $('img').on('mouseenter', function() {
        $(this).animate({
            width: 80,
            height: 80
        }, 300)
    });
    $('img').on('mouseleave', function() {
        $(this).animate({
            width: 64,
            height: 64
        }, 300)
    });
    $('img').on('click', function() {
        $('#char-name').text($(this).attr('src').replace('.png', '').replace($(this).attr('src').charAt(0), $(this).attr('src').charAt(0).toUpperCase()));
        const img = $(this)[0].outerHTML;
        if (highlight.find('#icon').length == 0) {
            highlight.prepend($(img));
        }
        dark.fadeToggle('fast');
        highlight.fadeToggle('fast');
    })
    $('button').on('click', function() {
        dark.fadeToggle('fast');
        highlight.fadeToggle('fast', function() {
            highlight.find('#icon').remove();
        });
    })
})