/**
 * The function `WszystkieLiczby` goes thru array and return smallest, highest and average of
 * all numbers.
 * @param {liczby} array with random numbers.
 * @return {object} object with a result of function `WszystkieLiczby`.
 * The result is logged into object console.
 */
let liczby = [1, 4, 17, 7, 77, 177];
let srednia = 0;
export function WszystkieLiczby(licz) {
  const min = Math.min(...licz);
  const max = Math.max(...licz);
  const suma = licz.reduce((a, b) => a + b, 0);
  const average = suma / licz.length;
  
  return { min, max, average };
}


// Testowanie funkcji z innymi danymi

const wynik = WszystkieLiczby(liczby);
console.log(wynik);
