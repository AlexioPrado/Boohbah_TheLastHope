
let scrolldown = document.getElementById('scrollDown');
let scrollup = document.getElementById('scrollUp');

scrolldown.onclick = function () {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    });
    console.log('Went to History');
}

scrollup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('Went to Title Screen');
}