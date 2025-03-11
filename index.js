//buttons
const cinco = document.getElementById('cinco');
const diez = document.getElementById('diez');
const quince = document.getElementById('quince');
const veinticinco = document.getElementById('veinticinco');
const cincuenta = document.getElementById('cincuenta');
//input
const cantidad = document.getElementById('cantidad');
const tipAmount = document.getElementById('tipAmount');
const personas = document.getElementById('personas');
const total = document.getElementById('total');
//variables
let valorTip = 0;
let valorTotal = 0;

function cantidadTip(a) {
    let cantidadValor = parseInt(cantidad.value);
    valorTip = cantidadValor * a;
    tipAmount.innerHTML = `$${valorTip}`;
    
}
// function cantidadTotal(){
// valorTotal = (parseInt(cantidad.value) + valorTip)/parseInt(personas.value);
// total.innerHTML =`$${valorTotal}`;
// }




cinco.addEventListener('click',() => cantidadTip(0.05));
diez.addEventListener('click',() => cantidadTip(0.10));
quince.addEventListener('click',() => cantidadTip(0.15));
veinticinco.addEventListener('click',() => cantidadTip(0.25));
cincuenta.addEventListener('click',() => cantidadTip(0.50));

// cantidad.addEventListener('input',cantidadTotal);

