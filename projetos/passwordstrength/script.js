const password = $('#password');
$(function () {
    password.on('keyup', function () {
        const str = check(password.val());
        $('#result').html('Força: ' + str);
    })
})

function check(password) {
    let score = 0;
    if (password.length > 8) {
        score += 20;
    }
    const a = new RegExp(/[a-z]/);
    const A = new RegExp(/[A-Z]/);
    const num = new RegExp(/[0-9]/);
    const spe = new RegExp(/[@$!%*#?&]/);
    if (a.test(password)) {
        score += 20;
    }
    if (A.test(password)) {
        score += 20;
    }
    if (num.test(password)) {
        score += 20;
    }
    if (spe.test(password)) {
        score += 20;
    }
    return score;
}