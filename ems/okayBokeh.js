$(document).ready(function() {
	
	//set number of bokehs
	var bokehs = 75;
	
	for (i = 0; i < bokehs; i++) { 	

		var xSize = $(window).width();
		var ySize = $(window).height();
		var opacity = (Math.random()*.9);
		var blur = Math.floor((Math.random()*10)+1);
		var color = 'rgba(62, 255, 212,' + opacity + ')';
		var xPosition = Math.floor((Math.random()*xSize)+1) - 50;
		var yPosition = Math.floor((Math.random()*ySize)+1) - 150;
									
		var div= $('<div id="circle'+i+'"></div>');
	
				  $(div).css('position', 'fixed');
			 $(div).css('border-radius', '50%');
					 $(div).css('width', '100px');
				    $(div).css('height', '100px');	
					  $(div).css('left', xPosition);
					   $(div).css('top', yPosition);
				$(div).css('background', color);
				
	
		$(div).css('-webkit-box-shadow', '0px 0px '+blur+'px '+blur+'px '+color);
		   $(div).css('-moz-box-shadow', '0px 0px '+blur+'px '+blur+'px '+color);
		     $(div).css('-o-box-shadow', '0px 0px '+blur+'px '+blur+'px '+color);
	    	    $(div).css('box-shadow', '0px 0px '+blur+'px '+blur+'px '+color);
		
		$(div).fadeIn('slow', function() {});
		
		$('body').append(div);
		
	};

});
