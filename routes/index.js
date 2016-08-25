var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var axios = require('axios')

let postTitles =[]
function getLatestMedium() {
  axios.get('https://medium.com/@cremalab/latest?format=json')
    .then(function (res) {
      // console.log(res.data)
      let posts = JSON.parse(res.data.slice(16)).payload.references.Post
      
      for (let key in posts) {
        postTitles.push([posts[key].title, posts[key].uniqueSlug ])
      }
      console.log(postTitles)
    })
    .catch(function (error) {
      console.log(error)
    })
}
getLatestMedium()

setInterval( getLatestMedium, 1000 * 1000 * 86 ) // refresh medium links 1 time per day. 

// returns array of image paths when given abs url to directory
//default
function makeRelativeImgPaths(absUrl, relativeUrl) {
  return new Promise( (resolve, reject) => {
    fs.readdir(absUrl, function(err, names){
      if (err) reject('Error returning logo filenames:', err)
      let temp =  names.map(name => relativeUrl + name)
      // console.log(temp)
      resolve(temp)
    })
  })
  
}
var techImgPaths = [] 
var techSubs = [
  'Android', 'Angular', 'Apple', 'Monkey C', 'CSS', 'HTML5', 'Java', 'Javascript', 'Node', 'Rails', 'React', 'Redux', 'Ruby', 'Swift'
]
makeRelativeImgPaths('./public/images/services/tech-logos', '/images/services/tech-logos/').then(logos => techImgPaths = logos)
var integrationImgPaths = []
var integrationSubs = [
  'Asana', 'Firebase', 'Github', 'Google Analytics', 'Heroku', 'Intercom', 'Mailchimp', 'Mixpanel', 'Pubnub', 'Sendgrid', 'Slack', 'Twilio'
]
makeRelativeImgPaths('./public/images/services/integration-logos', '/images/services/integration-logos/').then(logos => integrationImgPaths = logos)


// Path to folder with comapany logos
var pathToLogos = './public/images/logos/client-logos'
var relativePathToLogos = '/images/logos/client-logos/'
var logoFileNames = []

fs.readdir(pathToLogos, function(err, names){
  if (err) console.log('Error returning logo filenames:', err)
  logoFileNames = names.map(logoName => relativePathToLogos + logoName)
  console.log(logoFileNames.length, 'Client logos loaded Sucessfully')
})

//Path to Team Photos
var pathToTeam = './public/images/team'
var relativeTeamPath = '/images/team/'
var teamPhotos = []

fs.readdir(pathToTeam, function(err, photos){
  if (err) console.log('Error returning team filenames:', err)
  teamPhotos = photos.map(photoName => relativeTeamPath + photoName)
  console.log(teamPhotos.length, 'Team Photos Loaded Sucessfully')
})

// Get Team name and titles in same order as photos
var teamNameTitles = fs.readFileSync('public/images/team-names-titles.txt').toString().split('\n')
console.log(teamNameTitles.length, 'Team Titles Loaded Sucessfully')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crema.us', logoFileNames: logoFileNames })
})

router.get('/services', function(req, res, next) {
    res.render('services', { 
      title: 'Crema.us',
      logoFileNames: techImgPaths, 
      techSubs: techSubs,  
      techNum: techSubs.length,
      integrationFileNames: integrationImgPaths, 
      integrationSubs: integrationSubs,
      integrationNum: integrationSubs.length
    })
})

/* GET home page. */
router.get('/expertise', function(req, res, next) {
  res.render('expertise', { title: 'Crema.us - Expertise', mediumPosts: postTitles })
})


// Work Galleries
router.get('/enterprise-work', function(req, res, next) {
  res.render('partials/work-modals/enterprise', { title: 'Crema.us - Enterprise Work'})
})
router.get('/innovative-work', function(req, res, next) {
  res.render('partials/work-modals/innovative', { title: 'Crema.us - Innovative Ventures'})
})
router.get('/our-work', function(req, res, next) {
  res.render('partials/work-modals/crafting', { title: 'Crema.us - Our Products'})
})



module.exports = router
