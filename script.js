var menuVisible = false;

//Menu animation
$("#nav-toggle").on( "click", function(e) {
	
	this.classList.toggle( "active" );

	if(!menuVisible)
		showMenu();
  	else
  		hideMenu();  	
});

//When the user clicks on a menu item
$("#side-pannel li a").on('click', function(e){
	e.preventDefault();
	$('html, body').animate({'scrollTop': $($(this).attr("href")).offset().top}, 500);
	hideMenu();
	$("#nav-toggle").toggleClass("active", false);
});

function showMenu(){
	$("#side-pannel").css( "left", "0" );
	$("header").css("opacity", "0.3");
  	$("#nav-toggle").css( "left", "280px" );
  	$('html').css({'overflow': 'hidden', 'position': 'absolute', 'width': '100%'});
  	menuVisible = !menuVisible;
}

function hideMenu(){
	$("#side-pannel").css( "left", "-250px" );
	$("header").css("opacity", "1");
	$("#nav-toggle").css( "left", "30px" );
	$('html').css({'overflow': 'auto', 'position': 'relative'});
	menuVisible = !menuVisible;
}

/* === PARALAX === */

$(window).bind('scroll',function(e){
    parallaxScroll();
    
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();

   	$('header').css('top',((scrolled*0.5))+'px');
   	$('header').css('line-height', ($("header").height() - 1.5*scrolled)+'px')

}

