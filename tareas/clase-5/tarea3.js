document.querySelector('#boton-calcular').onclick = function () {
	let horas = document.querySelectorAll('.horas');
	let minutos = document.querySelectorAll('.minutos');
	let segundos = document.querySelectorAll('.segundos');

	let horasArray = [];
	let minutosArray = [];
	let segundosArray = [];

	let horasTotales = 0;
	let minutosTotales = 0;
	let segundosTotales = 0;
	// suma de los tiempos
	for (let i = 0; i < horas.length; i++) {
		horasArray.push(Number(horas[i].value));
		horasTotales += horasArray[i];

		for (let i = 0; i < minutos.length; i++) {
			minutosArray.push(Number(minutos[i].value));
			minutosTotales += minutosArray[i];
		}
		for (let i = 0; i < segundos.length; i++) {
			segundosArray.push(Number(segundos[i].value));
			segundosTotales += segundosArray[i];
		}
	}

	// calculos de los tiempos

	let horasSegundos = horasTotales * 3600;
	let minutosSegundos = minutosTotales * 60;
	let segundosCalcular = segundosTotales + minutosSegundos + horasSegundos;

	let horasResultado = Math.floor(segundosCalcular / 3600);
	let minutosResultado = Math.floor((segundosCalcular % 3600) / 60);
	let segundosResultado = segundosTotales % 60;

	minutosResultado = minutosResultado < 10 ? '0' + minutosResultado : minutosResultado;

	segundosResultado =
		segundosResultado < 10 ? '0' + segundosResultado : segundosResultado;

	//resultados

	let Total = horasResultado + ':' + minutosResultado + ':' + segundosResultado;
	document.querySelector('#resultado').innerText = Total;

	return false;
};
