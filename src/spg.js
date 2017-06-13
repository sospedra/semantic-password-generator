const nlp = require('compromise')
const request = require('./request')
const generator = require('./generator')

module.exports = function main () {
  return new Promise((resolve, reject) => {
    request()
      .catch((err) => reject(err))
      .then((article) => {
        const doc = nlp(article)
        const sentences = doc.sentences().out('array')

        resolve(generator(sentences))
      })
  })
}
