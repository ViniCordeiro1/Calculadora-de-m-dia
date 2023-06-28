function calcularMedia() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var mediaPonderada = (n1 * 0.6) + (n2 * 0.4);

    document.getElementById('resultado').textContent = 'A média é: ' + mediaPonderada.toFixed(2);
}
