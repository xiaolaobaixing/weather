# weather
获取天气
注册npmjs.com
git bsah 创建文件，npm init


{
  "name": "weather9",
  "version": "1.0.0",
  "description": "weather",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "weather"
  ],
  "author": "liudeliang",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.26.1"
  }
}

index.js部分：
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

利用gitbash输入npm install save-- axios从npmjs.com上下载axios到weather9中。

test.js部分：
const weather = require('./index.js')

weather('北京')
  .then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
  
  发送到npm中。npm login输入登录名 密码，Email。然后npm publish
  
