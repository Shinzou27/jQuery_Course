const playButton = $("button");
const game = $(".game");
let gameStop = false;

$(function() {
    playButton.on("click", () => {
        !gameStop ? playButton.html("Parar") : playButton.html("Jogar");
        if(!gameStop) {
            createBubbles();
        }
        gameStop = !gameStop;
    });
});

function createBubbles() {
    if(!gameStop) {
        setInterval(() => {
            const bubble = $('<img class="bubble">');
            let top = Math.ceil(Math.random() * 800);
            let left = Math.ceil(Math.random() * 1000);
            let color = '#'+Math.floor(Math.random() * 15000000).toString(16);
            bubble.css('top', top + 'px');
            bubble.css('left', left + 'px');
            bubble.css('background-color', color);
            bubble.on('click', function(){
                $(this).fadeOut('fast');
                updatePoints();
            });
            game.append(bubble);
        }, 1500);
    }
}
function updatePoints() {
    $(".points p").html(parseInt($(".points p").html()) + 1);
}