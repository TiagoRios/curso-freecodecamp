// 
const MOEDAS = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
}

/**
 * Simula um caixa.
 * status = [OPEN, CLOSED, INSUFFICIENT_FUNDS]
 * 
 * @param {Number} price preço da compra.
 * @param {Number} cash pagamento da compra.
 * @param {Moedas[][]} cid Array com os tipos de moeda/cédulas disponíveis no caixa.
 * @returns {Object} Um objeto com o status do caixa e array com valores atualizados.
 */
function checkCashRegister(price, cash, cid) {
    const TROCO_INICIAL = Number((cash * 100 - price * 100).toFixed(0)); // (problemas com precisão).

    let change = [];
    let troco = TROCO_INICIAL;
    let totalDinheiroNoCaixa = cid.reduce((prev, curr) => prev += Number(curr[1] * 100), 0);

    // evitar que entrar nos laços.
    if (TROCO_INICIAL > totalDinheiroNoCaixa) {
        // console.log({ status: "INSUFFICIENT_FUNDS", change: [] });
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        // variáveis locais são recriadas a cada novo iteração. 
        let somaMoedasParaTroco = 0;
        let arrTemporario = [];
        let nomeDaMoeda = cid[i][0];
        let valorDaMoeda = cid[i][1];

        let somaTotalMoedas = Number((valorDaMoeda * 100).toFixed(0))
        let valorUnitarioMoeda = Number((MOEDAS[nomeDaMoeda] * 100).toFixed(0));
        let quantidadeDeMoedas = somaTotalMoedas / valorUnitarioMoeda;

        if (TROCO_INICIAL === totalDinheiroNoCaixa) {
            arrTemporario.unshift([nomeDaMoeda, valorDaMoeda]) //Ex: [["FIVE", 60], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
        }

        while (valorUnitarioMoeda <= troco) {
            if (quantidadeDeMoedas === 0) { // Não use mais essa moeda. Procure outra moeda menor.
                break; // break while.
            }
            quantidadeDeMoedas -= 1;

            somaMoedasParaTroco += valorUnitarioMoeda;
            troco -= valorUnitarioMoeda;

            if (arrTemporario.length === 0) { // Array vázio, preenche.
                arrTemporario.push([nomeDaMoeda, somaMoedasParaTroco]);
            } else { // Atualiza as mudanças no mesmo array..
                arrTemporario = arrTemporario.map(x => [nomeDaMoeda, somaMoedasParaTroco]);
            }
        } // while

        if (TROCO_INICIAL === totalDinheiroNoCaixa) {
            change.unshift(...arrTemporario.map(moeda => [moeda[0], moeda[1] / 100]));
        } else {
            change.push(...arrTemporario.map(moeda => [moeda[0], moeda[1] / 100]));
        }
    } // for

    if (TROCO_INICIAL === totalDinheiroNoCaixa) {
        // console.log({ status: "CLOSED", change: change });
        return { status: "CLOSED", change: change };
    } else if (troco > 0) { // NÂO tenho o troco EXATO.
        // console.log({ status: "INSUFFICIENT_FUNDS", change: [] });
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (troco === 0) { // Troco devolvido (CORRETAMENTE).  
        // console.log({ status: "OPEN", change: change });
        return ({ status: "OPEN", change: change });
    } else {
        return "Alguma outra regra de negócio."
    }
}

module.exports = {
    checkCashRegister
}