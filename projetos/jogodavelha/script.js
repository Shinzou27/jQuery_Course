const current = $('#current');
const game = $('.game');
const playButton = $('#play');
let player = 'X';
const gamePos = new Array(9).fill('');
let endGame = false;
$(function () {
    playButton.on('click', function () {
        game.css('opacity', 1);
    });
    $('.square').on('click', function () {
        if ($(this).text() == '') {
            $(this).text(player)
            player == 'X' ? $(this).css('color', 'red') : $(this).css('color', 'blue');
            updateArray($(this).index());
            testWin();
            if (endGame) {
                $('#winner').text('Vencedor: ' + player);
                $('.square').addClass('unclickable');
                playButton.text('Novo jogo');
                playButton.off('click');
                playButton.on('click', newGame);
            } else if(!endGame && gamePos.indexOf('') == -1) {
                $('#winner').text('EMPATE!');
            } else {
                changePlayer();
            }
        }
    })
})


function changePlayer() {
    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    current.text('Jogador atual: ' + player);
}

function testWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    winConditions.forEach((combo) => {
        if (gamePos[combo[0]] && gamePos[combo[0]] === gamePos[combo[1]] && gamePos[combo[0]] === gamePos[combo[2]]) {
            endGame = true;
        }
    })
}

function updateArray(index) {
    gamePos[index] = player;
}
function newGame() {
    gamePos.fill('');
    endGame = false;
    player = 'X';
    game.children().each((e) => {
        $(game.children()[e]).text('');
    })
    $('.square').removeClass('unclickable');
    $('#winner').text('');
}