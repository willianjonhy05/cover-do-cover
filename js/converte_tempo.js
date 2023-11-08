function Converte_Tempo() {
	const tempoStr = document.getElementById("temp").value;
	const calculo = document.getElementById("unidade").value;

	const tempo = parseFloat(tempoStr);
	
  	if (calculo === "Fahrenheit") { 
	    const fahrenheit = (tempo * 9/5) + 32;
      	document.getElementById("resultado").innerHTML = "Convertendo para Fahrenheit é: " + fahrenheit + " °F.";
  	} else if (calculo === "Celsius") {
	    const celsius = (tempo - 32) * 5/9;
      	document.getElementById("resultado").innerHTML = "Convertendo para Celsius é: " + celsius + " °C.";
  	}  else { 
      	document.getElementById("resultado").innerHTML = "Erro! Selecione a opção de conversão desejada!";
  	}

}

document.addEventListener("submit", Converte_Tempo);