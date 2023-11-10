const projList = $(".project-div a");
projList.each(function() {
    $(this).attr('href', $(this).html().replace(' ', '').replace(' ', '').toLowerCase());
    let color = '#'+Math.floor(Math.random() * 15000000).toString(16);
    $(this).css('background-color', color);
})