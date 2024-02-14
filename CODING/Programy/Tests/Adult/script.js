export function user(age) {
  let wynik;

  if (isNaN(age)) {
    wynik = "Podaj tylko liczby, ciołku!";
  } else if (age > 89) {
    wynik = "nie zywy/a!";
  } else if (age > 18) {
    wynik = "pełnoletni/a!";
  } else if (age < 18 && age > 0) {
    wynik = "nieletni/a";
  } else if (age <= 0) {
    wynik = "głuptaskiem, poniewaz jeszcze Cię nie ma na świecie!";
  }
  return wynik;
}

document.addEventListener("DOMContentLoaded", function () {
  // Twój kod tutaj
  const operation = parseInt(prompt("Ile masz lat?"));

  if (!isNaN(operation)) {
    const odpowiedz = user(operation);
    document.getElementById("wiek").innerHTML = "Jesteś" + " " + odpowiedz;
  } else {
    document.getElementById("wiek").innerHTML = "Wprowadź liczby, ciołku !!!";
  }
});
