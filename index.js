const nlp = require('compromise')
const fetch = require('node-fetch')
const random = require('lodash.random')

const SYMBOLS = '@#$%{}[]()/~,;:.><'.split('')
const WIKI_ROOT = 'https://en.wikipedia.org/w/api.php?action=query'
const WIKI_RANDOM_PATH = [
  'generator=random',
  'grnnamespace=0',
  'prop=extracts',
  'exchars=500',
  'format=json'
].join('&')

const fetchArticle = async () => {
  const response = await fetch(`${WIKI_ROOT}&${WIKI_RANDOM_PATH}`)
  const payload = await response.json()
  const { pages } = payload.query
  const { extract } = pages[Object.keys(pages)[0]]

  // strip some tags and non-basic-ascii code (accents allowed)
  return extract
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/[^\x20-\xFF]/g, '')
}

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

;(async function main () {
  const article = await fetchArticle()
  const doc = nlp(article)
  const sentences = doc.sentences().out('array')
  const password = generator(sentences, 30)

  console.log(password)
})()
