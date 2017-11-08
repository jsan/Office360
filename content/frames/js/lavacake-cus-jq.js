(function ($) {

    $.fn.rePosStageElement = function (left, top, width, height) {
        return this.css({ 'left': $(window).width() * wPer(left), 'top': $(window).height() * hPer(top) }).width($(window).width() * wPer(width)).height($(window).height() * hPer(height));
    };

    function wPer(rawValue) {
        var scoreHeight = 1920;
        var widthPercent = rawValue / scoreHeight;
        return widthPercent;
    }

    function hPer(rawValue) {
        var scoreHeight = 1080;
        var heightPercent = rawValue / scoreHeight;
        return heightPercent;
    }

})(jQuery);





function imgButton(divID, mouseDownFun) {
	var str = $(divID).attr('src');

	var hovStr = str.substring(0, str.length - 4) + '_hover.png'; 
	var image = new Image();
	
	image.onload = function () {
	};
	image.onerror = function () {
	   console.error("Cannot load image: " + hovStr);
	   //do something else...
	};
	image.src = hovStr;
	
	$(divID).mouseover(function(){
		
		$(divID).attr('src', hovStr);

	}).mouseout(function(){
		
		$(divID).attr('src', str);
		
	}).mousedown(function(){
		mouseDownFun();
	});
}

function wPer(rawValue) {
	var scoreHeight = 1920;
	var widthPercent = rawValue / scoreHeight;
	return widthPercent;
}

function hPer(rawValue) {
	var scoreHeight = 1080;
	var heightPercent = rawValue / scoreHeight;
	return heightPercent;
}

function ShowIncorrect(){
	$('#white-back' ).fadeTo( "slow", 0.70 );
	$('#incorrect').fadeTo( "slow", 1 );

	var TimedNext = function() {
		
		$('#white-back' ).hide();
		$('#incorrect').hide();

	}
	setTimeout(TimedNext, 3000);

}

function ShowCorrect(){
	$('#white-back' ).fadeTo( "slow", 0.70 );
	$('#correct').fadeTo( "slow", 1 );

	var TimedNext = function() {
		
		$('#white-back' ).hide();
		$('#correct').hide();
		moveToNextSlide();

	}
	setTimeout(TimedNext, 3000);

}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function moveToNextSlide() {

    window.parent.CurrentQuestion.QuestionCompleted = true;
    window.parent.nextSlide();
}

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array) {
        return false;
    }

    // compare lengths - can save a lot of time 
    if (this.length !== array.length) {
        return false;
    }

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i])) {
                return false;
            }
        }
        else if (this[i] !== array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
