# algoritmos e estruturas de dados em javascript.

Estudos sobre programação em javascript.

# Para estudar e praticar código.
* [Referência Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Edabit](https://edabit.com/challenges/javascript) - Resolver desafios em Javascript
* [freecodecamp](https://www.freecodecamp.org/) - aprender código de graça. construir projetos e ganhar certificado.
* [EXLskills](https://exlskills.com/learn-en/courses/) - Dois cursos sobre JS. maioria sobre Java.
* [codecademy](https://www.codecademy.com/courses/introduction-to-javascript/) - Tem que seguir exatamente o que pede - Sem liberdade para criatividade.

# Observações
* Caso outra biblioteca de teste - descritas no README próprio.  

# Configuração para utilizar ES6 modules com JEST/TEST.
export {a}; / import {a} from 'path/arq.js';

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

arquivo na raiz -> .babelrc:
{
  "presets": ["@babel/preset-env"]
}