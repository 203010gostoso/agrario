function envia() {
    var time_debut = document.getElementById("nome").value;
    var time_fin = document.getElementById("email").value;
    if(time_debut == '' || time_fin == '') {
        alert("Preencha todos os campos!");
    }
    else if (msg != ''){
        alert("Enviado!");
    }
    else {
        document.getElementById("formulario").submit();
    }   
}