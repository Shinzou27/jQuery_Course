const height = $("#height");
const weight = $("#weight");
const result = $("#result");
const resultDetails = $("#result-detail");
height.mask('0,00');
$("#button").on("click", () => {
    clear();
    
    const limits = [18.5, 24.5, 30];
    const classes = ['abaixo-do-peso', 'ideal', 'sobrepeso', 'obesidade']
    const imc = parseInt(weight.val()) / (Math.pow(parseFloat(height.val().replace(',', '.')), 2));
    result.append(imc.toFixed(2));
    let resultIndex;
    limits.forEach((value, index) => {
        if (imc > value) {
            resultIndex = index+1;
        }
    });
    resultIndex == undefined ? resultIndex = 0 : resultIndex = resultIndex;
    let txt = classes[resultIndex].replace('-', ' ').toUpperCase();
    resultDetails.append(txt);
    resultDetails.addClass(classes[resultIndex]);
})

function clear() {
    result.empty();
    resultDetails.empty();
    resultDetails.removeClass();
}