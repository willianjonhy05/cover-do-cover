function areaTriangulo() {
    var baseStr = document.getElementById("base").value;
    var alturaStr = document.getElementById("altura").value;
    var unidadeSelecionada = document.getElementById("unidade").value;
  
    var base = parseFloat(baseStr);
    var altura = parseFloat(alturaStr);

  var area = base * altura / 2;
  
  if (unidadeSelecionada === "m") { 
      document.getElementById("resultado").innerHTML = "Area: " + area + " m²";
  } else if (unidadeSelecionada === "cm") {
      document.getElementById("resultado").innerHTML = "Area: " + area + " cm²";
  }  else { 
      document.getElementById("resultado").innerHTML = "Area: " + area;
  }

}

document.addEventListener("submit", areaTriangulo);
