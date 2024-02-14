/**
 * The result of subtracting the initial amount from the final amount.
 * @type {number}
 */
const kwotaPoczatek = 70;
const kwotaKoniec = 177;
const wynik = kwotaKoniec - kwotaPoczatek;
console.log(wynik);

/**
 * The number of steps.
 * @type {number}
 */
let kroki = 7000;
kroki += 1000;
kroki += 500;
console.log(kroki);

/**
 * The distance variable represents the distance in units.
 * @type {number}
 */
const distance = 700;
const time = 4;
console.log(distance / time);

/**
 * Represents the value of kolo.
 * @type {number}
 */
const kolo = 70;
console.log(kolo * kolo * 3.14);

const euro = 77;
/**
 * The exchange rate between Euro and Dollar.
 * @type {number}
 */
const euroDolar = 1.17;
console.log(euro * euroDolar);

/**
 * Represents the current year.
 * @type {Date}
 */
const rok = new Date();
const wiek = 41;
console.log(rok - wiek);


/**
 * Represents the total number of seconds calculated from hours, minutes, and seconds.
 * @type {number}
 */
const godziny = 22;
const minuty = 25;
const sekundy = 17;
const seconds = godziny * 3600 + minuty * 60 + sekundy;
console.log(seconds);


/**
 * Calculates the largest number among the given numbers.
 *
 * @param {...number} numbers - The numbers to compare.
 * @returns {number} The largest number.
 */
const liczbaJeden = 17;
const liczbaDwa = 27;
const liczbaTrzy = 37;
const liczbaNajwieksza = Math.max(liczbaJeden, liczbaDwa, liczbaTrzy);
console.log(liczbaNajwieksza);


/**
 * Represents a person.
 * @typedef {string} Person
 * @property {string} imie - The person's name.
 * @property {number} wiek - The person's age.
 * @property {string} zawod - The person's profession.
 */
const imie = "Greg ";
const wieek = 41;
const zawod = " JS Dev";
const Person = `Nazywam się ${imie}, mam ${wieek} lat, z zawodu jestem ${zawod}`;
console.log(Person);

/**
 * Represents a parzysta number.
 * @type {number}
 */
const parzysta = 77;
let text = "";
teeekst = () => {
  if (parzysta % 2 === 0) {
    text = "parzysta";
  } else {
    text = "nie parzysta";
  }
};
teeekst();
console.log(text);


/**
 * Sum of three numbers.
 *
 * @type {number}
 */
const liczbaJed = 17;
const liczbaDw = 27;
const liczbaTrz = 37;
const arytmetyk = liczbaJed + liczbaDw + liczbaTrz;
console.log(arytmetyk / 3);

/**
 * The number that is used to check divisibility.
 * @type {number}
 */
const podzielna = 70;
if (podzielna % 2 == 0) {
  console.log("Jest podzielna");
} else {
  console.log("Nie jest podzielna");
}
if (podzielna % 3 == 0) {
  console.log("Jest podzielna");
} else {
  console.log("Nie jest podzielna");
}
if (podzielna % 5 == 0) {
  console.log("Jest podzielna");
} else {
  console.log("Nie jest podzielna");
}


/**
 * Calculates the area of a triangle.
 *
 * @param {number} trojkatPod - The length of the base of the triangle.
 * @param {number} trojkatWys - The height of the triangle.
 * @returns {number} The area of the triangle.
 */
const trojkatPod = 17;
const trojkatWys = 27;
const trojPole = trojkatPod * trojkatWys;
console.log(trojPole / 2);

/**
 * Represents a Pole object.
 * @returns {Object} The Pole object with properties pod and wys.
 */
function Pole() {
  return {
    pod: 17,
    wys: 27,
  };
}
const pol = Pole();
console.log(pol.pod * pol.wys);

/**
 * Represents a Polee object.
 * @constructor
 */
function Polee() {
  this.pods = 17;
  this.wyso = 27;
}
const wynikk = new Polee();
console.log(wynikk.pods * wynikk.wyso);

/**
 * Represents the age of a human.
 * @type {number}
 */
const wiekCzłowieka = 5;
const pierwszyRok = 15;
const drugiRok = 9;
const kolejneLata = 4;
let wiekPsa = 0;
if (wiekCzłowieka === 1) {
  wiekPsa = pierwszyRok;
} else if (wiekCzłowieka === 2) {
  wiekPsa = pierwszyRok + drugiRok;
} else {
  wiekPsa = pierwszyRok + drugiRok + (wiekCzłowieka - 2) * kolejneLata;
}
console.log(wiekPsa);

/**
 * Represents a function that returns an object with base and height values.
 * @returns {Object} An object with base and height properties.
 */
const cos = function zakres() {
  return {
    podstawa: 17,
    wysokosc: 77,
  };
};
const wyniki = cos();
console.log(wyniki.podstawa * wyniki.wysokosc);

/**
 * Represents a whole number.
 * @type {number}
 */
const całkowita = 77;
let sumaCyfr = 0;
for (const cyfra of całkowita.toString()) {
  sumaCyfr += parseInt(cyfra);
}
console.log("Suma cyfr z calkowita to ", sumaCyfr);

/**
 * The function "cwiczenie" checks if a given number is even or odd and returns a corresponding
 * message.
 *
 * @param cwicz The parameter "cwicz" is a number that is being checked for being even or odd.
 *
 * @return the string "To nie jest liczba parzysta" because the input number 1089677 is not divisible
 * by 2.
 */
const cwiczenie = (cwicz) => {
  if (cwicz % 2 === 0) {
    return "To jest liczba parzysta";
  }
  return "To nie jest liczba parzysta";
};
console.log(cwiczenie(1089677));

const bok1 = 77;
const bok2 = 57;
console.log((bok1 * bok2) / 2);

poleTrojkata = (podstawa, bok) => podstawa * bok * 0.5;
const podstawa = 77;
const bok = 57;
/**
 * Calculates the area of a triangle.
 *
 * @param {number} base - The length of the base of the triangle.
 * @param {number} height - The height of the triangle.
 * @returns {number} The area of the triangle.
 */
const area = poleTrojkata(podstawa, bok);
console.log(`Pole trojkata wynosi: ${area}`);

/*
// eslint-disable-next-line max-len
* This code is swapping the values of `zmienna1` and `zmienna2` using array destructuring. It assigns
* the value of `zmienna2` to `zmienna1` and the value of `zmienna1` to `zmienna2`. Then it logs the
* values of `zmienna1` and `zmienna2` to the console.
*/
let zmienna1 = "To na miejsce drugiego!";
let zmienna2 = "To na miejsce pierwszego!";
[zmienna1, zmienna2] = [zmienna2, zmienna1];
console.log(`${zmienna1} ${zmienna2}`);

/*
 * The code is defining a function called `zamiana`
 * that takes two parameters `zdanie1` and `zdanie2`.
 * The function returns an array with the values of `zdanie2` and `zdanie1` swapped.
 */
zamiana = (zdanie1, zdanie2) => [zdanie2, zdanie1];

const zdanie1 = "To jest zdanie pierwsze!";
const zdanie2 = "To jest zdanie drugie!";
const odpowiedz = zamiana(zdanie1, zdanie2);

console.log(odpowiedz);

/*
 * This code is swapping two variables `x` and `y` using template literals.
 * It assigns the value of `x` to `y` and the value of `y` to `x`. Then it logs
 * the values of `x` and `y` to the console.
 */

const x = 7;
const y = 17;
console.log(`Po zamianie: x = ${y}, y = ${x}`);

/* The code defines a function called `duzeLitery` that takes a parameter `tekst`. The function returns
the value of `tekst`. */
duzeLitery = (tekst) => tekst;

const tekst = "to sa duze litery";
const zamian = duzeLitery(tekst).toUpperCase();

console.log(`To jest zamian tekstu na duze litery: ${zamian}`);

/**
 * Function that returns an object with a text property.
 * @returns {Object} An object with a text property.
 */
function zamiana() {
  return {
    txt: "TO BEDA MALE LITERY!",
  };
}
const zamiana1 = zamiana();
console.log(zamiana1.txt);

/*
 * This code is arrow function, which is immediately invoked after declaration.
 * After using to lower case method, this expression returns changed text.
 * Result of that expression is assigned to variable toto, and value of that variable
 * is shown in console.
 */
/* This code is defining an immediately invoked arrow function that returns the string "TO SA MALE
LITERY!" in lowercase. The function is immediately invoked and the result is assigned to the
variable `toto`. Then, the value of `toto` is logged to the console. */
const toto = (() => "TO SA MALE LITERY!".toLowerCase())();
console.log(`TO SA MALE LITERY: ${toto}`);

/**
 * Represents a male object.
 * @constructor
 */
function male() {
  this.zdanie = "TO BEDA MALE LITERY".toLowerCase();
}
const duze = new male();
console.log(duze.zdanie);

/**
 * This function returns a lowercase version of the string "TO BEDZIE MALY TEKST!".
 * @returns {string} The lowercase version of the string.
 */
const wyrazenie = function namale() {
  return "TO BEDZIE MALY TEKST!".toLowerCase();
};
const nowe = wyrazenie();
console.log("To bedzie cos nowego: ", nowe);

/*
 * Console object is logging arrow function which is invoked immediately. Arrow function,
 * returns the string "to beda duze litery" to upper case. Value is logged inside console object.
 */

/*
 * The code is defining an immediately invoked arrow function that returns the string "to beda duze
 * litery!" in uppercase. The function is immediately invoked and the result is logged to the console
 * using `console.log()`.
 */

console.log((() => "to beda duze litery!".toUpperCase())());

/**
 * Returns the first element of the array in lowercase.
 * @returns {string} The first element of the array in lowercase.
 */
function tablica() {
  const tab1 = ["TO SA MALE LITERY", "A TO JEST DRUGI TEKST Z MALYMI LITERAMI"];
  const tab2 = tab1[0].toLowerCase();
  return tab2;
}
const tab = tablica();
console.log(tab);


/**
 * This function updates the values of tab7 array based on the values of tab9 array.
 */
const tab7 = [];
function tablica2() {
  const tab9 = ["TO JEST PIERWSZY RZAD ZNAKOW", "TO JEST DRUGI RZAD ZNAKOW"];
  // eslint-disable-next-line prefer-destructuring
  tab7[0] = tab9[0];
  tab7[1] = tab9[1].toLowerCase();
}
tablica2();
console.log(tab7);

/**
 * Returns a new array with the first element of taab and the second element of taab converted to lowercase.
 * @returns {string[]} The new array with the modified elements.
 */
const tablica3 = () => {
  const taab = ["TO JEST LINIA NR 1", "TO JET LINIA NR 2"];
  const taab1 = Object.freeze([]);
  const taab2 = [...taab1];
  taab2.push(taab[0]);
  taab2.push(taab[1].toLowerCase());
  return taab2;
};
const taab1 = tablica3();
console.log(taab1);

/**
 * Object representing a calculator.
 * @type {Object}
 * @property {function} dodaj - Function to add two numbers.
 * @property {function} odejmij - Function to subtract two numbers.
 */
const kalkulator = {
  dodaj(a, b) {
    return a + b;
  },
  odejmij(a, b) {
    return a - b;
  },
};
const wynik1 = kalkulator.dodaj(7, 7);
console.log(wynik1);

/*
 * Globally declared variable kolo1, is being used inside arrow function promienKola to calculate,
 * circle radius. Which than is logged to console object.
 */
/* This code is calculating the area of a circle using the formula A = πr^2. The variable `kolo1` is
assigned a value of 27, which represents the radius of the circle. The arrow function `promienKola`
calculates the area of the circle by multiplying the square of the radius (`kolo1 * kolo1`) by the
value of pi (3.14). The result is stored in the variable `kolo3` and then logged to the console. */


/*
 * This arrow function inside console object is calculating circle area, using
 * p parameter. Function is invoked immediately with the argument 37.
 * The result is logged to the console object.
 */

/* The code is calculating the area of a circle with a radius of 37. It does this by defining an
immediately invoked arrow function that takes a parameter `p` (which represents the radius) and
returns the result of `p * p * 3.14`. The function is immediately invoked with the argument `37`,
and the result is logged to the console using `console.log()`. */
const kolo1 = 27;
promienKola = () => kolo1 * kolo1 * 3.14;
const kolo3 = promienKola();
console.log(kolo3);
console.log(
  ((p) => {
    return p * p * 3.14;
  })(37)
);
/**
 * Calculates the area of a circle using the formula: pole * pole * pi.
 *
 * @param {number} pole - The radius of the circle.
 * @param {number} pi - The value of pi.
 * @returns {number} The area of the circle.
 */
const pole = 77;
const pi = 3.14;
const polePi = pole * pole * pi;
console.log(polePi);

/**
 * Calculates the area of a circle based on its radius.
 * @param {number} p - The radius of the circle.
 * @returns {number} The area of the circle.
 */
function polePi1(p) {
  let pi = 3.14;
  return p * p * pi;
}
const poleWynik = polePi1(27);
console.log(poleWynik);

/**
 * Represents a pole9 object.
 * @constructor
 */
function pole9() {
  this.p = 7;
  this.pi = 3.14;
}
const pole8 = new pole9();
console.log(pole8.p * pole8.p * pole8.pi);

/**
 * Calculates the area of a square.
 * @returns {number} The area of the square.
 */
const pole2 = function poleKwadratu() {
  const p = 7;
  const pi = 3.14;
  return p * p * pi;
};
pole2();
console.log(pole2());


const promien = 7;
const pi2 = Math.PI;
/**
 * Calculates the area of a circle with a radius of 7.
 * @returns {number} The area of the circle.
 */
function poleKola7() {
  if (promien === 7 && pi2 === Math.PI) {
    return Math.PI * Math.pow(promien, 2);
  }
}
poleKola7();
console.log(poleKola7());

/**
 * Calculates the area of a circle.
 * @returns {Object} An object containing the radius and the calculated area.
 */
function poleKola4() {
  return {
    promien: 7,
    wynik: Math.round(Math.PI * Math.pow(7, 2)),
  };
}
poleKola4();
console.log(poleKola4());

console.log(
  ((promien) => {
    return Math.round(Math.PI * Math.pow(promien, 2));
  })(7)
);

/**
 * Returns the maximum of two numbers.
 *
 * @param {number} licz1 - The first number.
 * @param {number} licz2 - The second number.
 * @returns {number} The maximum of the two numbers.
 */
function LiczbaMax(licz1, licz2) {
  return Math.max(licz1, licz2);
}
LiczbaMax();
console.log(LiczbaMax(7, 17));

/**
 * Calculates the maximum value between two numbers.
 * @param {number} wynik - The result of the calculation.
 * @returns {object} - An object containing the maximum value.
 */
const LiczbaMax1 = (wynik) => {
  const licz1 = 7;
  const licz2 = 177;
  return {
    wynik: Math.max(licz1, licz2),
  };
};
const nowyWynik = LiczbaMax1();
console.log(nowyWynik.wynik);

/**
 * Returns the maximum value between two numbers.
 * @returns {number} The maximum value.
 */
const LiczbaMax2 = () => {
  const licz1 = 7;
  const licz2 = 777;
  const wynik = Math.max(licz2, licz1);
  return wynik;
};
LiczbaMax2();
console.log(LiczbaMax2());

/**
 * Funciton LiczbaMax7 pass callback as a argument to function callback which
 * @param {*} callback
 * @returns
 */
function LiczbaMax7(callback) {
  const licz1 = 77;
  const licz2 = 177;
  const wynik = Math.max(licz1, licz2);
  return callback(wynik);
}
LiczbaMax7(function (max) {
  console.log(max);
});

console.log(
  ((licz1, licz2) => {
    return Math.max(licz1, licz2);
  })(7, 777)
);

console.log(((licz1, licz2) => Math.max(licz1, licz2))(17, 7));

/**
 * Function that checks if the number 77 is equal to zero, greater than zero, or less than zero.
 * @returns {string} The result message indicating whether the number is equal to zero, greater than zero, or less than zero.
 */
const Liczba77 = () => {
  const liczba77 = 77;
  let tekst;
  if (liczba77 === 0) {
    tekst = "Liczba nie jest równa zero";
  }
  if (liczba77 > 0) {
    tekst = "Liczba jest dodatnia!";
  }
  if (liczba77 < 0) {
    tekst = "Liczba jest ujemna!";
  }
  return tekst;
};
Liczba77();
console.log(Liczba77());

/**
 * Checks if a number is equal to 0, positive, or negative.
 * @param {number} liczba1 - The number to be checked.
 * @returns {string} - The result message indicating if the number is equal to 0, positive, or negative.
 */
const Liczba1 = (liczba1) => {
  if (liczba1 === 0) {
    return "Liczba jest równa 0";
  } else if (liczba1 > 0) {
    return "Liczba jest dodatnia!";
  } else {
    return "Liczba jest ujemna!";
  }
};
const LiczbaWynik = Liczba1(0);
console.log(LiczbaWynik);

/**
 * Checks if a number is equal to 0, positive or negative.
 * @param {number} liczba2 - The number to be checked.
 * @returns {string} - The result indicating if the number is equal to 0, positive or negative.
 */
const Liczba2 = (liczba2) =>
  liczba2 === 0
    ? "Liczba jest równa 0!"
    : liczba2 > 0
    ? "Liczba jest dodatnia"
    : "Liczba jest ujemna!";
console.log(Liczba2(777));

/**
 * Represents a number condition.
 */
  /**
   * Checks the condition of the number.
   * @returns {string} The condition of the number.
   */
class LiczbaWar {
  constructor(liczba5) {
    this.liczba5 = -777;
  }
    LiczbaWarunek() {
    if (this.liczba5 === 0) {
      return "Liczba jest równa 0!";
    } else if (this.liczba5 > 0) {
      return "Liczba jest dodatnia!";
    } else {
      return "Liczba jest ujemna!";
    }
  }
}
const liczba9 = new LiczbaWar();
console.log(liczba9.LiczbaWarunek());

/**
 * Checks if a number is equal to, greater than, or less than zero.
 * @param {number} liczba3 - The number to be checked.
 * @returns {string} - The result indicating if the number is equal to 0, greater than 0, or less than 0.
 */
const Liczba10 = (liczba3) => {
  this.liczba3 = liczba3;
  if (this.liczba3 === 0) {
    return "Liczba jest równa 0!";
  } else if (this.liczba3 > 0) {
    return "Liczba jest dodatnia!";
  } else {
    return "Liczba jest ujemna!";
  }
};
const liczba4 = Liczba10(0);
console.log(liczba4);


/**
 * Represents an array of numbers.
 * @type {number[]}
 */
const numbers = [1, 2, 3, 5, 6, 7, 8];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

/**
 * Represents an array of numbers.
 * @type {string}
 */
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8].join();
console.log(numbers1);

/**
 * Executes the given function twice, performing two operations with different sets of numbers.
 * @param {Function} funkcja - The function to be executed.
 * @param {number} liczba15 - The first number for the first operation.
 * @param {number} liczba16 - The second number for the first operation.
 * @param {number} liczba17 - The first number for the second operation.
 * @param {number} liczba18 - The second number for the second operation.
 */
function wykonajOperacjeDwaRazy(
  funkcja,
  liczba15,
  liczba16,
  liczba17,
  liczba18
) {
  console.log("To jest pierwsza operacja!");
  funkcja(liczba15, liczba16);
  console.log("To jest druga operacja!");
  funkcja(liczba17, liczba18);
}

/**
 * Calculates the sum of two pairs of numbers.
 * @param {number} liczba15 - The first number of the first pair.
 * @param {number} liczba16 - The second number of the first pair.
 * @param {number} liczba17 - The first number of the second pair.
 * @param {number} liczba18 - The second number of the second pair.
 * @returns {undefined}
 */
function obliczSume(liczba15, liczba16, liczba17, liczba18) {
  console.log("Wynik dodawania:", liczba15 + liczba16, liczba17 + liczba18);
}
wykonajOperacjeDwaRazy(obliczSume, 7, 7, 17, 17);

/**
 * Adding greeting `Czesc` to the name `imie` which is set to `Jan` by default.
 * @param {*} imie, default value is `Jan`
 * @returns string that says `Czesc Jan` if no argument is provided, or `Czesc` followed by
 * the argument if provided.
 */

/**
 * The function "powitanie" returns a greeting message with the provided name or a default name if none
 * is provided.
 *
 * @param imie The parameter `imie` is a string that represents a person's name.
 *
 * @return a string that says "Cześć Jan" if no argument is provided, or "Cześć " followed by the
 * provided name if an argument is provided.
 */
function powitanie(imie = "Jan") {
  return "Cześć " + `${imie}`;
}
console.log(powitanie());
