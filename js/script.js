$(document).ready(function () {



	$('#slider').owlCarousel({
		autoplay: true,
		smartSpeed: 400,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		navElement: 'div',
		navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	// Stikcy Header
	var menubar = $('#menubar');
	var slidebar = $('#slidebar');
	if ($('#menubar').length) {
		var headerHeight = menubar.outerHeight();
		var stickyHeaderTop = menubar.offset().top;
		//menubar.css({"top":stickyHeaderTop});
		//slidebar.css({"margin-top":headerHeight});
		var stickyHeader = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > stickyHeaderTop) {
				menubar.addClass('header-sticky');
				//menubar.css({"top":"0px"});
			} else {
				if (menubar.hasClass('header-sticky')) {
					menubar.removeClass('header-sticky');
					//menubar.css({"top":stickyHeaderTop});
				}
			}
		};
		stickyHeader();
		$(window).scroll(function () {
			stickyHeader();
		});
	}




	$(function () {
		var section1 = $('#home-cover1');
		if (section1.length) {
			var oTop = section1.offset().top - window.innerHeight;
		}
		$(window).scroll(function () {
			var pTop = $(document).scrollTop();
			if (pTop > oTop) {
				console.log("OVer it");
				$('#proposal-trigger').removeClass('active');
			}
			else {
				console.log("Nope it");
				$('#proposal-trigger').addClass('active');
			}
		});
	});

	//  section scroll

	var btn = $('#scrolltop');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});


	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

});
