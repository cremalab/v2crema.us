import $ from 'jquery'

$(document).ready(function(){
  
  function draw() {
        requestAnimationFrame(draw)
        scrollEvent()
  }
  draw()
 
})
 
function scrollEvent(){
  
  if(!is_touch_device()){
    let sym
    let viewportTop = $(window).scrollTop()
    let windowHeight = $(window).height()
    let viewportBottom = windowHeight + viewportTop
    if($(window).width())

    $('[data-parallax="true"]').each(function(){
      let distance = viewportTop * $(this).attr('data-speed');
      if($(this).attr('data-direction') === 'up'){sym = '-' } else { sym = '' }
      $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)')
    })
    
  }
}   
 
function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}