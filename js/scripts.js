// Smooth scroll
// Taken from CSS Tricks
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Changing menu color when reaches id position

// Mała wada rozwiązania - w przypadku zmieniania szerokości okna przeglądarki
// należy odświeżyć stronę, by ponownie załadować skrypt
if ($(window).width() >= 575) {
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        $('#nav').toggleClass('nav__reverse',
            scroll >= $('#about-me').offset().top
        );
    });
    $(window).scroll();
}
// Hamburger menu

$(function() {
    $(".hamburger").click(function(e) {
        $(".nav__item").toggleClass("nav__list--open");
        $(".hamburger").toggleClass("hamburger__open");
        e.preventDefault();
    });
});
