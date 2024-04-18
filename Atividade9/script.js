


function classificarIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc;

    alert(peso);
    alert(altura);
    imc = peso/Math.pow(altura, 2);
    imc = imc.toFixed(1);

    alert(imc);

    if (imc < 18.5) {
        return alert("Seu IMC é: " + imc + " Você é classificado como: MAGREZA");
    } else if (imc >= 18.5 && imc < 24.9) {
        return alert("Seu IMC é: " + imc + " Você é classificado como: NORMAL");
    } else if (imc >= 25 && imc < 29.9) {
        return alert("Seu IMC é: " + imc + " Você é classificado como: SOBREPESO");
    } else if (imc >= 30 && imc < 39.9){
        return alert("Seu IMC é: " + imc + " Você é classificado como: OBESIDADE");
    }else if(imc > 40){
        return alert("Seu IMC é: " + imc + " Você é classificado como: OBESIDADE GRAVE");
    }
}
