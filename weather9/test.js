const weather = require('./index.js')

weather('北京')
  .then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })