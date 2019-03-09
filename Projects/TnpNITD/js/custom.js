$('.carousel').carousel({
	interval: 8000
})

// Offset for Main Navigation
$('#mainNav').affix({
	offset: {
		top: 100
	}
})

$('ul.nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

var owl = $('.sliderinner');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    slideSpeed : 3000,
    dots:false,
    responsive:{
      1000:{
            items:4,
        },
        600:{
            items:2,
        },
        0:{
            items:1,
        }
        
    }
    
});