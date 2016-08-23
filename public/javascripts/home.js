import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import Blazy from 'blazy'

 var bLazy = new Blazy({
   successClass: 'img-fadein'
 })

//turn crema video off and on if on homepage
if (document.getElementById('crema-vid-logo') ) {
  let cremaVid = document.getElementById('crema-vid-logo')
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




