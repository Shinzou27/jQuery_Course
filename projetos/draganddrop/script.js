$(function() {
    $('#icon').on('mousedown', function() {
        $('#icon').on('mousemove', function(e) {
            let x = e.originalEvent.pageX;
            let y = e.originalEvent.pageY;
            let width = $(this).width();
            let height = $(this).height();
            $('#icon').css({
                left: x - width / 2 + 'px',
                top: y - height / 2 + 'px'
            })
        });
    });
    $('#icon').on('mouseup', function() {
        $('#icon').off('mousemove');
    })
})