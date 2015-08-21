var menuVisible = false;

/* %%%%%%%%%%%% Menu Animation %%%%%%%%%%%% */
$("#nav-toggle, #nav-back").on( "click", function(e) {

	$("#nav-toggle").toggleClass("active");

	if(!menuVisible)
		showMenu();
  	else
  		hideMenu();
});

function showMenu(){
	$("#side-pannel").css( "left", "0" );
  	$("#nav-toggle").css( "left", "290px" );
  	$("#nav-back").css( "left", "289px" );
  	$('html').css({'overflow': 'hidden', 'position': 'absolute', 'width': '100%'});
  	menuVisible = !menuVisible;
}

function hideMenu(){
	$("#side-pannel").css( "left", "-250px" );
	$("#nav-toggle").css( "left", "30px" );
	$("#nav-back").css( "left", "29" );
	$('html').css({'overflow': 'auto', 'position': 'relative'});
	menuVisible = !menuVisible;
}


/* %%%%%%%%%%%% Anchors moves %%%%%%%%%%%% */
$("#side-pannel li a").on('click', function(e){
	e.preventDefault();
	$('html, body').animate({'scrollTop': $($(this).attr("href")).offset().top}, 500);
	hideMenu();
	$("#nav-toggle").toggleClass("active", false);
});


/* %%%%%%%%%%%% PARALAX %%%%%%%%%%%% */
$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();

   	$('header').css('top',((scrolled*0.5))+'px');
   	$('header').css('line-height', ($("header").height() - 1.5*scrolled)+'px')
}


/* %%%%%%%%%%%% GOOGLE ANALYTICS %%%%%%%%%%%% */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52460072-1', 'auto');
ga('send', 'pageview');
