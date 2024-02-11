/**
 * Function 'Osoba' takes two parameters, 'imie' and 'wiek';
 * @param {*} imie parameter that represents person name.
 * @param {*} wiek parameter that represents person age.
 * @returns greeting message from function 'Osoba'.
 */
/**
 * The function "Osoba" returns a greeting message with the person's name and age.
 *
 * @param imie 'Grzegorz'
 * @param wiek The parameter "wiek" represents the age of the person.
 *
 * @return a string that includes the name and age of the person.
 */
function Osoba(imie, wiek) {
  return `Cześć, mam na imię ${imie}, uczę się na programistę i mam ${wiek} lat!`;
}
console.log(Osoba("Grzegorz", 41));

/**
 * The function variable expression 'Osoba1' returns a greeting message with the person's name and age.
 * @param {*} wiek the parameter 'wiek' represents age of this person.
 * @param {*} imie 'Grzegorz' represents, person's name.
 * @returns string that includes name and age of this person.
 *
 */
/**
 * The function `Osoba1` takes in a person's age and name as parameters and returns a greeting message
 * with the person's name, profession, and age.
 *
 * @param wiek 41
 * @param imie 'Grzegorz'
 *
 * @return The function `Osoba1` returns a string that includes the name, profession, and age of a
 * person.
 */
const Osoba1 = (wiek, imie) => {
  return `Mam na imie ${imie}, jestem programistą, i mam ${wiek} lat!`;
};
const Greeting = Osoba1(41, "Grzegorz");
console.log(Greeting);

/**
 * The class 'Osoba2' defines two parameters, 'wiek1' and 'imie1' which represents person's name.
 * Class 'PrzedstawSie' define 'imie1' and 'wiek1'.
 * The instance 'Osoba3' takes new class 'Osoba2' and declares two arguments '47' and 'Grzegorz'
 * Result is logged into the console.
 */
/* The class "Osoba2" represents a person with a given age and name, and has a method to introduce
themselves. */
class Osoba2 {
  constructor(wiek1, imie1) {
    this.wiek1 = wiek1;
    this.imie1 = imie1;
  }
  PrzedstawSie() {
    return `Mam na imie ${this.imie1}, jestem programista i mam ${this.wiek1} lat!`;
  }
}
const Osoba3 = new Osoba2(47, "Grzegorz");
console.log(Osoba3.PrzedstawSie());

/**
 * The function 'Osoba4' returns two parameters, 'imie2' and 'wiek2.
 * Result is deconstructed into new object 'osoba'.
/**
 * The function `osoba4` creates an object with properties `imie2` and `wiek2` and returns it.
 * 
 * @param imie2 'Grzegorz'
 * @param wiek2 77
 * 
 * @return The function `osoba4` returns an object with properties `imie2` and `wiek2`, which are
 * assigned the values passed as arguments `imie2` and `wiek2` respectively.
 */
const osoba4 = (imie2, wiek2) => {
  return { imie2, wiek2 };
};
const greeting = osoba4("Grzegorz", 77);
const { imie2, wiek2 } = greeting;
console.log(greeting);

/**
 * The function 'Osoba5' pass two properties 'imie3' and 'wiek3' and returns them.
 * @param imie3 'Grzegorz'
 * @param wiek3 47
 * @return The function 'Osoba5' returns string with properties 'imie3' and 'wiek3', which are assigned
 * the values passed as arguments.
 */
console.log(
  ((imie3, wiek3) => {
    return `Mam na imie ${imie3}, jestem programistą i mam ${wiek3} lat!`;
  })("Grzegorz", 47)
);

/**
 * The function 'Osoba6' creates an array with two values, `Grzegorz` and `74`.
 * Logs the result into console.
 */

/**
 * The function `osoba6` returns an array containing the values 'Grzegorz' and 74, and the
 * `Array.isArray` function is used to check if the return value of `osoba6` is an array.
 */
const osoba6 = () => ["Grzegorz", 74];
console.log(osoba6(), Array.isArray(osoba6()));

const osoba7 = ["Grzegorz", 777];
const nowaOsoba = osoba7[1];
const tablica = nowaOsoba;
console.log(tablica, typeof tablica);

// ------------------------------------------------------------------------------------------------ //

/**
 * The function `DniTygodnia`, declares two properties `tablica1` and `znaki`. Than creates bloc fo code
 * in which variable `wynik` filter thru array `tablica1` and returns value which is longer than
 * six letters.
 * Instance `nowaTablica` declares function `DniTygodnia` with it's arguments.
 * Result is logged to the console.
 *
 */

/**
 * Filters an array of strings based on the length of each string.
 * @param {string[]} tablica1 - The array of strings to filter.
 * @param {number} znaki - The minimum length of strings to include in the result.
 * @returns {string[]} - The filtered array of strings.
 */

const tablica1 = [
  "poniedzialek",
  "wtorek",
  "sroda",
  "czwartek",
  "piatek",
  "sobota",
  "niedziela",
];
function DniTygodnia(dni) {
  return dni.filter((dzien) => dzien.length > 6);
}
console.log(DniTygodnia(tablica1));

/**
 * Fliters an array of numbers based on the even number.
 * @param {number[]} numery - The array of numbers to filter.
 * @returns {number[]} The numbers which are even
 * Result is logged to the console.
 */

/**
 * Filters out odd numbers from the given array.
 *
 * @param {number[]} numerki - The array of numbers to filter.
 * @returns {number[]} - The array of even numbers.
 */
const numery = [12, 15, 16, 17, 77, 78, 70];
function MojeNumery(numerki) {
  return numerki.filter((liczba) => liczba % 2 === 0);
}
console.log(MojeNumery(numery));

/**
 * Filters array `rozne`, based on strings in that array.
 * @param {string[]} tablica 2 - The array of mixed properties to filter
 * @returns {string[]} The strings from filtered array.
 */
/**
 * Filters an array to only include string values.
 * @param {Array} tab - The input array.
 * @returns {Array} - The filtered array containing only string values.
 */
const tablica2 = [
  "Tata",
  { samochód: "fiat" },
  77,
  "Oliwka",
  false,
  true,
  "Dom",
];
function Porzadek(tab) {
  return tab.filter((filtr) => typeof filtr === "string");
}
console.log(Porzadek(tablica2));
