# Algoritmos e estruturas de dados em JavaScript

Enquanto o HTML e o CSS controlam o conteúdo e o estilo de uma página, o JavaScript é usado para torná-lo interativo. Na certificação de Algoritmos e Estruturas de Dados em JavaScript, você aprenderá os fundamentos do JavaScript, incluindo variáveis, arrays, objetos, laços e funções.

Assim que souber os fundamentos abaixo, você aplicará esse conhecimento, criando algoritmos para manipular strings, fatorar números e até mesmo calcular a órbita da Estação Espacial Internacional.

Durante o processo, você também aprenderá dois estilos ou paradigmas de programação importantes: a Programação Orientada a Objetos (POO) e a Programação Funcional (PF).

# Configuração para utilizar ES6 modules com JEST/TEST.

export moduloNormal;
export default meuModulo;
import meuModulo { moduloNormal } from 'path/arq.js';

npm install --save-dev babel-jest

package.json:
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}

npm install @babel/preset-env --save-dev

arquivo na raiz crie o arquivo: ".babelrc" com:
{
  "presets": ["@babel/preset-env"]
}