$(document).ready(function () {
    // вопросы
    $(".faq_item").click(function () {
        const item = $(this);
        const answer = item.children(".answer");
        const corner = item.children(".corner");

        if (item.hasClass("active")) {
            answer.slideUp(300, function () {
                corner.hide();
                item.removeClass("active");
            });
        } else {
            corner.show();
            item.addClass("active");
            answer.slideDown(300);
        }
    });

    // скролл
    $(".arrow_top").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, {
            easing: "linear"
        });

        return false;
    });

    let tariffSlider;

    function initTariffSlider() {
        if (tariffSlider) tariffSlider.destroy(true, true);

        const isMobile = window.innerWidth < 800;

        tariffSlider = new Swiper('.tariff_slider', {
            slidesPerView: 'auto',
            spaceBetween: 14,
            centeredSlides: isMobile,
            centeredSlidesBounds: isMobile,
            initialSlide: 1,
            ResizeObserver: false,
            pagination: {
                el: '.swiper-pagination',
            },

            breakpoints: {
                800: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                    centeredSlides: false,
                    initialSlide: 0,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 29,
                    centeredSlides: false,
                    initialSlide: 0,
                },
            }
        });
    }

    // window.addEventListener('resize', initTariffSlider);
    initTariffSlider();


    // видео
    const players = Array.from(document.querySelectorAll('.player_video')).map(p => new Plyr(p, {
        autoplay: false,
        ratio: '16:9'
    }));

    // parallax
    var scene = document.querySelectorAll('.parallax');
    if (scene) {
        scene.forEach(element => {
            var parallaxInstance = new Parallax(element)
        });
    }

    // анимация
    let offset
    if ($(window).width() > 576) {
        offset = 100;
    } else {
        offset = 0;
    }
    AOS.init({
        easing: 'ease-in-out',
        delay: 100,
        once: true,
        duration: 800,
        offset: offset,
    });
});


const modalEx = document.querySelector('.modal-ex');


document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.price')) {
        modalEx.classList.add('show');
        return;
    }

    if (target.closest('.modal-ex') && !target.closest('.modal-ex__content')) {
        modalEx.classList.remove('show');
        return;
    }
})
