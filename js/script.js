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
	
	
    $("#menubar").click(function(){
        
		if(!menuopen){
			$("#menu").show();
			$('.menupanel').each(function(){
				$(this).removeClass('width0').addClass('width100');
			});
			menuopen=1;
		}
		else{
			$('.menupanel').each(function(){
				$(this).removeClass('width100').addClass('width0');
			});
			
			setTimeout(function(){
				$("#menu").hide();
			}, 550);
			menuopen=0;
		}
    });
});

function myMap() {
				  var myCenter = new google.maps.LatLng(22.475730, 88.414632);
				  var mapCanvas = document.getElementById("map");
				  var mapOptions = {center: myCenter, zoom: 16};
				  var map = new google.maps.Map(mapCanvas, mapOptions);
				  var marker = new google.maps.Marker({position:myCenter});
				  marker.setMap(map);
				}