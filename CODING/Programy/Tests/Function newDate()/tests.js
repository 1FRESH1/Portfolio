import { nowaData } from './newDate.js'; 

QUnit.test('nowaData should return correct date values and leap year statement', function(assert) {
    // Given
    const data = new Date('2024-02-12');
    const expected = 'wtorek-luty-2024. Ten rok jest przestepny!';

    // When
    const result = nowaData(data);

    // Then
    assert.strictEqual(result, expected, 'Returned date values and leap year statement should be correct');
});
