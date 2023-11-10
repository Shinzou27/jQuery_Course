const div = '<div>Div qualquer</div>'
const myInput = $('input').eq(0);
const body = $('body');
const reqDiv = $(".slidecomponent");
const form = $("#myform");
jQuery(() => {
    //passar algo aqui fará o algoritmo executar assim que o documento for carregado.
    $('#checkbox').on('click', () => {
        $("#password").toggle('slow')
    });
    $("#btn1").on('click', () => {
        $("#checkbox").trigger('click');
    })
    $(".fakebtn").on('click', () => {
        //reqDiv.fadeToggle();
        reqDiv.animate({
            'width': '+=50px',
        }, 1000);
        $.get('req.html', (t) => {
            console.log(t);
        })
    });
    form.on('submit', function(e){
        e.preventDefault();
        //const [x, y] = [$('#x'), $('#y')];
        let txt = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: txt,
            success: (html) => {
                console.log(html);
                $('#answer').html($('#answer').html() + html);
            },
            error: (error) => {
                console.log(error);
            }
        })
    })
});
$("#fgo-id").mask('000,000,000');
body.attr('style', 'font-family: Arial;')
let color = '#000000';
$(document).on('scroll', function() {
    let newHex = (parseInt(color.slice(1), 16) + 5).toString(16);
    color = "#" + newHex + "0".repeat(6-newHex.length);
    console.log(color);
    body.css('background-color', color);
})
body.css('justify-content', 'center').css('margin', '0 auto');
$('a').eq(0).attr('href', 'https://github.com/Shinzou27/').attr('target', '_blank');
$(function() {
    $('a').showLink();
})
$('img').attr('src', 'furina.png').width(450);
//after & before: adicionam conteúdo verticalmente acima/abaixo da referência
myInput.after(div);
myInput.before(div);
//append & prepend: adicionam conteúdo dentro da referência no início/fim;
$('ul').append('<li>Item 5</li>');
$('ul').prepend('<li>Item 0</li>');
$('li').addClass('pinkBG');
myInput.val('Teste')
myInput.attr('placeholder', 'Novo teste');
myInput.prop('disabled', true);
changeColor(0);
//navegar para um elemento filho
$('ul').find('li').eq(4).html('sad');
/*
find -> pesquisa interna
closest -> pesquisa externa
parent -> elemento pai
child -> elemento filho
*/
console.log($('.child').html());
console.log($('.child').html().trim()); //$.trim está deprecated. A função já está nativamente presente no JS.
$('li').each(function(){
    console.log($(this).html());
})
//$('#checkbox').prop('checked', true);
console.log($('#checkbox').prop('checked'));
$('#selectbox').find('option').eq(3).prop('selected', true);
$('#selectbox').after('<p>'+$('#selectbox').val()+'</p>');
$('#password').on('keydown', (e) => {
    console.log(e.key);
})
function changeColor(index) {
    $('li').addClass('pinkBG').css('color', '');
    $('li').eq(index).css('color', '#ff5555').removeClass('pinkBG');
    setTimeout(() => {
        changeColor((index+1)%6);
    }, 1000)
}

