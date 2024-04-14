const formulario = document.getElementById('contatoForm'); 
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    // Validação básica dos campos (opcional)
    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }
    // Crie a requisição AJAX para enviar o email 
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://github.com/sendgrid/sendgrid-php'); // Substitua pelo seu endpoint de envio de email 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const dados = `nome=${nome}&email=${email}&assunto=${assunto}&mensagem=${mensagem}`;
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Mensagem enviada com sucesso!');
            formulario.reset(); // Limpa o formulário
        } else {
            alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        }
    };
    xhr.send(dados);
});