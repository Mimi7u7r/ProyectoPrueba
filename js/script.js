//vamos a ver en que caso utilizar el if/else o el switch
//Estas declaraciones le permiten controlar el flujo de la ejecución de su programa 
//function encargado de realizar una tarea o calcular un valor
//Let para definir una variable (crear situación)
//prompt para gener el dialogo que el usuario solicita
//if ejecuta un bloque si la condición es verdadera
//else esjecuta un bloqie si la condicion es falsa
//switch 
//La declaración predeterminada default es opcional.

function prueba1if() {

    let op = prompt("Esccribe 1 para sumar o 2 para restar");


    let resultado = 0;

    if (op == 1) {
        let num1 = prompt("Escribe el numero 1");
        let num2 = prompt("Escribe el numero 2");
        let resultado = parseInt(num1) + parseInt(num2);
        alert("la suma es " + resultado);
    } else {
        if (op == 2) {
            let num1 = prompt("Escribe el numero 1");
            let num2 = prompt("Escribe el numero 2");
            resultado = parseInt(num1) - parseInt(num2);
            alert("la resta es " + resultado);
        } else {
            alert("ingresar entre 1 y 2 para saber si es suma o resta");
        }

    }

}
 //los valores duplicados de case no estan permitidos

function prueba1sw() {
    let op = prompt("Esccribe 1 para sumar o 2 para restar");

    let resultado = 0;

    switch (op) {
        case "1":
            let num1 = prompt("Escribe el numero 1");
            let num2 = prompt("Escribe el numero 2");
            resultado = parseInt(num1) + parseInt(num2);
            alert("la suma  es " + resultado);
            break;
        case "2":
            let num3 = prompt("Escribe el numero 1");
            let num4 = prompt("Escribe el numero 2");
            resultado = parseInt(num3) - parseInt(num4);
            alert("la resta es " + resultado);
            break;
        default:
            alert("ingresar entre 1 y 2 para saber si es suma o resta");
            break;
    }



}

//vamos a ver en que caso utilizar el if/else o el switch
//Estas declaraciones le permiten controlar el flujo de la ejecución de su programa 
//function encargado de realizar una tarea o calcular un valor
//Let para definir una variable (crear situación)
//prompt para gener el dialogo que el usuario solicita
//if ejecuta un bloque si la condición es verdadera
//else esjecuta un bloqie si la condicion es falsa
//switch 
//La declaración predeterminada default es opcional.

//*************************** *****************************//

function prueba2if() {
    let dia = prompt("ingresa un dia de la semana");

    if (dia == "lunes"  
    dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
        alert("es un dia entre semana");
    } else {
        if (dia == "sabado" || dia == "domingo") {
            alert("es fin de semana");
        } else {
            alert("favor ingrese un dia a la semana valido");
        }

    }
}

function prueba2sw() {
    let dia = prompt("ingresa un dia de la semana");

    switch (dia) {
        case "lunes":
            alert("es un dia entre semana");
            break;
        case "martes":
            alert("es un dia entre semana");
            break;
        case "miercoles":
            alert("es un dia entre semana");
            break;
        case "jueves":
            alert("es un dia entre semana");
            break;
        case "viernes":
            alert("es un dia entre semana");
            break;
        case "sabado":
            alert("es un dia fin de semana");
            break;
        case "domingo":
            alert("es un dia fin de semana");
            break;
        default:
            alert("favor ingrese un dia a la semana valido");
            break;
    }
}
