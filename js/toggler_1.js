var toggler = {
	init: function(){
		var openers = document.querySelectorAll('.tgl-opener');
		var boxes = [];

		for (var i = 0; i < openers.length; i++){
			var nextBox = openers[i].nextSibling;

			//checking if nextSibling isn't a text or comment node
			while (nextBox.nodeType !== 1){
				nextBox = nextBox.nextSibling;
			}

			//hiding content
			if (nextBox.id === openers[i].getAttribute('data-for')){
				boxes.push(nextBox);
				nextBox.style.display = 'none';
				
			}

			openers[i].onclick = function(){
				console.log(boxes[i]);
			};
		}
		return boxes;
	},
	toggle: function(){
		
	}
};
window.addEventListener('load', function(){
	toggler.init();
});