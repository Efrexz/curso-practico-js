// h1 { color: red }
// .parrafito { ... }
// #pid { ... }
//El querySelector afecta solo a la primera etiqueta o clase indicada. Si desea que sea todas las etiquetas se agrega el all al final
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

h1.innerHTML = 'Patito <br> Feo'; //modifica el html y toma las etiquetas html
h1.innerText = 'Patito <br> Feo'; //solo modifica texto no incluye etiquetas html

// h1.setAttribute('class', 'rojo'); le cambia el nombre de la clase "verde" del h1 por "rojo"
let claseviejaH1= h1.getAttribute("class");
console.log(claseviejaH1)


h1.classList.add('rojo');//le añade "rojo" como nueva clase al h1
//h1.classList.remove('verde');//elimina la clase "verde" del h1
// h1.classList.toggle('verde');

h1.classList.contains('verde'); //el contains es como un condicional. nos devuelve true o false dependiendo si nuestro elemente tiene la clase que le estamos preguntando
console.log(h1.classList.contains('verde'))


let clasenuevaH1= h1.getAttribute("class"); // busca el nombre de la clase que tenga el h1. aparece rojo porque mas arriba fue eliminado el "verde" y se dejo solo "rojo"
console.log(clasenuevaH1);

input.value= "valor en js"
console.log(input.value)

const img = document.createElement('img');// se crea un nuevo elemento html <img>
//con el setattribute se le agregan los valores src y la id de la imagen
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

//pid.innerHTML = "";//elimina el parrafo anterior para que quede vacio y luego con appendchild agrega la imagen al <p>
//pid.appendChild(img);

//para hacer lo mismo que la parte de arriba pero con menos lineas de codigo puedes usar esto:
pid.replaceWith(img);//remplazar con :