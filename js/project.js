// OWL call

$(document).ready(function(){
  $("#experts-slider").owlCarousel({

        items: 4,
        loop: true,
        checkVisibility: true,
        stagePadding: 0,


        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,    
        dots: false,   
        navText: ["<img src='https://media1.togas.com/media/couture/img/img-togas-lp3/left.png'>","<img src='https://media1.togas.com/media/couture/img/img-togas-lp3/right.png'>"],
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 50,
        stagePadding: 49,
        smartSpeed: 1000,

       responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            500:{
                items:2,
                nav:true,
                loop:true
            },

            900:{
                items:3,
                nav:true,
                loop:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        },
       slideTransition: ''
  });
});

$(document).ready(function(){
  $("#testemonials-slider").owlCarousel({

        items: 1,
        loop: true,
        
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: false,
        slideTransition: 'fadeOut',       

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        singleItem: true,

        animateOut: 'fadeOut',
        // animateIn: 'flipInX',
        
        margin:100,
        stagePadding:30,
        smartSpeed: 450
  });
});



$(document).ready(function(){
  $("#modal-slider").owlCarousel({

        items: 3,
        loop: true,
        // checkVisibility: true,

        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav: true,
        slideTransition: 'fadeOut',
       

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        singleItem: true,

        animateOut: 'fadeOut',
        // animateIn: 'flipInX',
        
        // margin:100,
        // stagePadding:30,
        // smartSpeed: 150

  });
});