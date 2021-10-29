$(function () {
    
    $('.feedback_slide').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    smartSpeed: 500,
    nav: true,
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
          
        },
        1000:{
            items:1,
            
        }
    }
})

  $('.venobox').venobox({
      
  });
    

});
