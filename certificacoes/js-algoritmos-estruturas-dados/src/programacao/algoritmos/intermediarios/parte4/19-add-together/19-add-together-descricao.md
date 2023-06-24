# Usar argumentos opcionais

Crie uma função que some dois argumentos juntos. Se apenas um argumento for fornecido, então retorne uma função que espera um argumento e retorna a sua soma.

Por exemplo, addTogether(2, 3) deve retornar 5 e addTogether(2) deve retornar uma função.

Chamar essa função retornada com um argumento retornará a soma:

*** var sumTwoAnd = addTogether(2);
*** sumTwoAnd(3) retorna 5.

Se algum argumento não for um número válido, retorne undefined.