$(function () {

    // banner slider
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // video with venobox
    $('.venobox').venobox(); 



    // slider part 
    $('.testi-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },  
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },      
          ]
    });


    // counter part 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    


    // sponsor part slider
    $('.sponsor-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fa fa-chevron-right nxt" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>'
    });


});