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
   
  //  $('.showcase').slick({
  //   vertical:true,    
  //   dots:false,
  //   infinite: true,
  //   slidesToShow:2
  // });

  
    new Waypoint({
        element: document.getElementById('first-card'), 
        handler: function(direction) {
          let el_style = document.getElementById('cards-wrapper').style
          if (direction == 'down') {
            el_style.overflowX = 'scroll'
            console.log('Turning on scroll')
          } else {
            el_style.overflowX = 'initial'
            console.log('Turning off scroll')
          }
        }  
    })

    // new Waypoint({
    //     element: document.getElementById('stop-scroll'), 
    //     handler: function(direction) {
    //       if (direction == 'down') {
    //         document.getElementById('cards-wrapper').style.overflowX = 'initial'
    //         console.log('TAGLINE: Turning off scroll')
    //       }
    //     },
    //     offset: window.innerHeight * .1
    // })

  

  $('#slide-btn-0').click(() => {
    $('#showcase').css('transform', "translateY(0)")
    $('#slide-btn-1 > div').removeClass('clicked')
    $('#slide-btn-2 > div').removeClass('clicked')
    $('#slide-btn-0 > div').addClass('clicked')
  })
  $('#slide-btn-1').click(() => {
    $('#showcase').css('transform', "translateY(-33.3%)")
    $('#slide-btn-0 > div').removeClass('clicked')
    $('#slide-btn-2 > div').removeClass('clicked')
    $('#slide-btn-1 > div').addClass('clicked')
    $('#slide-btn-1 > div').removeClass('pulse')
  })
  $('#slide-btn-2').click(() => {
    $('#showcase').css('transform', "translateY(-66.6%)")
    $('#slide-btn-0 > div').removeClass('clicked')
    $('#slide-btn-1 > div').removeClass('clicked')
    $('#slide-btn-2 > div').addClass('clicked')
    $('#slide-btn-1 > div').removeClass('pulse')
  })





  //resize home page video
  let cremaVid = document.getElementById('crema-vid-logo')
  window.addEventListener('resize', () => {
    let vidMask = document.getElementById('video-size')
    cremaVid.style.height = `${vidMask.clientHeight -20}px`
    cremaVid.style.width = `${vidMask.clientWidth -20}px`
  })
  
  //turn crema video off and on if on homepage  
  // new Waypoint({
  //     element: document.getElementById('showcase1'),
  //     handler: function(direction) {
  //       if (direction == 'up') {
  //         cremaVid.play()
  //         console.log('play logo vid')
  //       } else {
  //         cremaVid.pause()
  //         console.log('pause logo vid')
  //       }
  //     },  
  // })

  
})
  




