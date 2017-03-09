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


$(document).ready(function(){
	particlesJS.load('home', 'js/particles-home.json');
});
//window.setInterval(run, 500);
