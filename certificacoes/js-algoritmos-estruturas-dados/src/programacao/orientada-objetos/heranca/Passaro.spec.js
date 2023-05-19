const Animal = require('./Animal.js');
const { PassaroHeranca, PassaroSemHeranca } = require('./Passaro.js');


let passaroHeranca;
let passaroSemHeranca;

beforeAll(()=>{
  passaroHeranca = new PassaroHeranca();
  passaroSemHeranca = new PassaroSemHeranca();
});

describe('passaro com herança', () => {
  test('Deve ter constructor igual a Animal ', () => {
    expect(passaroHeranca.constructor === Animal).toBe(true);
  });
  test('Deve ter constructor diferente de PassaroHeranca ', () => {
    expect(passaroHeranca.constructor !== PassaroHeranca).toBe(true);
  });
  test('Deve ter constructor diferente de Animal', () => {
    expect(PassaroHeranca.constructor != Animal).toBe(true);
  });
  test('Deve ter constructor igual a PassaroHeranca', () => {
    expect(PassaroHeranca.constructor === PassaroHeranca).toBe(true);
  });
  test('Deve ser o prototype Animal', () => {
    expect(Animal.prototype.isPrototypeOf(passaroHeranca)).toBe(true);
  });
  test('Deve ser o prototype PassaroHeranca', () => {
    expect(PassaroHeranca.prototype.isPrototypeOf(passaroHeranca)).toBe(true);
  });
  test('Deve ser instancia de Animal', () => {
    expect(passaroHeranca instanceof Animal).toBe(true);
  });
  test('Deve ser instancia de PassaroHeranca', () => {
    expect(passaroHeranca instanceof PassaroHeranca).toBe(true);
  });
  test('Deve herdar metodo .comer() de Animal', () => {
    expect(passaroHeranca.comer()).toBe('comendo');
  });
  //preciso usar metodo Parente.call(child || this) 
  test('Deve herdar metodo .getNome() e .setNome() de Animal', () => {
    passaroHeranca.setNome('outro nome')
    expect(passaroHeranca.getNome()).toBe('outro nome');
  });
  test('Deve ter `PESO` como sua propria proriedade', () => {
    expect(passaroHeranca.hasOwnProperty('peso')).toBe(true);
  });
});


describe('passaro SEM herança', () => {
  test('Deve ter constructor igual a PassaroSemHeranca ', () => {
    expect(passaroSemHeranca.constructor === PassaroSemHeranca).toBe(true);
  });
  test('Deve ser o prototype PassaroSemHeranca', () => {
    expect(PassaroSemHeranca.prototype.isPrototypeOf(passaroSemHeranca)).toBe(true);
  });
  test('Deve ser instancia de PassaroSemHeranca', () => {
    expect(passaroSemHeranca instanceof PassaroSemHeranca).toBe(true);
  });
  test('Deve ter `PESO` como sua propria proriedade', () => {
    expect(passaroSemHeranca.hasOwnProperty('peso')).toBe(true);
  });
});