const nlp = require('compromise')
const random = require('lodash.random')

const request = require('./request')

const SYMBOLS = '@#$%{}[]()/~,;:.><'.split('')
const generator = (sentences, severity) => {
  const data = sentences.filter((x) => x.length > severity)
  const base = data[0]

  if (!base) return null

  const mayusQty = Number.parseInt(severity / random(50, 80) * 10)
  const mayusCoords = Array(mayusQty).join(0).split(0).map(() => random(severity))
  const password = base
    .replace(/ /g, () => SYMBOLS[random(SYMBOLS.length - 1)])
    .split('')
    .map((char, idx) => mayusCoords.includes(idx) ? char.toUpperCase() : char)
    .slice(0, severity)
    .join('')

  return nlp(password).normalize().out()
}

module.exports = function main () {
  return new Promise((resolve, reject) => {
    request()
      .catch((err) => reject(err))
      .then((article) => {
        const doc = nlp(article)
        const sentences = doc.sentences().out('array')
        const password = generator(sentences, 30)

        resolve(password)
      })
  })
}
