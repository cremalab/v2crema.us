import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import Blazy from 'blazy'

 var bLazy = new Blazy({
   successClass: 'img-fadein',
   offset: 0
 })

//turn crema video off and on if on homepage
if (document.getElementById('crema-vid-mask') ) {
  let cremaVid = document.getElementById('crema-vid-logo')
   
  window.addEventListener('resize', () => {
    let vidMask = document.getElementById('video-size')
    
    
    cremaVid.style.height = `${vidMask.clientHeight -20}px`
    cremaVid.style.width = `${vidMask.clientWidth -20}px`
    console.log(cremaVid.clientHeight, cremaVid.clientWidth)

  })
  
  
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
}




