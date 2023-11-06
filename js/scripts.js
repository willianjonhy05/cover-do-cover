function criarBase() {
    fetch('base.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('base').innerHTML = data;
    });
}

criarBase()