<h1 align="center" style="color:blue">
Algoritmos e estruturas de dados em JavaScript    
</h1>

Enquanto o HTML e o CSS controlam o conteúdo e o estilo de uma página, o JavaScript é usado para torná-lo interativo. Na certificação de Algoritmos e Estruturas de Dados em JavaScript, você aprenderá os fundamentos do JavaScript, incluindo variáveis, arrays, objetos, laços e funções.

Assim que souber os fundamentos abaixo, você aplicará esse conhecimento, criando algoritmos para manipular strings, fatorar números e até mesmo calcular a órbita da Estação Espacial Internacional.

Durante o processo, você também aprenderá dois estilos ou paradigmas de programação importantes: a Programação Orientada a Objetos (POO) e a Programação Funcional (PF).

## Configuração para utilizar ES6 modules com JEST/TEST.

### Import/Export: 
![Alt text](imagens-codesnap/code-modules-ES6.png)

Instale o babel:

##
    npm install --save-dev babel-jest

Altere o package.json:

### package.json

<pre> {
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}
</pre>

Instale as pre-configurações do babel:
###
    npm install @babel/preset-env --save-dev

Crie o arquivo: ".babelrc" na raiz do projeto:

### .babelrc

<pre>
  {
    "presets": ["@babel/preset-env"]
  }
</pre>