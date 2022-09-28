// funciones declarativas
function miFuncionDeclarativa (){
    return 3;
}

miFuncionDeclarativa();

// funciones de expresion "funcion anonima"
var miFuncionExpresiva = function(a,b){
    return a + b;
}

miFuncionExpresiva();


// Prueba de consola 
function saluda (persona){
    console.log(persona);
}
undefined

saluda ("pedro");
undefined

function saluda2 (persona){
    return persona;
}
undefined

saluda2("pedro");
'pedro'
saluda("pedro");
undefined

function saluda2 (persona){
    return (`Hola ${persona}`);
}
undefined

saluda2("juan escutia");
'Hola juan escutia'