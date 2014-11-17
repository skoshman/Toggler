var toggler = {
	init: function(){
		var openers = document.querySelectorAll('.tgl-opener');

		function Opener(content){
			this.content = document.getElementById(content);
			this.status = '';
		}

		for (var i = 0; i < openers.length; i++){
			
		}
	}
};
window.addEventListener('load', function(){
	toggler.init();
});