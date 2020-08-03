// Toggle content on click
document.addEventListener('click', function (event) {


    if (!event.target.hasAttribute('rotate')) return;

    event.target.classList.toggle('rotate');

});