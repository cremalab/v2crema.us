import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import Blazy from 'blazy'
var smoothScroll = require('smoothscroll');

 var bLazy = new Blazy({
   successClass: 'img-fadein',
   offset: 0
 })


if (document.getElementById('crema-vid-mask') ) {
  //resize home page video
  let cremaVid = document.getElementById('crema-vid-logo')
  window.addEventListener('resize', () => {
    let vidMask = document.getElementById('video-size')
    cremaVid.style.height = `${vidMask.clientHeight -20}px`
    cremaVid.style.width = `${vidMask.clientWidth -20}px`
  })
  
  //turn crema video off and on if on homepage  
  new Waypoint({
      element: document.getElementById('showcase1'),
      handler: function(direction) {
        if (direction == 'up') {
          cremaVid.play()
          console.log('play logo vid')
        } else {
          cremaVid.pause()
          console.log('pause logo vid')
        }
      },  
  })

  let scrollEnt = document.getElementById('scroll-enterprise')
  let enterprise = document.getElementById('ML-img')
  let handleScrollEnt = function(event) {
    event.preventDefault()
    smoothScroll(enterprise)
  }
  scrollEnt.addEventListener('click',handleScrollEnt)
  
  let scrollInnovate = document.getElementById('scroll-innovate')
  let innovate = document.getElementById('tilr-mobile-img')
  let handleScrollInno = function(event) {
    event.preventDefault()
    smoothScroll(innovate, 800)
  }
  scrollInnovate.addEventListener('click',handleScrollInno)
  
  let scrollOur = document.getElementById('scroll-our')
  let ourWork = document.getElementById('scroll-to-this-point')
  let handleScrollOur = function(event) {
    event.preventDefault()
    smoothScroll(ourWork, 900)
  }
  scrollOur.addEventListener('click',handleScrollOur)
  
}




