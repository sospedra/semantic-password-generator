import fetch from 'isomorphic-unfetch'
import { decode } from 'ent'

const RX_HTML_TAGS = /<\/?[^>]+(>|$)/g
const RX_BASIC_ASCII = /[^\x20-\xFF]/g
const WIKI_ROOT = 'https://en.wikipedia.org/w/api.php?action=query'
const WIKI_RANDOM_PATH = [
  'generator=random',
  'grnnamespace=0',
  'prop=extracts',
  'exchars=500',
  'format=json',
  'origin=*',
].join('&')

/**
 * Trasnform the response's chunks into a JSON and then
 * strip the HTML tags, HTML entities (decode) and non-basic-ascii
 * code (accents allowed) from the payload's extract attr.
 */
const parse = (raw: string) => {
  const payload = JSON.parse(raw)
  const { pages } = payload.query
  const { extract } = pages[Object.keys(pages)[0]]

  return decode(extract.replace(RX_HTML_TAGS, '').replace(RX_BASIC_ASCII, ''))
}

export default async function request() {
  const response = await fetch(`${WIKI_ROOT}&${WIKI_RANDOM_PATH}`)

  if (response.status >= 400) {
    new Error(
      `Request failed. Code: ${response.status}. Text: ${response.statusText}`,
    )
  }

  const payload = await response.json()

  return parse(payload)
}
