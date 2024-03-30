const navList = document.querySelector('.nav-list');
const navBtn = document.querySelector('.mobile-nav-btn');
const fade = document.querySelector('.fade');

const body = document.body;

if (navList && navBtn) {
    navBtn.addEventListener('click', () => {
        navList.classList.toggle('open')
        navBtn.classList.toggle('active')
        fade.classList.toggle('active')
    })
}