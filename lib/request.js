const https = require('https')
const decode = require('ent/decode')

const RX_HTML_TAGS = /<\/?[^>]+(>|$)/g
const RX_BASIC_ASCII = /[^\x20-\xFF]/g
const WIKI_ROOT = 'https://en.wikipedia.org/w/api.php?action=query'
const WIKI_RANDOM_PATH = [
  'generator=random',
  'grnnamespace=0',
  'prop=extracts',
  'exchars=500',
  'format=json',
  'origin=*'
].join('&')

/**
 * Trasnform the response's chunks into a JSON and then
 * strip the HTML tags, HTML entities (decode) and non-basic-ascii
 * code (accents allowed) from the payload's extract attr.
 *
 * @param  {Array} chunks - Response's buffer pieces
 * @return {String} Sanitized Wikipedia extract
 */
const bufferToString = (chunks) => {
  const raw = Buffer.concat(chunks).toString()
  const payload = JSON.parse(raw)
  const { pages } = payload.query
  const { extract } = pages[Object.keys(pages)[0]]

  return decode(extract
    .replace(RX_HTML_TAGS, '')
    .replace(RX_BASIC_ASCII, ''))
}

/**
 * Request a random Wikipedia article
 * @return {String} Sanitized article description
 */
module.exports = () => {
  return new Promise((resolve, reject) => {
    https.get(`${WIKI_ROOT}&${WIKI_RANDOM_PATH}`, (response) => {
      const bodyChunks = []
      const { statusCode } = response

      ;(statusCode >= 400) && reject(`Request failed. Code: ${statusCode}`)

      response
        .on('data', (chunk) => bodyChunks.push(chunk))
        .on('end', () => resolve(bufferToString(bodyChunks)))
    }).on('error', (err) => reject(err))
  })
}
