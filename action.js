var nav2Node = document.querySelector('.navbarSecondary');
var navNode = document.querySelector('.navbar');
var yOld = navNode.getBoundingClientRect().y;

document.onscroll = function() {
	var yCur = navNode.getBoundingClientRect().y;
	if(yCur > yOld) nav2Node.classList.add('navbarSecondary--disappear');
	else nav2Node.classList.remove('navbarSecondary--disappear');
	yOld = yCur;
};


//button menu
var menuNode = document.querySelector('.screen__menu');
document.onclick = function(){
	menuNode.classList.toggle('')
}