1.
// 		alert("un mensaje");

2.
// 		document.write("Hello Wolrd");

3.
// 		document.write("El resultado de sumar 3 + 5 es = ", 8);

4.
// 		let nombreUsuario = prompt("Introduce tu nombre de usuario");
// 		alert("Hola " + nombreUsuario);

5.
/*
		let numero1 = parseInt(prompt("Dame un numero"));
		let numero2 = parseInt(prompt("Dame otro numero"));
		let suma = numero1 + numero2;

		alert("La suma de esos dos numeros es " + suma);
*/

6.
/*
		let num1 = parseInt(prompt("Dame un numero"));
		let num2 = parseInt(prompt("Dame otro numero"));

		if (num1 > num2) {
			alert("El numero mayor es " + num1);
		} else if (num1 < num2) {
			alert("El numero mayor es " + num2);
		} else {
			alert("Los numeros son iguales");
		}
*/

7.
/* 
		let num1 = parseFloat(prompt("Dame un primer numero"));
		let num2 = parseFloat(prompt("Dame un segundo numero"));
		let num3 = parseFloat(prompt("Dame un tercer numero"));
		let numMayor = num1;

		if (num2 > numMayor) {
				numMayor = num2;
		}
		if (num3 > numMayor) {
				numMayor = num3;
		}
		alert(numMayor + " es el numero mayor");
*/

8.
/* 
		let numero = prompt("Dame un numero");

		if (numero % 2 === 0) {
				alert(numero + " es divisible por dos");
		} else {
				alert("Tu numero no es divisible en 2");
		} 
*/

9.
/*
    let frase = prompt("Ingrese una frase");
    
    for(let i = 0; i < frase.length; i++) {
        let vocal = frase.charAt(i);

        if (vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u" || 
						vocal == "A" || vocal == "E" || vocal == "I" || vocal == "O" || vocal == "U"
					) {
						document.write(frase.charAt(i));
					}
    }
*/

10. 
/*
		let numero = parseInt(prompt("Dame un numero"));

		if (numero % 2 === 0) {
			alert("Tu numero es divisivle por 2")
		} else if (numero % 3 === 0) {
			alert("Tu numero es divisivle por 3")
		}else if (numero % 5 === 0) {
			alert("Tu numero es divisivle por 5")
		}else if (numero % 7 === 0) {
			alert("Tu numero es divisivle por 7")
		} else {
			alert("No es divisible por ninguno")
		}
*/

11.
/*
		let numero = parseInt(prompt("Dame un numero"));

		let mensaje = numero + " es divisible por: ";

		if (numero % 2 === 0) {
			mensaje += "2, ";
		}
		if (numero % 3 === 0) {
			mensaje += "3, ";
		}
		if (numero % 5 === 0) {
			mensaje += "5, ";
		}
		if (numero % 7 === 0) {
			mensaje += "7, ";
		}

		if (mensaje === numero + " es divisible por: ") {
			document.write(" no es divisible por por 2, 3, 5 ni 7.");
		} else {
			document.write(mensaje);
		}
*/