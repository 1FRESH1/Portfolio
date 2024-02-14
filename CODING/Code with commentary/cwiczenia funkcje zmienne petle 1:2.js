

/**
 * The function "Osoba" returns a string with the name and age of a person.
 *
 * @param imie 'Grzegorz'
 * @param wiek The parameter "wiek" represents the age of the person. In this case, the default value
 * is 41.
 *
 * @return a string that states the name and age of the person.
 */
function Osoba(imie = "Grzegorz", wiek = 41) {
  return `Mam na imie ${imie}, i mam ${wiek} lat`;
}
console.log(Osoba());

/**
 * The function Osoba1 returns a string with name and age of a person.
 * @param {*} imie `Grzegorz`
 * @param {*} wiek This parameter stands for age of the person.
 * @returns a string that states the name and age of that person.
 */
function Osoba1(imie, wiek) {
  imie = "Grzegorz";
  wiek = 41;
  return imie + " " + wiek;
}
Osoba1();
console.log(Osoba1());

/**
 * Arrow function returns welcome message, from arrow function,
 * `Mam na imie Grzegorz i mam 41 lat`.
 */
/* The code `console.log(((imie, wiek) => {return `Mam na imie  i mam `})('Grzegorz',
41));` is calling an arrow function with the arguments 'Grzegorz' and 41. The arrow function returns
a string that states the name and age of the person. The `console.log` function is then used to
print the returned string to the console. */

console.log(
  ((imie, wiek) => {
    return `Mam na imie ${imie} i mam ${wiek}`;
  })("Grzegorz", 41)
);

/**
 * The function Osoba2 returns a string with name and age of a person
 * @param {*} imie `Grzegorz`
 * @param {*} wiek parameter declares age of that person
 * @returns string with welcome message which states name and age of that person.
 */
const Osoba2 = (imie, wiek) => {
  const wiadomosc = "Mam na imie " + imie + " i mam " + wiek + " lat";
  return wiadomosc;
};
const imie = "Grzegorz";
const wiek = 41;
console.log(Osoba2(imie, wiek));

/**
 * The class constructor declares two parameters `this.imie` and `this.wiek`.
 * Class przedstawSie, returns string `wiadomosc`.
 * Function `osoba` creates new class Osoba3 which has two arguments `Grzegorz` and age of,
 * that person `41`.
 */
/* The class "Osoba3" represents a person with a name and age, and has a method to introduce
themselves. */
class Osoba3 {
  constructor(imie, wiek) {
    this.imie = imie;
    this.wiek = wiek;
  }
  przedstawSie() {
    const wiadomosc = `Mam na imie ${this.imie} i mam ${this.wiek} lat!`;
    return wiadomosc;
  }
}
const osoba = new Osoba3("Grzegorz", 77);
console.log(osoba.przedstawSie());

/**
 * The function `Osoba4` returns string with person name and age.
 * @param {*} imie1 `Grzegorz`
 * @param {*} wiek1 `477`
 * @returns string
 */
/**
 * The function `Osoba4` creates an object with properties `imie1` and `wiek1`, and the function
 * `przedstawSie` calls `Osoba4` with specific values and assigns the returned object to
 * `przedstawSie`. Finally, the values of `imie1` and `wiek1` are logged to the console.
 *
 * @param imie1 The parameter "imie1" represents the name of a person.
 * @param wiek1 The parameter "wiek1" represents the age of the person.
 *
 * @return The function `Osoba4` returns an object with properties `imie1` and `wiek1`.
 */
const Osoba4 = (imie1, wiek1) => {
  return { imie1, wiek1 };
};
const przedstawSie = Osoba4("Grzegorz", 477);
const { imie1, wiek1 } = przedstawSie;
console.log(`Mam na imie ${imie1} i mam ${wiek1}`);

/**
 * The variable `Osoba5` creates array with two values, `Grzegorz` and `41`.
 * The variable `Dane1` assign to index 0 in array `Osoba5`.
 * The variable `Dane2` assign to index 1 in array `Osoba5`.
 * Finally values from array `Osoba5` are logged to the console as a string.
 */
/* The code is creating an array called `Osoba5` with two values: `'Grzegorz'` and `41`. Then, it
assigns the value at index 0 of `Osoba5` to the variable `Dane1` and the value at index 1 to the
variable `Dane2`. Finally, it logs a string to the console that includes the values of `Dane1` and
`Dane2`. */
const Osoba5 = ["Grzegorz", 41];
Dane1 = Osoba5[0];
Dane2 = Osoba5[1];
console.log(`Mam na imie ${Dane1} i mam ${Dane2} lat!!!!!`);

/**
 * The function `oliwka` returns an array, which includes two properties `imie2` and `wiek2`. The function
 * `przedstawiaSie` calls oliwka() with specific values and assings the returned object to `przedstawiaSie`.
 * @param {*} imie2 `Oliwka` represents the name of that person.
 * @param {*} wiek2 `11` represents age of that person.
 * @returns The function oliwka returns an array with properties `imie2` and `wiek2`.
 */
/**
 * The function "oliwka" takes in two parameters (imie2 and wiek2) and returns an array containing
 * those parameters.
 *
 * @param imie2 The parameter "imie2" is a string representing a name.
 * @param wiek2 The parameter "wiek2" represents the age of the person being introduced.
 *
 * @return The function `oliwka` returns an array containing the values of `imie2` and `wiek2`.
 */
const oliwka = (imie2, wiek2) => {
  return [imie2, wiek2];
};
const przedstawiaSie = oliwka("Oliwka", 11);
const [imie2, wiek2] = przedstawiaSie;
console.log(`Mam na imie ${imie2} i mam ${wiek2} lat`);

/**
 * The function Oliwka1  calls  `function` from it's argument.
 * @param {*} funkcja The function is a callback from function 'Oliwka1' which was it's argument.
 * @param {*} imie3 The parameter 'imie3' is a string representing a name.
 * @param {*} wiek3 The parameter 'wiek2' represents the age of the person.
 */
/**
 * The code defines a function called Oliwka1 that takes in another function, an imie3 (name), and a
 * wiek3 (age), and then calls that function with the provided name and age.
 *
 * @param funkcja The parameter "funkcja" is a function that will be called within the "Oliwka1"
 * function.
 * @param imie3 'Oliwka'
 * @param wiek3 The parameter "wiek3" represents the age of the person.
 */
function Oliwka1(funkcja, imie3, wiek3) {
  console.log("To jest funkcja w funkcji!");
  funkcja(imie3, wiek3);
}

function NazywamSie(imie3, wiek3) {
  console.log(`Nazywam się ${imie3} i mam ${wiek3} lat!`);
}
Oliwka1(NazywamSie, "Oliwka", 11);
