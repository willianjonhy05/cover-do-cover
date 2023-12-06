function calcularArea() {
    var comprimentoStr = document.getElementById("comprimento").value;
    var larguraStr = document.getElementById("largura").value;
    var unidadeSelecionada = document.getElementById("unidade").value;
  
    var comprimento = parseFloat(comprimentoStr);
    var largura = parseFloat(larguraStr);
    
    var area = largura * comprimento;


  if (unidadeSelecionada === "m") { 
      document.getElementById("resultado").innerHTML = "Area: " + area + " m²";
  } else if (unidadeSelecionada === "cm") {
      document.getElementById("resultado").innerHTML = "Area: " + area + " cm²";
  }  else { 
      document.getElementById("resultado").innerHTML = "Area: " + area;
  }
}



document.addEventListener("submit", calcularArea);