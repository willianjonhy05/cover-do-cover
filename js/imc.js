function calcularIMC() {
    const pesoStr = document.getElementById("peso").value;
    const alturaStr = document.getElementById("altura").value;
   
  
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);

    
    const imc = peso / (altura * altura);


  if (imc < 18.5) { 
      document.getElementById("resultado").innerHTML = "Você está abaixo do peso!";
  } else if (imc >= 18.5 && imc < 24.9) {
      document.getElementById("resultado").innerHTML = "Você está com o peso normal!";
  }  else if (imc >= 24.9 && imc < 29.9) { 
      document.getElementById("resultado").innerHTML = "Você está com sobrepeso!";
  } else if (imc >= 30 && imc < 40) {
	document.getElementById("resultado").innerHTML = "Você está com obesidade!";
} else if (imc >= 40) {
	document.getElementById("resultado").innerHTML = "Você está com obesidade grave!";
}
}



document.addEventListener("submit", calcularIMC);
