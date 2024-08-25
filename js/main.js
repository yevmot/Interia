window.onscroll = function() {
    let scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
};

// Скроллить вверх при нажатии на кнопку
document.getElementById("scrollToTopButton").onclick = function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
};