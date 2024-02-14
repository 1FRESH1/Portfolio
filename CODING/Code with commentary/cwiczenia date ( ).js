/**
 *
 */
const d1 = new Date();
d1.setFullYear(1983);
const d2 = new Date();
d2.setFullYear(1982);
const porównanie = () => {
  if (d1 === d2) {
    return "To jest taka sama data";
  } else {
    return "Te daty she roznia!";
  }
};
console.log(porównanie());



// ------------------------------------------------------------------------------------------------------- //

/**
 * Object Date set current date.
 * The function `NowaData` returns new date set by date method
 * @return {date} return string with new set date.
 */

const data = new Date();
function NowaData(data) {
  data.setFullYear(2000);
  data.setMonth(0) + 1;
  data.setDate(1);
  return data;
}
const pelnyRok = NowaData(data);
console.log(pelnyRok);

/**
 * The function `WszystkieLiczby` goes thru array and return smallest, highest and average of
 * all numbers.
 * @param {liczby} array with random numbers.
 */
let liczby = [1, 4, 17, 7, 77, 177];
let suma = 0;
function WszystkieLiczby(licz) {
  licz.filter((spr) => spr === Math.max(...licz));
  licz.filter((spr) => spr === Math.min(...licz));
  licz.forEach((num) => {
    suma += num;
  });
  licz = suma / liczby.length;
  return licz;
}
const wynik = WszystkieLiczby(liczby);
console.log(wynik);
