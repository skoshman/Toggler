var toggler = {
	init: function(){
		var openers = document.querySelectorAll('[data-tgl-for]');
		
		function setOpenerContent(opener){
			var contentNodes = document.querySelectorAll('[data-tgl-id]');
			var contentId = opener.getAttribute('data-tgl-for');
			
			for (var i = 0; i < contentNodes.length; i++){
				if (contentNodes[i].getAttribute('data-tgl-id') == contentId){
					return contentNodes[i];
				}
			}
		}
		
		for (var i = 0; i < openers.length; i++){
			openers[i].content = setOpenerContent(openers[i]);
			openers[i].status = openers[i].getAttribute('data-tgl-status');
			openers[i].onclick = function(){
				toggler.slide(this.content, this);
			};
		}
	},
	
	slide: function(boxContent, boxOpener){
		var cssOverflowValue = window.getComputedStyle(boxContent).getPropertyValue('overflow');
		var boxContentHeight = boxContent.offsetHeight;
		var animationStep = 10; // pixels for each animation step
		var animationSpeed = 1000; // miliseconds for each animation step
		var animation;
		
		if (cssOverflowValue != 'hidden'){
			boxContent.style.overflow = 'hidden';
		}
		
		if (boxOpener.status == 'opened'){
			(function handleAnimation(){
				if (boxContentHeight > 0){
					boxContent.style.height = boxContentHeight + 'px';
					boxContentHeight -= animationStep;

					if (boxContentHeight < animationStep)
						boxContent.style.height = '0';
				}
				else{
					cancelAnimationFrame(animation);
					boxContent.style.display = 'none';
					boxContent.style.overflow = cssOverflowValue;
					return;
				}

				animation = requestAnimationFrame(handleAnimation);
			})();
		} else if (boxOpener.status == 'closed'){
			console.log(boxOpener.status);
		}
	}
};
window.addEventListener('load', function(){
	toggler.init();
});