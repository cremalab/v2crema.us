var axios = require('axios')

module.exports = {
  getLatestMedium: function() {
    return new Promise((resolve) => {
      let postTitles = []
      let defaultTitles = [
          [ 'Cremalab Presents: Innovation Lab','cremalab-presents-innovation-lab-46b21dcacf4b' ],
          [ 'Top 5 reasons to launch your product with a creative agency', 'top-5-reasons-to-launch-your-product-with-a-creative-agency-17bc37352c1e' ],
          [ 'HipHire: Shifting Job Listing Services from Quantity to Quality', 'hiphire-shifting-job-listing-services-from-quantity-to-quality-f06351f115fc' ]
        ]
      
      axios.get('https://medium.com/ideas-by-crema/latest?format=json')
        .then(function (res) {
          let posts = JSON.parse(res.data.slice(16)).payload.posts
          let maxArticles = 0
          for (let key in posts) {
            if (maxArticles > 4)
              break
            postTitles.push([posts[key].title, posts[key].uniqueSlug ])
            maxArticles++
          }
          console.log(postTitles.length, 'Medium Posts Retrieved from ideas-by-crema/latest')
          resolve(postTitles)
        })
        .catch(function (error) {
          console.log(error)
          postTitles = defaultTitles
          resolve(postTitles)
        })
    })  
  },
  getJobPostings: function() {
    return new Promise(resolve => {
      axios.get('https://www.workable.com/spi/v3/accounts/cremalab/jobs?state=published',
      {
        headers: {'Authorization': `Bearer ${process.env.WORKABLE}`}
      })
      .then( res => {
        resolve( res.data.jobs.map(job => [job.title, job.url]) )
      })
      .catch( err => {
        console.log(err)
        resolve([])
      })
    })
  }
}







