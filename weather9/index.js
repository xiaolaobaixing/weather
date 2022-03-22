const axios = require('axios')

function getWeather(city) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api2.jirengu.com/getWeather.php`)
    .then( response => {
      resolve(response.data)
    }).catch(e => {
      console.log(e)
      reject('网络异常')
    })
  })

}

module.exports = getWeather