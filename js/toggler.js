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
		
//		function Opener(){
//			this.content = setOpenerContent(this);
//			this.status = '';
//		}
		
		for (var i = 0; i < openers.length; i++){
			openers[i].content = setOpenerContent(openers[i]);
			openers[i].status = openers[i].getAttribute('data-tgl-status');
		}
		
		openers[0].onclick = function(){
			toggler.slide(this.content);
		}

//		toggler.slide(openers[0].content);
	},
	
	slide: function(box){
		var cssOverflowValue = window.getComputedStyle(box).getPropertyValue('overflow');
		var boxHeight = box.offsetHeight;
		var animationStep = 10;
		
		if (cssOverflowValue != 'hidden'){
			box.style.overflow = 'hidden';
		}
		
		
		while (boxHeight > 0){
//			setTimeout(function(){
				box.style.height = boxHeight + 'px';
				boxHeight -= animationStep;

				if (boxHeight < animationStep)
					box.style.height = '0';
//			}, 100);
		}
	}
};
window.addEventListener('load', function(){
	toggler.init();
});