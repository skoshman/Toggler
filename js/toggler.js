"use strict";

//gets opener DOM element
//returns DOM element is binded to this opener as a box to be toggled
function bindContent(opener){
	var key = opener.getAttribute('data-tgl-for');
	var contentNodes = document.querySelectorAll('[data-tgl-id]');
	var flag = false;
	var i = 0;
	
	//meant only one element in the document could be recognized as content
	//if there are more elements apper only the first one is binded
	while (!flag){
		if (contentNodes[i].getAttribute('data-tgl-id') === key){
			flag = true;
			return contentNodes[i];
		}
		i++;
	}
}

//checks if content is shown or not
//true - content is shown
//false - content is hidden
function getStatus(content){
	if (content.className.indexOf('tgl-hide') !== -1){
		return false;
	}
	else {
		return true;
	}
}

//define Class for Toggler instances
function TogglerItem(opener){
	this.opener = opener;
	this.content = bindContent(opener);
	this.status = getStatus(this.content);
}

//initialization
function init(){
	var openers = document.querySelectorAll('[data-tgl-for]');
	var nodes = [];
	
	for (var i in openers){
		if (typeof openers[i] === 'object' || openers[i].nodeType === 1){
			nodes[i] = new TogglerItem(openers[i]);
		}
	}
	
	console.log(nodes);
}

window.addEventListener('load', init);