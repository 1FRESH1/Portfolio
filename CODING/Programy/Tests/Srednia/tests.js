import { WszystkieLiczby } from './min.js';

QUnit.test('WszystkieLiczby should return correct results', function(assert) {
    // Given
    let liczby = [1, 4, 17, 7, 77, 177];
    
    // When
    const result = WszystkieLiczby(liczby);
    
    // Then
    assert.strictEqual(result.min, 1, 'Minimum value should be 1');
    assert.strictEqual(result.max, 177, 'Maximum value should be 177');
    assert.strictEqual(result.average, 47.166666666666664, 'Average value should be 47.166666666666664');
  });
  