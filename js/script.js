$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

var $root = $('html, body');
var state=1;
var now=1;

var run = function(){
	now=navigator.onLine;
  if (now)
  {
	if (state!=now)
	  {
		  $('#curtain').fadeIn();
		  state=1;
	  }
  }
  else{
	  if (state!=now)
	  {
		  $('#curtain').fadeOut();
		  state=0;
	  }
  }
}

var menuNow=0;
var menuInit=0;
function menuPort(x){
	
	if(menuInit){
		if(menuPort!=x){
			menuUnPort(menuNow);
			$('#menuholi'+x).show();
			$('#menuli'+x).removeClass('menuli').addClass('menuliActive');
			$('#menuholi'+x).removeClass('animated zoomOutRight').addClass('animated zoomInLeft');
			menuNow=x;
		}
	}
	else{
		menuInit=1;
		$('#menuholi'+x).show();
		$('#menuli'+x).removeClass('menuli').addClass('menuliActive');
		$('#menuholi'+x).removeClass('animated zoomOutRight').addClass('animated zoomInLeft');
		menuNow=x;
	}
}

function menuUnPort(x){
	if(menuPort!=x){
		$('#menuli'+x).removeClass('menuliActive').addClass('menuli');
		$('#menuholi'+x).removeClass('animated zoomInLeft').addClass('animated zoomOutRight');
		$('#menuholi'+x).hide();
	}
}

var menuopen=0;
$(document).ready(function(){
	particlesJS.load('homeplace', 'js/particles-home.json');
	
	$(".menuli").click(function(event) {
	   event.preventDefault();
	   
	   $('#menubar').click();
	   
	   var url = $(this).attr("href");

	   setTimeout(function() {
			$root.animate({
				scrollTop: $('[name="' + url.substr(1) + '"]').offset().top
			}, 500, function () {
				window.location.hash = url;
			});
	   }, 250);
	});
	
	$("#load").click(function(){
        $("#gallery-hid").slideToggle("slow");
		$(this).fadeOut("slow");
    });

    $("#menubar").click(function(){
        
		if(!menuopen){ // If the menu is not open
			$("#menu").show();
			menuPort(menuNow);
			$('.menupanel').each(function(){
				$(this).removeClass('animated flipOutY');
				$(this).animateCss('flipInY');
			});
			$('#menubutton').addClass('is-active');
			menuopen=1;
		}
		else{ //If the menu is already open
			$('#menubutton').removeClass('is-active');
			$('#menuholi'+menuNow).removeClass('animated zoomInLeft').addClass('animated zoomOutRight');
			$('#menuholi'+menuNow).hide();
			menuInit=0;
			
			$('.menupanel').each(function(){
				$(this).removeClass('animated flipInY');
				$(this).animateCss('flipOutY');
			});
			setTimeout(function(){
				$("#menu").hide();
			}, 550);
		
			menuopen=0;
		}
    });
	
	myMap();
	
	var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
	
});

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


function myMap() {
	var myCenter = new google.maps.LatLng(22.475730, 88.414632);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 16};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
}