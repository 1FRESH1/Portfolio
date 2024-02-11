/**
 * The function `Tekst`, filter thru array `dane`.
 * @array dane, consist mixed value.
 * @return string from filtered function `Tekst`
 * Instance `wynik` takes function `Tekst` as a argument.
 */

/*
 * Filters an array and returns only the elements that are of type string.
 * @param {Array} szukaj - The array to be filtered.
 * @returns {Array} - The filtered array containing only string elements.
 */
const dane = ["Oliwka", {}, "Kochana", 11, "moja", "córeczka", "Tata"];
function Tekst(szukaj) {
  return szukaj.filter((spr) => typeof spr === "string");
}
const wynik = Tekst(dane);
console.log(wynik);

/**
 * The function `NowyCzas`use date methods to set date time at specific year, moth, day.
 * @return string with new date.
 * Instance `newYear` takes function `NowyCzas` with argument of variable `czas`.
 * The result is logged into object console.
 */
const czas = new Date();
function NowyCzas(zmiana) {
  zmiana.setFullYear(2000);
  zmiana.setMonth(0);
  zmiana.setDate(1);
  return zmiana;
}
const newYear = NowyCzas(czas);
console.log(newYear);

/**
 * The function `Wyliczenia` creates new objects from array `liczby1`, `lowest`, `highest` and `average`.
 * @return numbers from array `liczby1` in specific order.
 * The result is logged into object console.
 */
/**
 * Calculates the lowest, highest, and average value of an array of numbers.
 * @param {number[]} licz - The array of numbers.
 * @returns {Object} - An object containing the lowest, highest, and average values.
 */
let liczby1 = [2, 4, 5, 77, 177, 74, 78, 17];
function Wyliczenia(licz) {
  let lowest = Math.min(...licz);
  let highest = Math.max(...licz);
  let average = licz.reduce((aku, akumu) => aku + akumu, 0);
  let srednia = average / liczby1.length;
  return {
    lowest: lowest,
    highest: highest,
    srednia: srednia,
  };
}
const wynik1 = Wyliczenia(liczby1);
console.log(wynik1);

/**
 * The function `Zlicz` calculates the sum, average and product of an array.
 * @param {number[]} wszystkie - The array of numbers.
 * @return - An object containing the sum, average, and product.
 * The result is logged into console.
 */

let wszystkie = [4, 6, 7, 17, 27, 87, 89];
function Zlicz(oblicz) {
  let suma = oblicz.reduce((arr, arrr) => arr + arrr, 0);
  let srednia = suma / oblicz.length;
  let iloczyn = oblicz.reduce((arr, arrr) => arr * arrr, 1);
  return {
    suma: suma,
    srednia: srednia,
    iloczyn: iloczyn,
  };
}
const obliczone = Zlicz(wszystkie);
console.log(obliczone);

/**
 * The function `Data` returns object with date information, year, month, day, hour, minutes, seconds
 * @param {string} time - new Date() object.
 * @return - object with full date and time.
 * The result is logged into console.
 */
const time = new Date();
function Data(full) {
  const rok = full.getFullYear();
  const miesiac = (full.getMonth() + 1).toString().padStart(2, "0");
  const dzien = full.getDate();
  const godzina = full.getHours();
  const minuty = full.getMinutes();
  const sekundy = full.getSeconds();
  return {
    rok: rok,
    miesiac: miesiac,
    dzien: dzien,
    godzina: godzina,
    minuty: minuty,
    sekundy: sekundy,
  };
}
const nowe = Data(time);
console.log(nowe);

/**
 * The function `Data1` return object with full year and time.
 * @param {*} czas is a parameter of a function `Data1`
 * @returns object with ful date and time
 * Result is logged into console.
 */
/**
 * Returns a formatted string representing the date and time.
 * @param {Date} czas - The date and time object.
 * @returns {string} - The formatted date and time string.
 */
function Data1(czas) {
  const rok = czas.getFullYear();
  const miesiac = czas.getMonth() + 1;
  const dzien = czas.getDate();
  const godzina = czas.getHours();
  const minuty = czas.getMinutes();
  const sekundy = czas.getSeconds();
  const milisekundy = czas.getMilliseconds();
  return `${rok}-${miesiac
    .toString()
    .padStart(2, "0")}-${dzien}-${godzina}-${minuty}-${sekundy}-${milisekundy
    .toString()
    .padStart(4, "0")}`;
}
const wszystko = Data1(time);
console.log(wszystko);

/**
 * The function `Tablica` returns object with even numbers from array `parzyste`
 * @param parzyste - array contain numbers
 * @return {string}- The even and sorted numbers from array `parzyste`
 * The result is logged into console.
 */
const parzyste = [3, 5, 7, 77, 78, 764, 177, 54, 62];
function Tablica(licz) {
  let parzyste = licz.filter((arr) => arr % 2 === 0).join();
  let sortowanie = licz
    .sort((a, b) => {
      return a - b;
    })
    .join();
  return {
    parzyste: parzyste,
    sortowanie: sortowanie,
  };
}
const sortowane = Tablica(parzyste);
console.log(sortowane);


/**
 * Sorts and returns an array of even numbers in ascending order.
 * @param {number[]} licz - The array of numbers to filter and sort.
 * @returns {number[]} - The sorted array of even numbers.
 */
const liczby2 = [2, 4, 5, 6, 66, 77, 74, 78, 178];
function ParzysteSortowane(licz) {
  const parzyste = licz
    .filter((arr) => arr % 2 === 0)
    .sort((a, b) => {
      return a - b;
    });

  return parzyste;
}
const wynik2 = ParzysteSortowane(liczby2);
console.log(wynik2);

/**
 * The function `Nowa` returns new array only with strings, which are in alphabetic order.
 * @param {tab} array - Array containing mixed, types od data.
 * @return {object} object - The new object with strings in alphabetic order.
 * Result is logged into console.
 */

const tab = [
  "Tata",
  "jest",
  "gotowy",
  "byc",
  "programista",
  44,
  {},
  777,
  "od",
  "zaraz",
];
function nowa(znajdz) {
  let sortowanie = znajdz.filter((arr) => typeof arr === "string");
  let noweSortowanie = sortowanie.map((element) =>
    typeof element === "string" ? element.toLowerCase() : element
  );
  noweSortowanie.sort();

  return sortowanie, noweSortowanie;
}
const tablica3 = nowa(tab);
console.log(tablica3);
