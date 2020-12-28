$(document).ready(function() {
    
    $('.nav-list-btn').click(function() {
        $('.navbar .nav-list').toggleClass("active"); 
        $('.nav-list i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:  {
                items: 1,
                nav: false
            }, 

            600: {
                items: 1,
                nav: false
            },
            
            1000:  {
                items: 1,
                nav: false
            }
        }
    })

});