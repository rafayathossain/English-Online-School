(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();

	//login onclick
	$(".logsign").on('click', function(){
		$('.wrapper').fadeIn();
	});

	$(".close").on('click', function(){
		$('.wrapper').fadeOut();
	});

	//purchase-btn onclick
	$(".purchase-btn").on('click', function(){
		$('.checkout-panel').fadeIn();
		$('.checkoutpanel-close').fadeIn();
	});

	$(".checkoutpanel-close").on('click', function(){
		$('.checkout-panel').fadeOut();
		$('.checkoutpanel-close').fadeOut();
	});


	//courses owlcarousel
	$('.course-owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	});

	//purchase-owl-carousel

	$('.purchase-owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:false,
		dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        750:{
	            items:2
	        },
	        1000:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	});

	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()

	//Purchase onclick
	$(".pb1").on('click', function(){
		$('.pbb1').toggle('slow');
		});

	$(".pb2").on('click', function(){
		$('.pbb2').toggle('slow');
		});

	$(".pb3").on('click', function(){
		$('.pbb3').toggle('slow');
		});

	$(".pb4").on('click', function(){
		$('.pbb4').toggle('slow');
		});
	
	$(".pb5").on('click', function(){
		$('.pbb5').toggle('slow');
		});
	
	$(".pb6").on('click', function(){
		$('.pbb6').toggle('slow');
		});
		

})(jQuery);