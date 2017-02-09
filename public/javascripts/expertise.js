import $ from 'jquery'
import 'magnific-popup'

$(document).ready( () => {  

$('.video-library').magnificPopup({
      delegate: 'a',
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
      




