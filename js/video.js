window.addEventListener('DOMContentLoaded', function() {
    const play = document.querySelector('.play');
    const video = document.querySelector('.video');
    const clear = document.querySelector('.clear');
    const fade = document.querySelector('.fade');
    console.log(play);
    const body = document.body;

    play.addEventListener('click', function () {
        play.classList.toggle('open')
        video.classList.toggle('open')
        clear.classList.toggle('open')

        // document.body.classList.toggle('no-scroll');
    })

    clear.addEventListener('click', function () {
        play.classList.toggle('open')
        video.classList.toggle('open')
        clear.classList.toggle('open')

        // document.body.classList.toggle('no-scroll');
    })
});
