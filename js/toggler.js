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
				toggler.slide(this.content);
			};
		}
	},
	
	slide: function(box){
		var cssOverflowValue = window.getComputedStyle(box).getPropertyValue('overflow');
		var boxHeight = box.offsetHeight;
		var animationStep = 10; // pixels for each animation step
		var animationSpeed = 1000; // miliseconds for each animation step
		var animation;
		
		if (cssOverflowValue != 'hidden'){
			box.style.overflow = 'hidden';
		}
		
		(function handleAnimation(){
			if (boxHeight > 0){
				box.style.height = boxHeight + 'px';
				boxHeight -= animationStep;

				if (boxHeight < animationStep)
					box.style.height = '0';
			}
			else{
				cancelAnimationFrame(animation);
				box.style.display = 'none';
				box.style.overflow = cssOverflowValue;
				return;
			}
			animation = requestAnimationFrame(handleAnimation);
		})();
	}
};
window.addEventListener('load', function(){
	toggler.init();
});