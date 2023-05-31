var hamburger = document.querySelector('.hamburger');
var sideNav = document.querySelector('#sideNav');

hamburger.addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('show-menu');
});

sideNav.style.right = "-250px";
hamburger.onclick = function() {
    if (sideNav.style.right === "-250px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
};
