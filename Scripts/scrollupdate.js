function resizeHeaderOnScroll() {
  
  let distanceY = mainContainer.scrollTop;

  const percentage = clamp(distanceY / 500.0, 0, 3);
  document.getElementsByClassName("MainContainer")[0].style.setProperty('--parallaxopacity', clamp(0.01/percentage*10), 0, 1);
  


  for(var i = 0; i < headerEls.length; i++){
    headerEls[i].style.width = `${parseInt(widths[i] * percentage * 1.5)}px`
    headerEls[i].style.paddingLeft = `${parseInt(paddingsLeft[i] * percentage)}px`
    headerEls[i].style.paddingRight = `${parseInt(paddingsRight[i] * percentage)}px`
  }

  
  
}

var clamp = (number, min, max) => {
  return Math.min(Math.max(number, min), max)
}

var headerEls;
var mainContainer;
var widths = []
var paddingsLeft = []
var paddingsRight = []

document.addEventListener("DOMContentLoaded", function(event) {
  headerEls = document.getElementsByClassName('nav-link')
  for(var i = 0; i < headerEls.length; i++){
    var width = window.getComputedStyle(headerEls[i], null).getPropertyValue('width')
    widths.push(parseInt(width.slice(0, width.length - 2)))

    var paddingLeft = window.getComputedStyle(headerEls[i], null).getPropertyValue('padding-left')
    paddingsLeft.push(parseInt(paddingLeft.slice(0, paddingLeft.length - 2)))

    var paddingRight = window.getComputedStyle(headerEls[i], null).getPropertyValue('padding-right')
    paddingsRight.push(parseInt(paddingRight.slice(0, paddingRight.length - 2)))

    headerEls[i].style.width = "0"
    headerEls[i].style.paddingLeft = "0"
    headerEls[i].style.paddingRight = "0"
  }
  mainContainer = document.getElementsByClassName("MainContainer")[0]
  mainContainer.addEventListener('scroll', resizeHeaderOnScroll)
});