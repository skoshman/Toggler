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

		toggler.slide(openers[0].content);
	},
	
	slide: function(box){
		var initialHeight = box.offsetHeight;
		box.style.height = initialHeight;
		
		while (initialHeight > 0){
			box.style.height = initialHeight;
			console.log(initialHeight, box.style.height);
			initialHeight = initialHeight - 10;
			
		}

//		for (var i = 0; i < 10; i++){
//			console.log(i, initialHeight);
//			box.style.height = initialHeight - 10;
//			initialHeight = initialHeight - 10;
//		}
	}
};
window.addEventListener('load', function(){
	toggler.init();
});