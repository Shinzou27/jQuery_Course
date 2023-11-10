$(function() {
    $("button").on("click", function() {
        $.ajax({
            url: 'http://127.0.0.1:5500/projetos/buscadordeclima/fakeapi.json',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                const city = data.filter((value) => value.name == $('input').val())[0] || '';
                $("#result").text(city.weather);
            }
        })
    })
})