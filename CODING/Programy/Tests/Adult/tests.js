import { user } from "./script.js";

QUnit.test(
  "user should return correct messages based on age input",
  function (assert) {
    // Given
    const ages = [90, 25, 15, 0, -5, "abc"]; //  Age array to test.
    const expectedResults = [
      "nie zywy/a!",
      "pełnoletni/a!",
      "nieletni/a",
      "głuptaskiem, poniewaz jeszcze Cię nie ma na świecie!",
      "głuptaskiem, poniewaz jeszcze Cię nie ma na świecie!",
      "Podaj tylko liczby, ciołku!",
    ]; // Expected results, equal every age.

    // When & Then
    ages.forEach((age, index) => {
      const result = user(age);
      assert.strictEqual(
        result,
        expectedResults[index],
        `For age ${age}, expected result should be "${expectedResults[index]}"`
      );
    });
  }
);
QUnit.jUnitDone(function (report) {
  if (typeof console !== "undefined") {
    console.log(report.xml);
  }
});
