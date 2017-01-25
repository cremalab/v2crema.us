import $ from 'jquery'
import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import Blazy from 'blazy'
import 'slick-carousel'

 var bLazy = new Blazy({
   successClass: 'img-fadein',
   offset: 0
 })

$(document).ready(()=>{
  let top_mask  = document.getElementById('showcase-mask-top')
  let bot_mask  = document.getElementById('showcase-mask-bot')
  let taglines = document.getElementById('taglines')
  let tagline_1 = document.getElementById('tagline-1')
   
  //  $('.showcase').slick({
  //   vertical:true,    
  //   dots:false,
  //   infinite: true,
  //   slidesToShow:2
  // });

  // top-showcase-mask waypoint
  new Waypoint({
    element: document.getElementById('cards-wrapper'), 
    handler: function(direction) {
      if (direction == 'down') {
        top_mask.classList.remove('showcase-mask-top-start')
        top_mask.classList.add('showcase-mask-top-scroll')
        bot_mask.classList.remove('showcase-mask-bot-start')
        bot_mask.classList.add('showcase-mask-bot-scroll')
        taglines.classList.remove('taglines-start')
        taglines.classList.add('taglines-scroll')
        console.log('cards-wrapper: Down')
      } else {
        top_mask.classList.remove('showcase-mask-top-scroll')
        top_mask.classList.add('showcase-mask-top-start')
        bot_mask.classList.remove('showcase-mask-bot-scroll')
        bot_mask.classList.add('showcase-mask-bot-start')
        taglines.classList.remove('taglines-scroll')
        taglines.classList.add('taglines-start')
        console.log('cards-wrapper: Up')
      }
    }  
  })

  // bot-showcase-mask waypoint
  new Waypoint({
    element: document.getElementById('waypoints-logos'), 
    handler: function(direction) {
      if (direction == 'down') {
        top_mask.classList.remove('showcase-mask-top-scroll')
        top_mask.classList.add('showcase-mask-top-end')
        bot_mask.classList.remove('showcase-mask-bot-scroll')
        bot_mask.classList.add('showcase-mask-bot-end')
        taglines.classList.remove('taglines-scroll')
        taglines.classList.add('taglines-end')
        console.log('cards-wrapper: Down')
      } else {
        top_mask.classList.remove('showcase-mask-top-end')
        top_mask.classList.add('showcase-mask-top-scroll')
        bot_mask.classList.remove('showcase-mask-bot-end')
        bot_mask.classList.add('showcase-mask-bot-scroll')
        taglines.classList.remove('taglines-end')
        taglines.classList.add('taglines-scroll')
        console.log('cards-wrapper: Up')
      }
    },
    offset: window.innerHeight  
  })
  // First triger to change language
  new Waypoint({
    element: document.getElementById('showcase-section-2'), 
    handler: function(direction) {
      let tagline_1 = document.getElementById('tagline-1')
      let tagline_2 = document.getElementById('tagline-2')
      if (direction == 'down') {
        tagline_1.classList.add('-opacity-0')
        tagline_1.classList.add('-translate-100-up')
        tagline_2.classList.remove('-opacity-0')
      } else {
        tagline_1.classList.remove('-opacity-0')
        tagline_1.classList.remove('-translate-100-up')
        tagline_2.classList.add('-opacity-0')
      }
    },
    offset: window.innerHeight * .5  
  })
  // Second triger to change language
  
  new Waypoint({
    element: document.getElementById('showcase-section-3'), 
    handler: function(direction) {
      let tagline_2 = document.getElementById('tagline-2')
      let tagline_3 = document.getElementById('tagline-3')
      if (direction == 'down') {
        tagline_2.classList.add('-opacity-0')
        tagline_2.classList.add('-translate-100-up')
        tagline_3.classList.remove('-opacity-0')
      } else {
        tagline_2.classList.remove('-opacity-0')
        tagline_2.classList.remove('-translate-100-up')
        tagline_3.classList.add('-opacity-0')
      }
    },
    offset: window.innerHeight * .5  
  })



  
})