/**
 * The function `nowaData` returns new date with week days as strings, months as strings, year as number, 
 * checks if year is leap.
 * @param {string} `data` - new Date() object.
 * @param {string} `wynik` - checks if year is leap and returns statement in string.
 * @return {string} Returns new object with specific date values.
 * Result is logged into console.
 */
const data = new Date();
export function nowaData(ustaw) {
  let wynik;
  const dni = ustaw.toLocaleString("pl-PL", { weekday: "long" }); // Dni w ciągu, bez getDate() !!!
  const miesiac = ustaw.toLocaleString("pl-PL", { month: "long" }); // Miesiące tez bez .getMonth() !!!
  const rok = ustaw.getFullYear().toString().padStart(4, "0");
  if ((2024 % 4 === 0 && 2024 % 100 != 0) || 2024 % 400 == 0) {
    wynik = "Ten rok jest przestepny!";
  } else {
    wynik = "Ten rok nie jest przestepny";
  }

  return `${dni}-${miesiac}-${rok}. ${wynik}`;
}

const nowy = nowaData(data);
console.log(nowy);