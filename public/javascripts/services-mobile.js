//this is only loaded if screen size is 800 pixels or less
//via script tag on services.jade 

import $ from 'jquery'
import 'slick-carousel'


let serviceTextMobile = []
let lastSlideIdx = 0
$('.mobile-vid-wrapper').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  infinite: false
})

$('.mobile-vid-wrapper').on('swipe', function(event, slick, direction){
  // console.log(slick)
  serviceTextMobile[lastSlideIdx].style.transition = 'opacity .2s'
  serviceTextMobile[lastSlideIdx].style.opacity = 0
  serviceTextMobile[slick.currentSlide].style.transition = 'opacity 1.3s'
  serviceTextMobile[slick.currentSlide].style.opacity = 1
  lastSlideIdx = slick.currentSlide
})

$(document).ready( () => {  
  addPlayBtnListeners('mobile-service-vid')
  serviceTextMobile = $('.service-text-mobile')
  serviceTextMobile[0].style.opacity = 1 
})



function addPlayBtnListeners(className) {
    let btns = document.getElementsByClassName(className)
    console.log(btns)
    for (let i =0; i < btns.length; i++){
      btns[i].addEventListener('click', initServiceVideo.bind(btns[i]))  
    }
    
  }
  

  function initServiceVideo(){
    console.log(this.id)
    let vid = this.getElementsByTagName('iframe')[0]
    let btn = this.getElementsByClassName('play-btn-svg')[0]
    let spinner = this.getElementsByClassName('crema-spinner')[0]
    btn.style.zIndex = -1
    btn.style.animationName = 'crema-spinner-rev'
    spinner.style.animationName = 'crema-spinner'
    spinner.style.zIndex = -1
    console.log(btn)
    if (!vid.dataset.added) {
      vid.src = vid.dataset.src
      vid.dataset.added = 'true'
    }     
  }