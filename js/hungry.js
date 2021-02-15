$(document).ready(function () {
    // $(".slider").slick({
    //     arrows: true,
    //     dots: false,
    //     adaptiveHeight: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 300,
    //     easing: "linear",
    //     infinite: true,
    //     initialSlide: 1,
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     pauseOnFocus: true,
    //     pauseOnHover: true,
    //     pauseOnDotsHover: true,
    //     draggable: true, 
    //     swipe: true, 
    //     touchThreshold: 5, 
    //     touchMove: true, 
    //     waitForAnimate: true,  
    //     centerMode: true, 
    //     variableWidth: true, 
    //     rows: 1, 
    //     slidesPerRow: 1, 
    //     vertical: false, 
    //     verticalSwiping: false,
    //     fade: false, 
    // });

    // Плавная прокрутка для всех ссылок: добавить класс go_to нужным ссылкам
    $(".go_to").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    /**
    * При прокрутке страницы, показываем или скрываем кнопку. Подключить JQ
    */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });

    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // добавление тени у up я
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".up").addClass("shadow");
        }
        else {
            $('.shadow').removeClass("shadow");
        }
    });


    //map
    let ok = false;
    window.addEventListener('scroll', function () {
        if (ok === false) {
            ok = true;
            setTimeout(() => {
                let script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2467dfbbd414306f38c00aa9048346ada3bf2ae105b1d1c84eb6a671b54fc5cd&amp;width=100%25&amp;height=300&amp;lang=en_RU&amp;scroll=false';
                document.getElementById('yamap').replaceWith(script);
            }, 1000)
        }
    });

    // To open tab
    document.getElementById("defaultOpen").click();



});