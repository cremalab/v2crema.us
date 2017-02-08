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
  
  // let top_mask  = document.getElementById('showcase-mask-top')
  // let bot_mask  = document.getElementById('showcase-mask-bot')
  // let taglines = document.getElementById('taglines')
  let tagline_1 = document.getElementById('tagline-1')
  let tagline_2 = document.getElementById('tagline-2')
  let tagline_3 = document.getElementById('tagline-3')
  let tagline_4 = document.getElementById('tagline-4')
   
  // top-showcase-mask waypoint
  new Waypoint({
    element: document.getElementById('trigger-copy-change-1'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_1.classList.add('tagline-animate-in-down')
      } else {
        tagline_1.classList.remove('tagline-animate-in-down')
        tagline_1.classList.remove('tagline-animate-out')
        tagline_2.classList.remove('tagline-animate-in-down')
      }
    }  
  })

  // bot-showcase-mask waypoint
  new Waypoint({
    element: document.getElementById('trigger-copy-change-2'), 
    handler: function(direction) {
      if (direction == 'down') {
        // tagline_1.classList.add('tagline-animate-out-left')
        tagline_1.classList.add('tagline-animate-out')
        tagline_1.classList.remove('tagline-animate-in-down')
        tagline_2.classList.remove('tagline-animate-out')
        tagline_2.classList.add('tagline-animate-in-down')
      } else {
        tagline_2.classList.remove('tagline-animate-in-down')
        tagline_2.classList.add('tagline-animate-out')
        tagline_1.classList.add('tagline-animate-in-down')
        tagline_1.classList.remove('tagline-animate-out')
        
      }
    },
    // offset: window.innerHeight  
  })
   // third triger to change language
  new Waypoint({
    element: document.getElementById('trigger-copy-change-3'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_2.classList.add('tagline-animate-out')
        tagline_2.classList.remove('tagline-animate-in-down')
        tagline_3.classList.remove('tagline-animate-out')
        tagline_3.classList.add('tagline-animate-in-down')
      } else {
        tagline_3.classList.remove('tagline-animate-in-down')
        tagline_3.classList.add('tagline-animate-out')
        tagline_2.classList.add('tagline-animate-in-down')
        tagline_2.classList.remove('tagline-animate-out')
      }
    },
  })
   // third triger to change language
  new Waypoint({
    element: document.getElementById('trigger-copy-change-4'), 
    handler: function(direction) {
      if (direction == 'down') {
        tagline_3.classList.add('tagline-animate-out')
        tagline_3.classList.remove('tagline-animate-in-down')
        tagline_4.classList.add('tagline-animate-in-down')
      } else {
        tagline_3.classList.remove('tagline-animate-out')
        tagline_3.classList.add('tagline-animate-in-down')
        tagline_4.classList.remove('tagline-animate-in-down')
        tagline_4.classList.add('tagline-animate-out')
      }
    },
  })
  
  // // First triger to change language
  // new Waypoint({
  //   element: document.getElementById('trigger-copy-change-1'), 
  //   handler: function(direction) {
  //     let tagline_1 = document.getElementById('tagline-1')
  //     let tagline_2 = document.getElementById('tagline-2')
  //     if (direction == 'down') {
  //       tagline_1.classList.add('-opacity-0')
  //       tagline_2.classList.remove('-opacity-0')
  //     } else {
  //       tagline_1.classList.remove('-opacity-0')
  //       tagline_2.classList.add('-opacity-0')
  //     }
  //   },
  //   // offset: window.innerHeight * .5  
  // })
  
  // // Second triger to change language
  // new Waypoint({
  //   element: document.getElementById('trigger-copy-change-2'), 
  //   handler: function(direction) {
  //     let tagline_2 = document.getElementById('tagline-2')
  //     let tagline_3 = document.getElementById('tagline-3')
  //     if (direction == 'down') {
  //       tagline_2.classList.add('-opacity-0')
  //       tagline_3.classList.remove('-opacity-0')
  //     } else {
  //       tagline_2.classList.remove('-opacity-0')
  //       tagline_3.classList.add('-opacity-0')
  //     }
  //   },
  //   // offset: window.innerHeight * .5  
  // })
  
 

})