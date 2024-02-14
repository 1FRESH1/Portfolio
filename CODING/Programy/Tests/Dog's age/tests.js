import { wiekPsaNaPodstawieWiekCzłowieka } from './wiekPsa.js';


QUnit.test("Test funkcji wiekPsaNaPodstawieWiekCzłowieka", function(assert) {
    // Set age to 1 and check if age is equal `pierwszy rok`.
    let wiekCzłowieka = 1;
    let expectedWiekPsa = 15;
    assert.equal(wiekPsaNaPodstawieWiekCzłowieka(wiekCzłowieka), expectedWiekPsa, "Dla wieku człowieka 1, wiek psa powinien wynosić 15");

    // Set age to 2 and check if dog's age equal first age plus second age.
    wiekCzłowieka = 2;
    expectedWiekPsa = 15 + 9;
    assert.equal(wiekPsaNaPodstawieWiekCzłowieka(wiekCzłowieka), expectedWiekPsa, "Dla wieku człowieka 2, wiek psa powinien wynosić 24");

    // Set age to 5 and check if dog's age is calculated correctly.
    wiekCzłowieka = 5;
    expectedWiekPsa = 15 + 9 + (wiekCzłowieka - 2) * 4;
    assert.equal(wiekPsaNaPodstawieWiekCzłowieka(wiekCzłowieka), expectedWiekPsa, "Dla wieku człowieka 5, wiek psa powinien być obliczony poprawnie");
});


