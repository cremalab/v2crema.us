import $ from 'jquery'
import 'slick-carousel'
import 'magnific-popup'


var slickAdded = false
function initSlick() {
  slickAdded = true
  console.log('added slick')
  $('.rel-wrapper').slick({
      speed: 300,
  })
  let arrow = document.getElementById('value-right-arrow')
  //add back in for kaley if wanted
  // $('.rel-wrapper').on('swipe', function(event, slick, direction){
  //   console.log(slick.currentSlide, arrow)
  //   if (slick.currentSlide != 0) 
  //     arrow.style.opacity = 0
  //   else  
  //     arrow.style.opacity = .7
  // })
}

function unslick() {
  slickAdded = false
  console.log('removed slick')
  $('.rel-wrapper').slick('unslick')
}


$(document).ready( () => {  
  // load slick if needed and add listener 
  if(window.innerWidth < 1201) 
    initSlick()
  
  window.onresize = function() {
    if ( window.innerWidth < 1201 && !slickAdded ) { 
      initSlick()
    }
    else if( window.innerWidth > 1200 && slickAdded ) {
      unslick()
    }
  }
    
  

  $('.team-culture-video').magnificPopup({
        type: 'iframe',
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
    
})
