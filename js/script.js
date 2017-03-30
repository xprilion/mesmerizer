$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

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

var menuopen=0;
$(document).ready(function(){
	
	particlesJS.load('home', 'js/particles-home.json');
	
	$("#load").click(function(){
        $("#gallery").slideToggle("slow");
    });
	
	$('#menuholder').slick({
	  speed: 500
	});
	
	
    $("#menubar").click(function(){
        
		if(!menuopen){ // If the menu is not open
			$("#menu").show();
			$('#menuholder').removeClass('animated zoomOutLeft').addClass('animated zoomInLeft');
			$('.menupanel').each(function(){
				$(this).removeClass('animated flipOutY');
				$(this).animateCss('flipInY');
			});
			$('#menubutton').addClass('is-active');
			menuopen=1;
		}
		else{ //If the menu is already open
			$('#menubutton').removeClass('is-active');
			$('#menuholder').removeClass('animated zoomInLeft').addClass('animated zoomOutLeft');
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
	
});

function myMap() {
				  var myCenter = new google.maps.LatLng(22.475730, 88.414632);
				  var mapCanvas = document.getElementById("map");
				  var mapOptions = {center: myCenter, zoom: 16};
				  var map = new google.maps.Map(mapCanvas, mapOptions);
				  var marker = new google.maps.Marker({position:myCenter});
				  marker.setMap(map);
				}