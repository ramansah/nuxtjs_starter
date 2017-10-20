var axios = require('axios')

var client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0'
})

module.exports = client