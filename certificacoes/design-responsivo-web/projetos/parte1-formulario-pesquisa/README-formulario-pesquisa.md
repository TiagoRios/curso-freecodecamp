# Criar um formulário de pesquisa

Objetivo: criar uma aplicação que funcione de modo semelhante a https://survey-form.freecodecamp.rocks

Histórias de usuário:

Você deve ter um título de página em um elemento h1 com o id title
Você deve ter uma breve explicação em um elemento p com o id description
Você deve ter um elemento form com o id survey-form
Dentro do elemento do formulário, deve ser obrigatório inserir seu nome em um campo input que tenha um id name e um type text
Dentro do elemento do formulário, deve ser obrigatório inserir seu e-mail em um campo input que tenha um id email
Se for informado um e-mail que não esteja formatado corretamente, um erro de validação HTML5 deve ser mostrado
Dentro do formulário, você pode inserir um número em um campo input que tenha o id number
A entrada de número não deve aceitar algo que não seja números, impedindo que você os digite ou mostrando um erro de validação do HTML5 (dependendo do seu navegador).
Se forem inseridos números fora do intervalo do campo de entrada do número, intervalo esse definido pelos atributos min e max, um erro de validação de HTML5 deve ser mostrado
Para os campos de entrada (inputs) name, email e number dentro do formulário, deve haver elementos label correspondentes que descrevam o propósito de cada campo com os seguintes ids: id="name-label", id="email-label" e id="number-label"
Para os campos de entrada name, email e number, deve haver um texto placeholder (texto ilustrativo) que forneça uma descrição ou instruções para cada campo
Dentro do elemento do formulário, você deve ter um elemento de menu suspenso select com um id dropdown e pelo menos duas opções para escolher
Dentro do elemento do formulário, você pode selecionar uma opção de um grupo de pelo menos dois botões de opção (radio) que serão agrupados usando o atributo name
Dentro do elemento de formulário, deve ser possível selecionar vários campos de uma série de caixas de seleção (checkboxes). Cada um desses campos deve ter um atributo value
Dentro do elemento de formulário, você receberá uma textarea para comentários adicionais
Dentro do elemento de formulário, você receberá um botão com o id submit para enviar as informações
Atenda às histórias de usuário e passe em todos os testes abaixo para concluir este projeto. Dê ao projeto o seu próprio estilo pessoal. Boa programação!

Observação: não se esqueça de adicionar <link rel="stylesheet" href="styles.css"> em seu HTML para vincular sua folha de estilo e aplicar seu CSS