document.getElementById("btn").addEventListener("click", function () {
    let idades = document.getElementById("txtidades").value;
    idades = idades.split(",");
    let maior = 0;
    let menor = 0;
    for (i = 0; i < idades.length; i++) {
        if (parseInt(idades[i]) >= 18) {
            maior++;
        }
        else {
            menor++;
        }

    }
    document.write("Quantidade de Idades Maiores: " + maior + "<br>Quantidade de Idades Menores: " + menor);


});