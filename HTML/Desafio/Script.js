function send(){

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    if(user == "Ryan" || user == "Sebastian"){
        if(password == "" || password != "ChocoBits" && password != "admin" || password2 == "" || password2 != "ChocoBits" && password2 != "admin"){
            window.alert("Senha incorreta (preencha os dois campos de senha com 'ChocoBits' ou 'admin')");
        }else{
            window.alert("Acesso concedido");
        }
    }else{
        window.alert("Usuário incorreto (o usuário é 'Ryan' ou 'Sebastian')");
    }
    
}