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
  licz.filter((spr) => spr === Math.max(...licz));
  licz.filter((spr) => spr === Math.min(...licz));
  licz.forEach((num) => {
    srednia += num;
  });
  licz = srednia / liczby.length;
  return licz;
}
const wynik = WszystkieLiczby(liczby);
console.log(wynik);