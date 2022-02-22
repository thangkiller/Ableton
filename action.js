var navTwoNode = document.querySelector('.navbarSecondary');
var navElement = document.getElementsByClassName('navbar')[0];
var yOld = navElement.getBoundingClientRect().y;
document.onscroll = function() {
	var yCur = navElement.getBoundingClientRect().y;
	if(yCur > yOld) navTwoNode.classList.add('navbarSecondary--disappear');
	else navTwoNode.classList.remove('navbarSecondary--disappear');
	yOld = yCur;
};
//button menu
var btnNode = document.querySelector('.screen--short__navbar__button');
var menuNode = document.querySelector('.screen--short__menu');
var navNode = document.querySelector('.screen--short');
btnNode.onclick = function(){
	menuNode.classList.toggle('menu--disappear');
	navNode.classList.toggle('menu--changed');
}