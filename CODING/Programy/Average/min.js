function WszystkieLiczby(licz) {
  let najwieksza = Math.max(...licz);
  let najmniejsza = Math.min(...licz);
  let srednia = 0;
  licz.forEach((num) => {
    srednia += num;
  });
  srednia = srednia / licz.length;
  return {
    najwieksza: najwieksza,
    najmniejsza: najmniejsza,
    srednia: srednia
  };
}
const liczby = [1, 4, 17, 7, 77, 177];
const wynik = WszystkieLiczby(liczby);
console.log(wynik);