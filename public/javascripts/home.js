import './_home-parallax'
import 'waypoints/lib/noframework.waypoints.js'
import Smooth from 'smooth-scroll'
import Blazy from 'blazy'

//SERVICES Page





if (document.getElementById('services-links') ) {
Smooth.init()

function addPlayBtnListeners(className) {
  let btns = document.getElementsByClassName(className)
  for (let i =0; i < btns.length; i++){
    btns[i].addEventListener('click', initServiceVideo.bind(btns[i]))  
  }
  
}
addPlayBtnListeners('videowrapper')

function initServiceVideo(iframeId){
  console.log(this.id)
  let vid = this.getElementsByTagName('iframe')[0]
  let btn = this.getElementsByClassName('play-btn-svg')[0]
  let spinner = this.getElementsByClassName('crema-spinner')[0]
  btn.style.zIndex= 0
  btn.style.animationName = 'crema-spinner-rev'
  spinner.style.animationName = 'crema-spinner'
  spinner.style.opacity = 1
  console.log(btn)
  if (!vid.dataset.added) {
    vid.src = vid.dataset.src
    vid.dataset.added = 'true'
  }    
  
  
}

function wayptOffset() {
  if (window.innerHeight > 910)
    return window.innerHeight * .87
  else
    return window.innerHeight * .75
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

function fadeText(upId, downId, upLink, downLink, direction, iframeId) {
  if (direction == 'up') {
    console.log(`Direction: ${direction} show ${upId}` )
    styleLinks(document.getElementById(upLink))
    document.getElementById(upId).style.opacity = 1
    document.getElementById(downId).style.opacity = 0
    
  } else {
    console.log(`Direction: ${direction} show ${downId}` )
    // if (iframeId) initServiceVideo(iframeId)
    styleLinks(document.getElementById(downLink))
    document.getElementById(upId).style.opacity = 0
    // document.getElementById(downId).style.opacity = 1
  }
}

function fadeTextIn(upId, downId, direction) {
  if (direction === 'up') {
    // document.getElementById(upId).style.opacity = 1
  }else {
    document.getElementById(downId).style.opacity = 1
  }
}


  new Waypoint({
      element: document.getElementById('proto-vid'),
      handler: function(direction) {
        fadeText('innovation', 'prototyping', 'service-inno-a', 'service-proto-a', direction, 'proto-iframe')
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('proto-pt'),
      handler: function(direction) {
        fadeTextIn('innovation', 'prototyping', direction)
      },
      offset: 200
  })

  new Waypoint({
      element: document.getElementById('branding-vid'),
      handler: function(direction) {
        fadeText('prototyping', 'branding', 'service-proto-a', 'service-branding-a', direction, 'branding-iframe')
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('branding-pt'),
      handler: function(direction) {
        fadeTextIn('prototyping', 'branding', direction)
      },
      offset: 100
  })
  new Waypoint({
      element: document.getElementById('ux-vid'),
      handler: function(direction) {
        fadeText('branding', 'ux', 'service-branding-a', 'service-ux-a', direction, 'ux-iframe')
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('ux-pt'),
      handler: function(direction) {
        fadeTextIn('branding', 'ux', direction)
      },
      offset: 100
  })
  new Waypoint({
      element: document.getElementById('api-vid'),
      handler: function(direction) {
        fadeText('ux', 'api', 'service-ux-a', 'service-api-a', direction, 'api-iframe')
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('api-pt'),
      handler: function(direction) {
        fadeTextIn('ux', 'api', direction)
      },
      offset: 100
  })
  new Waypoint({
      element: document.getElementById('mobile-vid'),
      handler: function(direction) {
        fadeText('api', 'mobile', 'service-api-a', 'service-mobile-a', direction, 'mobile-iframe')
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('mobile-pt'),
      handler: function(direction) {
        fadeTextIn('api', 'mobile', direction)
      },
      offset: 100
  })
  new Waypoint({
      element: document.getElementById('test-vid'),
      handler: function(direction) {
        fadeText('mobile','test','service-mobile-a', 'service-test-a', direction, 'test-iframe' )
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('test-pt'),
      handler: function(direction) {
        fadeTextIn('mobile', 'test', direction)
      },
      offset: 100
  })
  new Waypoint({
      element: document.getElementById('product-vid'),
      handler: function(direction) {
        fadeText('test', 'product', 'service-test-a', 'service-product-a', direction, 'product-iframe')
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('product-pt'),
      handler: function(direction) {
        fadeTextIn('test', 'product', direction)
      },
      offset: 100
  })
  new Waypoint({
      element: document.getElementById('early-vid'),
      handler: function(direction) {
        fadeText('product','early','service-product-a', 'service-early-a', direction, 'early-iframe' )
      },
      offset: wayptOffset()  
  })
  new Waypoint({
      element: document.getElementById('early-pt'),
      handler: function(direction) {
        fadeTextIn('product', 'early', direction)
      },
      offset: 100
  })
  //final way point
  new Waypoint({
      element: document.getElementById('fade-links-text'),
      handler: function(direction) {
        
        if (direction == 'up') {
          document.getElementById('services-links').style.opacity = 1
          document.getElementById('early').style.opacity = 1
        } else {
          document.getElementById('services-links').style.opacity = 0
          document.getElementById('early').style.opacity = 0
        }
      },
      offset: window.innerHeight < 905 ? window.innerHeight * .75 : window.innerHeight * .65  
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




