$(document).ready(function () {
    //Loading js

    // setInterval(function () {
    //     $('.loader').slideUp(1000)
    // }, 2000)

    //Header fix on scroll
    $('.clicktotop').hide()
    $(window).scroll(function () {
        var h = $(window).scrollTop()
        if (h > 50) {
            $('.header').addClass('fixed-header')
            $('.fixed').fadeIn(100)
        }
        else {
            $('.header').removeClass('fixed-header')
            $('.fixed').fadeOut(100)
        }
    })

    // click totop website
    $('.fixed').click(function(){
        $('html,body').animate({scrollTop:0},1500)
    })

    // Animated on scroll section
    new window().init();

})
