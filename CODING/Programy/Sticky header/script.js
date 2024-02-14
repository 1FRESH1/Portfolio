export function handleScroll() {
    const header = document.getElementById('main-header');
    const rect = header.getBoundingClientRect();
    const sticky = rect.top;
    console.log('Wysokość sticky:', sticky);
    console.log('Wysokość okna:', window.pageYOffset);
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', () => {
    console.log('Przewinięto stronę');
    handleScroll();
});
