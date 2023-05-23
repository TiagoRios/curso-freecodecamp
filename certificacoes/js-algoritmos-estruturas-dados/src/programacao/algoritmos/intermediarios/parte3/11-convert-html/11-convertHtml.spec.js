const { convertHTML } = require('./11-convertHtml.js')

  test('Deve retornar String Dolce &amp; Gabbana', () => {
    expect(convertHTML("Dolce & Gabbana"))
      .toEqual('Dolce &amp; Gabbana');
  }) 
  test('Deve retornar String Hamburgers &lt; Pizza &lt; Tacos', () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos"))
      .toEqual('Hamburgers &lt; Pizza &lt; Tacos');
  }) 
  test('Deve retornar String Sixty &gt; twelve', () => {
    expect(convertHTML("Sixty > twelve"))
      .toEqual('Sixty &gt; twelve');
  }) 
  test('Deve retornar String Stuff in &quot;quotation marks&quot;', () => {
    expect(convertHTML('Stuff in "quotation marks"'))
      .toEqual('Stuff in &quot;quotation marks&quot;');
  }) 
  test('Deve retornar String Schindler&apos;s List', () => {
    expect(convertHTML("Schindler's List"))
      .toEqual('Schindler&apos;s List');
  }) 
  test('Deve retornar String &lt;&gt;', () => {
    expect(convertHTML("<>"))
      .toEqual('&lt;&gt;');
  }) 
  test('Deve retornar String abc', () => {
    expect(convertHTML("abc"))
      .toEqual('abc');
  })