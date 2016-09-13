//this is only loaded if screen size is 800 pixels or less
//via script tag on services.jade 

import $ from 'jquery'
import 'slick-carousel'
import 'magnific-popup'


let serviceTextMobile = []
let lastSlideIdx = 0
$('.mobile-vid-wrapper').slick({
  dots: false,
  speed: 300,
  centerMode: true,
  infinite: true
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

$('.mobile-vid-wrapper').magnificPopup({
      delegate: 'a',
      type: 'iframe',
      alignTop: true,
      iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }
            src: '//www.youtube.com/embed/%id%?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&enablejsapi=1?controls=0&modestbranding=1&autoplay=1&showinfo=0&iv_load_policy=3&enablejsapi=1' // URL that will be set as a source for iframe.
          }
        }
      }
      
      
    })    
      

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
    console.log('click')
    let btn = this.getElementsByClassName('play-btn-svg')[0]
    let spinner = this.getElementsByClassName('crema-spinner')[0]
    btn.style.animationName = 'crema-spinner-rev'
    spinner.style.animationName = 'crema-spinner'
  }