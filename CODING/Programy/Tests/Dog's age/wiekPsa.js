/**
 * Oblicza wiek psa na podstawie wieku człowieka.
 * @param {number} wiekCzłowieka - Wiek człowieka.
 * @returns {number} - Wiek psa.
 */


const ludzkiWiek = 5;
export function wiekPsaNaPodstawieWiekCzłowieka(wiekCzłowieka) {
  
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
  return wiekPsa;

}
const odpowiedz = wiekPsaNaPodstawieWiekCzłowieka(ludzkiWiek);
console.log(odpowiedz);