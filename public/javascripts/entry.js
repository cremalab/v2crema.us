
import './home.js'
import './services.js'

let btns = document.getElementsByClassName('mango-btn')
let layoutWrapper = document.getElementsByClassName('layout-wrapper')[0]


//code that will run on all pages
Array.prototype.forEach.call(btns, (btn) => {
  btn.addEventListener('click', function() {
    console.log('fading...')
    layoutWrapper.style.opacity = 0
        
  })
})