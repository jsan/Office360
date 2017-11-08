$(document).ready(function ( ) {
	
	var fullscr = false;
	
	var ratio = 1920 / 1080;
	
	var vidRatio = 16 / 9;
	
	$('.content-controls').mousedown(function() {	
		//alert('hello');
		
		if(!fullscr){
			fullscr = true;
		}else{
			fullscr = false;
		}
		
		if (BigScreen.enabled) {
			BigScreen.toggle();
		}
		else {
			// fallback for browsers that don't support full screen
		}
	});
	
	setInterval(function(){ 

		calContentArea();
		
		if(fullscr){
			$('.content').css({'top': 0});
		}
		
	}, 100);
		
	
	
	calContentArea();
	
	$(window).resize(function(){

		calContentArea();
	});
	

	
	function calContentArea(){
		var winRatio = $(window).width() / $(window).height();
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		var hasTop =  false;
		
		if (winWidth <= 1080){
			
			$('.content').width(1080).height(608);
			
			if(winRatio <= ratio){
				hasTop = true;
			}
			else{
				hasTop = false;
			}
	
			if (hasTop){
				var topPos = ($(window).height() - ($('.content-head').height() + $('.content-controls').height() + $('.content-body').height())) / 2;
				$('.content').css({'top': topPos, 'left': 0});
				
			}else{
				var leftPos = ($(window).width() - $('.content').width()) / 2;
				$('.content').css({'top': 0, 'left': leftPos});
			}
		
		}
		else{
		
			if(winRatio <= ratio){
				hasTop = true;
				$('.content').width($(window).width()).height($(window).width() / ratio);
	
				
			}
			else{
				var winHeight = $(window).height();
				var winWidth = winHeight * vidRatio;
				
				$('.content').width(winWidth).height(winHeight);
				
			}
	
			if (hasTop){
				var topPos = ($(window).height() - ($('.content-head').height() + $('.content-controls').height() + $('.content-body').height())) / 2;
				$('.content').css({'top': topPos, 'left': 0});
				
			}else{
				var leftPos = ($(window).width() - $('.content').width()) / 2;
				$('.content').css({'top': 0, 'left': leftPos});
			}
		}
	}
	
	function wPer(rawValue){
		var scoreHeight = 1920;
		var widthPercent = rawValue/scoreHeight;
		return widthPercent;
	}
	
	function hPer(rawValue){
		var scoreHeight = 1080;
		var heightPercent = rawValue/scoreHeight;
		return heightPercent;
	}

});


function toggleFullScreen() {

  if ((window.parent.document.fullScreenElement && window.parent.document.fullScreenElement !== null) ||    
   (!window.parent.document.mozFullScreen && !window.parent.document.webkitIsFullScreen)) {
    if (window.parent.document.documentElement.requestFullScreen) {  
      window.parent.document.documentElement.requestFullScreen();  
    } else if (window.parent.document.documentElement.mozRequestFullScreen) {  
      window.parent.document.documentElement.mozRequestFullScreen();  
    } else if (window.parent.document.documentElement.webkitRequestFullScreen) {  
      window.parent.document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (window.top.document.cancelFullScreen) {  
      window.parent.document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      window.parent.document.mozCancelFullScreen();  
    } else if (window.top.document.webkitCancelFullScreen) {  
      window.top.document.webkitCancelFullScreen();  
    }  
  }  
}