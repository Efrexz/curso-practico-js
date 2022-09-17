let input1 = document.querySelector("#calculo1");
let input2 = document.querySelector("#calculo2");
let buttonSumar = document.querySelector("#btnSumar");
let buttonDividir = document.querySelector("#btnDividir");
let buttonMultiplicar = document.querySelector("#btnMultiplicar");
let pResultado = document.querySelector("#result");

function onClickSumar(){
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let sumatotal = valor1 + valor2;
    pResultado.innerText = `El resultado es ` + sumatotal;
}
function onClickDividir(){
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let divisiontotal = valor1 / valor2;
    pResultado.innerText = `El resultado es ` + divisiontotal;
}
function onClickMultiplicar(){
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let multiplicartotal = valor1 * valor2;
    pResultado.innerText = `El resultado es ` + multiplicartotal;
}
