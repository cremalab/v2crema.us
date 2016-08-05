import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import 'Blazy'
 var bLazy = new Blazy();
console.log(bLazy)
//turn crema video off and on
let cremaVid = document.getElementById('crema-vid-logo')
new Waypoint({
    element: document.getElementById('showcase1'),
    handler: function(direction) {
      if (direction == "up") {
        cremaVid.play()
        console.log('play logo vid')
      } else {
        cremaVid.pause()
        console.log('pause logo vid')
      }
    },  
})

//load imgs



