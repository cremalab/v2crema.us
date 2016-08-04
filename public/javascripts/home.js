import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'

//turn crema video off and on
let cremaVid = document.getElementById('crema-vid-logo')
new Waypoint({
    element: document.getElementById('showcase1'),
    handler: function(direction) {
      if (direction == "up") {
        cremaVid.play()
        console.log('play')
      } else {
        cremaVid.pause()
        console.log('pause')
      }
    },
    
})

