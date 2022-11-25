# Localizar por chave e valor

Faça uma função que olha através de um array de objetos (primeiro argumento) e retorna um array de todos os objetos que têm pares de nome e valor correspondentes (segundo argumento). Cada par de chave e valor do objeto fonte tem que estar presente no objeto da coleção se ele for ser incluído no array retornado.

Por exemplo, se o primeiro argumento é [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], e o segundo argumento é { last: "Capulet" }, em seguida, você deve retornar o terceiro objeto do array (o primeiro argumento), porque contém o nome e o seu valor, que foi passado como segundo argumento.