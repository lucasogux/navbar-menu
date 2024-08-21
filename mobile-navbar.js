let navList = document.querySelector('.nav-list'); 
let menu = document.querySelector('.mobile-menu');

menu.addEventListener('click', function () {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active'); 
        document.querySelector('.mobile-menu img').src = '/menu.png'
    } else {
        navList.classList.add('active'); 
        document.querySelector('.mobile-menu img').src = '/close.png'
    }
});