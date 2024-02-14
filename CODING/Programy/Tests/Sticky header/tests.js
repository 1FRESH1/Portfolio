

import { handleScroll } from './script.js';

QUnit.module('Sticky Header Tests', function(hooks) {
    let header;

    hooks.beforeEach(function() {
        // Tworzymy element nagłówka i dodajemy go do ciała dokumentu przed każdym testem
        header = document.createElement('header');
        header.setAttribute('id', 'main-header');
        document.body.appendChild(header);
    });

    hooks.afterEach(function() {
        // Usuwamy element nagłówka po zakończeniu każdego testu
        document.body.removeChild(header);
    });

    QUnit.test('Header should have sticky class when scrolling down', function(assert) {
        // Dodajemy klasę sticky po przewinięciu strony w dół
        window.pageYOffset = 100;
        handleScroll();
        assert.ok(header.classList.contains('sticky'), 'Header should have sticky class after scrolling down');
    });

    QUnit.test('Header should not have sticky class when scrolling up', function(assert) {
        // Usuwamy klasę sticky po przewinięciu strony w górę
        window.pageYOffset = 100;
        handleScroll();
        window.pageYOffset = 0;
        handleScroll();
        assert.notOk(header.classList.contains('sticky'), 'Header should not have sticky class after scrolling up');
    });

    QUnit.test('Header should become sticky after scrolling past its offset', function(assert) {
    // Symulujemy przewinięcie strony w dół powyżej wartości offsetTop
    header.getBoundingClientRect = () => { return { top: 50 }; }; // Symulujemy, że offsetTop wynosi 50
    window.pageYOffset = 100; // Przewijamy stronę w dół
    handleScroll();
    assert.ok(header.classList.contains('sticky'), 'Header should have sticky class after scrolling past its offset');
});

});

QUnit.jUnitDone(function(report) {
    if (typeof console !== 'undefined') {
      console.log(report.xml);
      
    }
  });
  