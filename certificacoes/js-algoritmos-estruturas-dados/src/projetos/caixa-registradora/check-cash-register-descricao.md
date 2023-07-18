# Caixa registradora

Implemente uma função de caixa registradora checkCashRegister() que aceita o preço de compra como o primeiro argumento (price), pagamento como o segundo argumento (cash) e dinheiro na registradora (cid) como o terceiro argumento.

cid é um array de duas dimensões listando a moeda disponível e a quantidade.

A função checkCashRegister() deve sempre retornar um objeto com a chave status e uma chave change.

Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se você não pode retornar o troco exato.

Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o valor para a chave change se for igual ao troco devido.

Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor, como o valor da chave change.

Unidade de moeda	Quantidade
Penny	             $0,01 (PENNY)
Nickel	             $0,05 (NICKEL)
Dime	             $0,1 (DIME)
Quarter	             $0,25 (QUARTER)
Dólar	             $1 (ONE)
Cinco dólares	     $5 (FIVE)
Dez dólares	         $10 (TEN)
Vinte dólares	     $20 (TWENTY)
Cem dólares	         $100 (ONE HUNDRED)

Veja abaixo um exemplo de um array de dinheiro no caixa (cid):

[
  ["PENNY", 1.01],       // 1 centavo 0,01
  ["NICKEL", 2.05],      // 5 centavos 0,05
  ["DIME", 3.1],         // 10 centavos 0,10
  ["QUARTER", 4.25],     // 25 centavos 0,25
  ["ONE", 90],           // 1 dolar 1,00     
  ["FIVE", 55],          // 5 dolares 5,00
  ["TEN", 20],           // 10 dolares 10,00
  ["TWENTY", 60],        // 20 dolares 20,00
  ["ONE HUNDRED", 100]   // 100 dolares 100,00
];