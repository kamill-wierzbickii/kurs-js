// Napisać prosty kalkulator który przyjmuje liczby X i Y.
// A następnie wykonuje obliczenia
// dodawanie, mnożenie, dzielenie, odejmowanie, potęgowanie, pierwiastkowanie.
// W tym momencie wyświetla dane na konsoli, wartości przyjmuje w kodzie
// Każdy typ obliczeń w oddzielnej funkcji.
// https://codesandbox.io/

function suma(x, y) {
  const z = x + y;

  return `${x} + ${y} = ${z}`;
}

function roznica(x, y) {
  const z = x - y;

  return `${x} - ${y} = ${z}`;
}

function mnozenie(x, y) {
  const z = x * y;

  return `${x} * ${y} = ${z}`;
}

function dzielenie(x, y) {
  if (y === 0) {
    return "Nie można dzielić przez zero!";
  }
  const z = x / y;

  return `${x} / ${y} = ${z}`;
}

function pierwiastekKwadratowy(x) {
  if (x < 0) {
    return "Nie można obliczyć pierwiastka z liczby ujemnej!";
  }

  const pierwiastek = Math.sqrt(x);
  return `Pierwiastek Kwadratowy z ${x} = ${pierwiastek}`;
}

function potega(x, y) {
  const wynik = Math.pow(x, y);
  return `${x} ^ ${y} = ${wynik}`;
}

// console.log(suma(3,5))
// console.log(roznica(5, 3));
// console.log(mnozenie(5, 3));
// console.log(dzielenie(15, 3));
// console.log(pierwiastekKwadratowy(20));
// console.log(potega(5, 3));

function kalkulator(operacja, a, b) {
  switch (operacja) {
    case "+":
      return suma(a, b);
    case "-":
      return roznica(a, b);
    case "*":
      return mnozenie(a, b);
    case "/":
      return dzielenie(a, b);
    case "pierwiastekKwadratowy":
      return pierwiastekKwadratowy(a);
    case "potega":
      return potega(a, b);
    default:
      return "Nieznana operacja";
  }
}

console.log(kalkulator("+", 4, 3));
console.log(kalkulator("-", 4, 3));
console.log(kalkulator("*", 5, 3));
console.log(kalkulator("/", 15, 3));
console.log(kalkulator("potega", 3, 5));
console.log(kalkulator("pierwiastekKwadratowy", 8));
