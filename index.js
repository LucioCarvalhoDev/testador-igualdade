const inputs = [...document.querySelectorAll("input")];
const operator = document.querySelector("select");
const result = document.querySelector(".resultado");
const btn = document.querySelector("button");

const n1 = inputs[0], n2 = inputs[1];

btn.addEventListener("click", event => {
	result.textContent = verificaIgualdade();
})

function validaInput(input) {
	let flag = false;
	const valor = input.value;
	
	//regex para expressoes
	if (/^\d[+-\\*\d]*\d$/.test(valor)) {
		flag = true;
	} else if (valor.length == 2) {
		if (/\d\d/.test(valor)) {
			flag = true;
		}
	} else if (/^\d$/.test(valor)) {
		flag = true;
	}

	return flag;
}

function verificaIgualdade() {
	
	//Caso os inputs estejam errados, cancela calculo e solta alerta
	if (!validaInput(n1) || !validaInput(n2)) {
		alert("Insira expressões ou numeros validos nos campos");
		return "";
	}

	const value1 = eval(n1.value);
	const value2 = eval(n2.value);
	const opr = operator.value;

	return eval(`${value1}${opr}${value2}`);
}