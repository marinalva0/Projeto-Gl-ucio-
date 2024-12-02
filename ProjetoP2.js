function obterMensagem() {
    var retorno = []
    var consulta = $.ajax({
        URL: "https://app-p2-aab7c7fdddb8.herokuapp.com/mensagem",
        method: 'get',
        dataType: 'json',
        async: false
    }).fail(function() {
        return retorno;
    });
    consulta.done(function(data) {
        retorno = data;
    });
    return retorno;
}

function inserirMensagem() {
    var mensagem = {
        nome: "Nome da Pessoa",
        email: "Email da Pessoa",
        senha: "1234",
        mensagem: "A Mensagem Informada"
    }
    var inserir = $.ajax({
        URL: "http://app-p2-aab7c7fdddb8.herokuapp.com/Mensagem",
        method: 'post',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

function validarUsuario(obterLoginSenha) {
    var obterLoginSenha = {
        email: "admin@admin.com",
        senha: "1234"
    }
    var retorno = false;
    var validacao = $.ajax({
        URL: "http:/app-p2-aab7c7fdddb8.herokuapp.com/Usuarios/Validar",
        method: 'post',
        dataType: "json",
        async: false,
        Headers: {
            "Access-Control-Allow-Origin": "*"
        },
        contentType: "application/json",
        data: JSON.stringify(obterLoginSenha)
    }).fail(function() {
        return retorno;
    });
    return retorno;
}
function feedbck(){
    var mensagem = {
        escrever: "Receber mensagem"

    }
}
function validateFields(){
 const email = document.getElementById("Email").value;
 if (!email){
    document.getElementById("recover-password-button")
 }
}