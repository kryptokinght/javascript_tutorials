'use strict'

const request = require('request')
const path = require('path')
const fs = require('fs')

const onError = (err, done) => {
  if (done) {
    return done(err)
  }
  throw err
}

const downloader = (options = {}) => {
  if (!options.url) {
    throw new Error('The option url is required')
  }

  if (!options.dest) {
    throw new Error('The option dest is required')
  }

  options = Object.assign({}, options)

  const done = options.done
  console.log(options);

  delete options.done
  options.encoding = null

  request(options, (err, res, body) => {
    if (err) {
      return onError(err, done)
    }

    if (body && res.statusCode === 200) {
      if (!path.extname(options.dest)) {
        options.dest = path.join(options.dest, path.basename(options.url))
      }

      fs.writeFile(options.dest, body, 'binary', (err) => {
        if (err) {
          return onError(err, done)
        }

        if (typeof done === 'function') {
          done(false, options.dest, body)
        }
      })
    } else {
      if (!body) {
        return onError(new Error(`Image loading error - empty body. URL: ${options.url}`), done)
      }
      onError(new Error(`Image loading error - ${res.statusCode}. URL: ${options.url}`), done)
    }
  })
}

downloader.image = (options = {}) => new Promise((resolve, reject) => {
  options.done = (err, dest, body) => {
    if (err) {
      return reject(err)
    }
    resolve({ filename: dest, image: body })
  }

  downloader(options)
})

let ops = {
  url: "https://scontent.fbom4-2.fna.fbcdn.net/v/t1.0-0/p417x417/18301288_1346565462091863_6532501301566105197_n.jpg?oh=9fcd6974845ccb1734f93f16db68cdd1&oe=5B466C12",
  dest: "images/test.jpg"
}
downloader.image({}).then(({filename, image}) => {
  console.log("Image saved to: ",filename)
}).catch((err) => {
  throw err
})

//module.exports = downloader