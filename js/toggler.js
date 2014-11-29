"use strict";

function bindContent(opener){
	var key = opener.getAttribute('data-tgl-for');
	var contentNodes = document.querySelectorAll('[data-tgl-id]');
	var flag = false;
	var i = 0;
	
	while (!flag){
		if (contentNodes[i].getAttribute('data-tgl-id') === key){
			flag = true;
			return contentNodes[i];
		}
		i++;
	}
}

function getStatus(content){
	console.log(content.className);
	if (content.className.indexOf('tgl-hide') !== -1){
		return false;
	}
	else {
		return true;
	}
}

function TogglerItem(opener){
	this.opener = opener;
	this.content = bindContent(opener);
	this.status = getStatus(this.content);
}

function init(){
	var heading = document.querySelector('[data-tgl-for="dropdown"]');
	var node = new TogglerItem(heading);
	console.log(node);
}

window.addEventListener('load', init);