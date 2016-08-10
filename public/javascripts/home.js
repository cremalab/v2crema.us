import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import Smooth from 'smooth-scroll'
import Blazy from 'blazy'

//SERVICES Page





if (document.getElementById('services-links') ) {
Smooth.init()

function initServiceVideo(iframeId){
  let vid = document.getElementById(iframeId)
    if (!vid.dataset.added) {
      setTimeout(function() {
        vid.src = vid.dataset.src
        vid.dataset.added = 'true'  
      }, 250)
       
    }
}

let links = document.getElementById('services-links').getElementsByTagName('a')
function styleLinks(el) {
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = '#afafaf'
    links[i].getElementsByTagName('img')[0].style.opacity = 0   
  }
  el.style.color = 'black' 
  el.getElementsByTagName('img')[0].style.opacity = 1 
  }



  new Waypoint({
      element: document.getElementById('proto-vid'),
      handler: function(direction) {
        
        console.log('fire prototyping waypoint')
        if (direction == 'up') {
          styleLinks(document.getElementById('service-inno-a'))
          document.getElementById('innovation').style.opacity = 1
          document.getElementById('prototyping').style.opacity = 0
        } else {
          styleLinks(document.getElementById('service-proto-a'))
          initServiceVideo('proto-iframe')
          document.getElementById('innovation').style.opacity = 0
          document.getElementById('prototyping').style.opacity = 1 
        }
      },
      offset: window.innerHeight * .45  
  })
  new Waypoint({
      element: document.getElementById('branding-vid'),
      handler: function(direction) {
        if (direction == 'up') {
          styleLinks(document.getElementById('service-proto-a'))
          document.getElementById('prototyping').style.opacity = 1
          document.getElementById('branding').style.opacity = 0
        } else {
          initServiceVideo('branding-iframe')
          styleLinks(document.getElementById('service-branding-a')) 
          document.getElementById('prototyping').style.opacity = 0
          document.getElementById('branding').style.opacity = 1
        }
      },
      offset: window.innerHeight * .45  
  })
  new Waypoint({
      element: document.getElementById('ux-vid'),
      handler: function(direction) {
        if (direction == 'up') {
          styleLinks(document.getElementById('service-branding-a'))
          document.getElementById('branding').style.opacity = 1
          document.getElementById('ux').style.opacity = 0
          
        } else {
          initServiceVideo('ux-iframe')
          styleLinks(document.getElementById('service-ux-a'))
          document.getElementById('branding').style.opacity = 0
          document.getElementById('ux').style.opacity = 1
          

        }
      },
      offset: window.innerHeight * .45  
  })

  new Waypoint({
      element: document.getElementById('fade-links-text'),
      handler: function(direction) {
        if (direction == 'up') {
          document.getElementById('services-links').style.opacity = 1
          document.getElementById('ux').style.opacity = 1
        } else {
          document.getElementById('services-links').style.opacity = 0
          document.getElementById('ux').style.opacity = 0
        }
      },
      offset: window.innerHeight < 905 ? window.innerHeight * .65 : window.innerHeight * .45  
  })
}



//SERVICES Page

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




