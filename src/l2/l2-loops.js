// Przypomnienie !!!

// W JavaScript Array to obiekt, który służy do przechowywania wielu wartości w jednej zmiennej.
// Może zawierać elementy dowolnego typu danych, takie jak liczby, ciągi znaków, obiekty, funkcje i inne tablice.
// W JavaScript tablice są dynamiczne, co oznacza, że mogą zmieniać swoją długość, a ich elementy mogą być modyfikowane,
// dodawane i usuwane w trakcie działania programu.

// Tablice w JavaScript są zdefiniowane przy użyciu nawiasów kwadratowych [], a ich elementy są oddzielane przecinkami.
// Na przykład:
const mojaTablica = [1, 2, 3, "cztery", true, { nazwa: "obiekt" }];

// Możemy również tworzyć puste tablice i dodawać do nich elementy dynamicznie:
const pustaTablica = [];
pustaTablica.push(1);
pustaTablica.push("dwa");
pustaTablica.push({ nazwa: "obiekt" });

// Tablice w JavaScript są indeksowane, co oznacza, że każdy element ma przypisany numer indeksu, zaczynając od 0.
// Możemy uzyskiwać dostęp do elementów tablicy za pomocą indeksu, na przykład
// mojaTablica[0] zwróci pierwszy element tablicy.
console.log('pierwszy element tablicy mojaTablica:', mojaTablica[0]);

// Pętle

// Pętla for: Pętla for wykonuje określoną liczbę iteracji,
// zdefiniowaną przez warunek początkowy, warunek końcowy i krok iteracji.
for (inicjalizacja; warunek; krok) {
  // kod do wykonania
}

// Pętla while: Pętla while wykonuje iteracje, dopóki warunek jest prawdziwy.
while (warunek) {
  // kod do wykonania
}
// Pętla do...while: Pętla do...while działa podobnie jak pętla while, ale sprawdza warunek po wykonaniu ciała pętli,
// więc gwarantuje wykonanie ciała pętli przynajmniej raz.

do {
  // kod do wykonania
} while (warunek);

// Pętla for...in: Pętla for...in iteruje po właściwościach obiektu.
// Jest to najczęściej używana do iterowania po właściwościach obiektu.
for (twojaZmienna in obiekt) {
  // kod do wykonania
}

// Pętla for...of: Pętla for...of iteruje po wartościach obiektu iterowalnego,
// takich jak tablice, ciągi znaków itp.
for (twojaZmienna of tablica) {
  // kod do wykonania
}

// Metody wbudowane w obiekt Array


// Metoda forEach() jest wbudowaną metodą obiektów tablicowych w JavaScript i służy do iteracji przez elementy tablicy.
// Jest to sposób częściej wybierany niż pętle for i for...of, który jest bardziej deklaratywny i czytelny.

array.forEach((element, index, array) => {
  // Kod do wykonania dla każdego elementu tablicy
});

// array.map(callback): Metoda map() iteruje przez każdy element tablicy i zwraca nową tablicę
// zawierającą wyniki wywołania funkcji zwrotnej (callback) dla każdego elementu.
const nowaTablica = array.map((element, index, array) => {
  // przetwarzanie elementu i zwracanie nowej wartości
  return newValue;
});

// array.filter(callback): Metoda filter() iteruje przez każdy element tablicy i zwraca nową
// tablicę zawierającą tylko te elementy, dla których funkcja zwrotna (callback) zwróciła wartość true.
const nowaTablica = array.filter((element, index, array) => {
  // zwraca true, aby element został zachowany, false aby go usunąć
  return condition;
});

// array.some(callback): Metoda some() sprawdza, czy co najmniej jeden element tablicy
// spełnia warunek zdefiniowany przez funkcję zwrotną (callback).
// Zwraca wartość true, jeśli co najmniej jeden element
// spełnia warunek, w przeciwnym razie false.
const wynik = array.some((element, index, array) => {
  // zwraca true lub false w zależności od warunku
  return condition;
});

// array.every(callback): Metoda every() sprawdza, czy wszystkie elementy tablicy spełniają warunek zdefiniowany
// przez funkcję zwrotną (callback).
// Zwraca wartość true, jeśli wszystkie elementy spełniają warunek, w przeciwnym razie false.

const wynik = array.every((element, index, array) => {
  // zwraca true lub false w zależności od warunku
  return condition;
});