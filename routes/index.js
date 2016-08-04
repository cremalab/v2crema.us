var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')

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

module.exports = router
