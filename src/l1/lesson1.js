// typy proste
const c1 = 0; // number
const c2 = ''; // string
const c3 = false; // boolean
const c4 = null; // jest wartość ale pusta
const c5 = undefined; // nie zadeklarowana

// typy złożone
const c6 = {
  key: 'value',
  dowolnaNazwaKlucza: 0,
}; // object
const c7 = ['1', '2', '3']; // array

// zmienne
var zmienneVar = 'NIE LUBIMY, zmienne w CHUJ!, globalny w CHUJ';
const stałe = 'stałe';
let zmienne = 'zmienne';

// Konsola
// console.log('lesson1:18', { c1, c2, c3, c4, c5 });

function suma(a, b) {
  const c = a + b;

  return c;
}

function suma2(a, b) {
  const c = a + b;

  // return 'a + b = c';
  // return a + ' + ' + b + ' = ' + c
  return `${a} + ${b} = ${c}`;
}


console.log('lesson1:26', suma2(1,1));
