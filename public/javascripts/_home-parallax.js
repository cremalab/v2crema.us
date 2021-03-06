import $ from 'jquery'
function draw() {
      requestAnimationFrame(draw)
      scrollEvent()
}
draw()

 
function scrollEvent(){
  if(!is_small_device()){
    let sym
    let viewportTop = $(window).scrollTop()
    let windowHeight = $(window).height()
    let viewportBottom = windowHeight + viewportTop
    if($(window).width())

    $('[data-parallax="true"]').each(function(){
      if (isElementInViewport( this ) ) {
        let distance = viewportTop * $(this).attr('data-speed')
        if($(this).attr('data-direction') === 'up'){sym = '-' } else { sym = '' }
        $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)')
      }
    })
  }
}   
 
function is_small_device() {
  return window.innerWidth < 701
}

function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0]
    }

    var rect = el.getBoundingClientRect()

    return (
        rect.top >= -1200 &&
        rect.left >= -250 &&
        (rect.bottom - 1200) <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        (rect.right - 250) <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    )
}