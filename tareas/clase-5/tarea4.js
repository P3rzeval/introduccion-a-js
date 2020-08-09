document.querySelector('#boton-calcular').onclick = function () {
	let $numeros = document.querySelectorAll('.numeros');

	let numerosArray = [];
	let numerosSumados = 0;
  // Calculo de numero de promedio.
	for (let i = 0; i < $numeros.length; i++) {
		numerosArray.push(Number($numeros[i].textContent));
		numerosSumados += numerosArray[i];
	}
  // calculador de numero que mas se repite
	let contador = [];
	let comparador = 0;
	let numeroRepetitivo;

	for (let i = 0; i < $numeros.length; ++i) {
		numerosArray.push(Number($numeros[i].textContent));
		let numeros = numerosArray[i];
		if (contador[numeros] === undefined) {
			contador[numeros] = 1;
		} else {
			contador[numeros] += 1;
		}
		if (contador[numeros] > comparador) {
			comparador = contador[numeros];
			numeroRepetitivo = numerosArray[i];
		}
	}

	const numeroPromedio = numerosSumados / $numeros.length;
    // Numero mayor y menor
	const numeroMayor = Math.max(...numerosArray);
	const numeroMenor = Math.min(...numerosArray);
  // Resultado
	document.querySelector('#numero-promedio').innerText = numeroPromedio;
	document.querySelector('#numero-mayor').innerText = numeroMayor;
	document.querySelector('#numero-menor').innerText = numeroMenor;
	document.querySelector('#numero-repetitivo').innerText = numeroRepetitivo;
	
	return false;
};


