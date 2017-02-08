import $ from 'jquery'
import 'waypoints/lib/noframework.waypoints.js'

$(document).ready(()=>{
  
  let headerVideo = document.getElementById('bgvid') 
  new Waypoint({
    element: document.getElementById('trigger-video-off'), 
    handler: function(direction) {
      if (direction == 'down') {
       headerVideo.pause()
      } else {
        headerVideo.play()
      }
    }
  })
  
  // // let top_mask  = document.getElementById('showcase-mask-top')
  // // let bot_mask  = document.getElementById('showcase-mask-bot')
  // // let taglines = document.getElementById('taglines')
  let tagline_1 = document.getElementById('tagline-1')
  let tagline_2 = document.getElementById('tagline-2')
  let tagline_3 = document.getElementById('tagline-3')
  let tagline_4 = document.getElementById('tagline-4')
  let triggerOffset = .3
   
  // top-showcase-mask waypoint
  new Waypoint({
    element: document.getElementById('trigger-copy-change-1'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_1.classList.add('tagline-animate-in')
      } else {
        tagline_1.classList.add('tagline-animate-in')
        tagline_2.classList.remove('tagline-animate-in')
      }
    }  
  })
  new Waypoint({
    element: document.getElementById('trigger-copy-change-2'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_2.classList.add('tagline-animate-in')
        tagline_1.classList.remove('tagline-animate-in')
      } else {
        tagline_2.classList.add('tagline-animate-in')
        tagline_3.classList.remove('tagline-animate-in')
      }
    },
    offset: window.innerHeight * triggerOffset
  })
  new Waypoint({
    element: document.getElementById('trigger-copy-change-3'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_3.classList.add('tagline-animate-in')
        tagline_2.classList.remove('tagline-animate-in')
      } else {
        tagline_3.classList.add('tagline-animate-in')
        tagline_4.classList.remove('tagline-animate-in')
      }
    },
    offset: window.innerHeight * triggerOffset
  })
  new Waypoint({
    element: document.getElementById('trigger-copy-change-4'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_4.classList.add('tagline-animate-in')
        tagline_3.classList.remove('tagline-animate-in')
      } else {
        tagline_3.classList.add('tagline-animate-in')
        tagline_4.classList.remove('tagline-animate-in')
      }
    },
    offset: window.innerHeight * triggerOffset
  })


 
 

})