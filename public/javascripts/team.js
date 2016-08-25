
let links = document.getElementById('services-links').getElementsByTagName('a')
  function styleLinks(el) {
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = '#afafaf'
      links[i].getElementsByTagName('img')[0].style.opacity = 0   
    }
    el.style.color = 'black' 
    el.getElementsByTagName('img')[0].style.opacity = 1 
  }