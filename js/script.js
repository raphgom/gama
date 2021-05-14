var empresa = "Gama Academy"
var msg = "Sejam bem vindos a "
    /* Criando um componente de alert */
    /*alert(msg + empresa);*/
    /* Criando prompts no JavaScript */
    /* var nome = prompt("Sejam todos bem vindos a Gama Academy! Qual o seu nome?");
    alert("Olá " + nome + "! É um grande prazer tê-lo conosco!") */
    /* Criando funções com o JavaScript */
function mensagem() {
    alert("Oi!")
}

function validar() {
    var nome = contatos.nome_cliente.value;
    var email = contatos.email_cliente.value;
    if (nome == "") {
        alert("O preenchimento do campo Nome é obrigatório!");
        contatos.nome_cliente.focus();
        return false;
    } else if (email == "" || email.indexOf("@") == -1) {
        alert("O preenchimento do campo Email é obrigatório! Digite um email válido!");
        contatos.email_cliente.focus();
        return false;
    } else {
        alert("O nome do cliente é " + nome + " e o e-mail é " + email);
    }
}