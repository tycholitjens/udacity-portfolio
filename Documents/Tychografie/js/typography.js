var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    
    if (st > lastScrollTop) {
    $(".down").animate({top: '-=2'}, 10);
    $(".up").animate({bottom: '-=2' , opacity: '-=0.01'}, 10);
        $(".round1").animate({opacity: '-=0.02'}, 10);
} else {
    
    $('.down').animate({top: '+=2'}, 10);
    $('.up').animate({bottom: '+=2', opacity: '+=0.02'}, 10);  
    $(".round1").animate({opacity: '+=0.03'}, 10);
}
lastScrollTop = st;
});
              
              
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    
    if (st < 1) {
        
        $(".round1").animate({opacity: '1'}, 500);
         $(".down").animate({top: '30'}, 500);
    $(".up").animate({bottom: '30', opacity: '1'}, 500);
} else {
}
lastScrollTop = st;
});
              