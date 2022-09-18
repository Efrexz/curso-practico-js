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

/*Tambien se puede escuchar eventos desde javascript que es la mejor practica para asi dejar mas limpio el html lo cual se haria eliminando el onclick del html y agregando a una variable el id del boton por ejemplo como en la linea de codigo n° 3 y para agregar el escuchador de eventos seria asi. Primero el nombre de la variable que almacena el id del boton por ejemplo:
buttonSumar.addEventListener("Evento", nombre funcion sin los () ya que esta los ejecuta solo cuando ocurra el evento de click por ejemplo)..

//Si llega a estar el boton dentro de un Formulario (<form>) normalmente el tipo de boton pasa a ser submit osea que envia la info y recarga la pagina para evitar esto se haria en la funcion:

esto ocurre ya que los formularios agarran el ultimo boton y lo vuelve de type="submit" y al no colocar los parentesis al momento de colocar a cual funcion debe llamar. Automaticamente el sistema envia ese evento por ejemplo "click" como parametro de la funcion a la cual llamamos

buttonSumar.addEventListener("click", onClickSumar);

function onClickSumar(evento){
    evento.preventDefault(); lo que hace es que no realice su accion por defecto de recargar la pagina al momento que ocurra el evento
    alert("LIsto")
}

o tambien se modifica en el html su caracteristia type="button"